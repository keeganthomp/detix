'reach 0.1'

const TicketProviderInterface = {
  getMaxNumberOfTickets: Fun([], UInt),
  getTicket: Fun([], Token),
  ticketPrice: UInt,
  showAvailableTickets: Fun([UInt], Null),
}

const TicketBuyerInterface = {
  getTotal: Fun([UInt, UInt], UInt),
  getPurchasePrice: Fun([UInt, UInt], UInt),
  buyTicket: Fun([], Null),
  checkIfBuyingTicket: Fun([UInt, UInt], Bool),
  showAvailableTickets: Fun([UInt], Null),
  getTime: Fun([], UInt),
  log: Fun([Address], Null),
}

const TicketReceiverInterface = {}

export const main = Reach.App(
  {},
  [
    Participant('TicketProvider', TicketProviderInterface),
    ParticipantClass('TicketBuyer', TicketBuyerInterface),
    Participant('TicketReceiver', TicketReceiverInterface),
  ],
  (TicketProvider, TicketBuyer, TicketReceiver) => {
    TicketProvider.only(() => {
      const ticket = declassify(interact.getTicket())
      const numberOfTicketsAvailable = declassify(
        interact.getMaxNumberOfTickets()
      )
      const ticketPrice = declassify(interact.ticketPrice)
      assume(numberOfTicketsAvailable > 0)
    })

    TicketProvider.publish(numberOfTicketsAvailable, ticket, ticketPrice).pay([
      [numberOfTicketsAvailable, ticket],
    ])

    TicketProvider.only(() => {
      interact.showAvailableTickets(balance(ticket))
    })

    require(numberOfTicketsAvailable > 0)

    const [ticketsToPurchase, ticketsSold, buyerIndex] = parallelReduce([
      true,
      0,
      0,
    ])
      .invariant(
        balance() == 0 &&
          balance(ticket) == numberOfTicketsAvailable - ticketsSold
      )
      .while(ticketsToPurchase && numberOfTicketsAvailable - ticketsSold != 0)
      .case(
        TicketBuyer,
        () => {
          const consensusTime = lastConsensusTime()
          const isBuyingTicket = declassify(
            interact.checkIfBuyingTicket(consensusTime, ticketsSold)
          )
          return {
            when: isBuyingTicket,
          }
        },
        (_) => {
          return ticketPrice
        },
        (_) => {
          const buyer = this
          TicketBuyer.only(() => {
            interact.log(buyer)
          })
          require(balance(ticket) >= 1)
          transfer(1, ticket).to(buyer)
          transfer(ticketPrice).to(TicketProvider)
          TicketProvider.only(() => {
            interact.showAvailableTickets(balance(ticket))
          })
          return [balance(ticket) > 0, ticketsSold + 1, buyerIndex + 1]
        }
      )
      .timeout(5, () => {
        Anybody.publish()
        return [true, ticketsSold, buyerIndex]
      })

    transfer(balance(ticket), ticket).to(TicketProvider)
    transfer(balance()).to(TicketProvider)

    commit()
    exit()
  }
)
