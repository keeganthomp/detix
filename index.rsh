"reach 0.1";

const TicketProviderInterface = {
  getMaxNumberOfTickets: Fun([], UInt),
  getToken: Fun([], Token),
  ticketPrice: UInt,
  getAvailableTickets: Fun([UInt], Null),
};

const TicketBuyerInterface = {
  getTotal: Fun([UInt, UInt], UInt),
  getPurchasePrice: Fun([UInt, UInt], UInt),
  buyTicket: Fun([], Null),
  checkIfBuyingTicket: Fun([], Bool),
  getAvailableTickets: Fun([UInt], Null),
};

export const main = Reach.App(
  {},
  [
    Participant("TicketProvider", TicketProviderInterface), 
    ParticipantClass("TicketBuyer", TicketBuyerInterface),
  ],
  (TicketProvider, TicketBuyer) => {
    TicketProvider.only(() => {
      const token = declassify(interact.getToken());
      const numberOfTicketsAvailable = declassify(
        interact.getMaxNumberOfTickets()
      );
      const ticketPrice = declassify(interact.ticketPrice);
      assume(numberOfTicketsAvailable > 0);
    });

    TicketProvider.publish(numberOfTicketsAvailable, token, ticketPrice).pay([
      [numberOfTicketsAvailable, token],
    ]);
    require(numberOfTicketsAvailable > 0); 

    // Until timeout, allow buyers to buy ticket
    const [keepGoing, ticketsSold] = parallelReduce([
      true,
      0,
    ])
      .invariant(
        balance() == 0 &&
          balance(token) == numberOfTicketsAvailable - ticketsSold
      )
      .while(keepGoing && numberOfTicketsAvailable - ticketsSold != 0)
      .case(
        TicketBuyer,
        (() => ({
          when: declassify(interact.checkIfBuyingTicket()),
        })),
        ((_) => ticketPrice),
        ((_) => {
          const buyer = this;
          TicketBuyer.only(() => interact.buyTicket());
          require(balance(token) >= 1);
          transfer(1, token).to(buyer);
          transfer(ticketPrice).to(TicketProvider);
          TicketBuyer.only(() =>{
            interact.getAvailableTickets(balance(token))
          })
          return [balance(token) > 0, ticketsSold + 1];
        })
      )
      .timeout(100, () => {
        Anybody.publish();
        return [false, ticketsSold];
      });

    transfer(balance(token), token).to(TicketProvider);
    transfer(balance()).to(TicketProvider);

    commit();
    exit();
  }
);
