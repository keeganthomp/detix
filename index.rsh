'reach 0.1'

const TicketProviderInterface = {
    getMaxNumberOfTickets: Fun([], UInt),
    getToken: Fun([], Token),
    ticketPrice: UInt,
    getAvailableTickets: Fun([UInt], Null),
}

const TicketBuyerInterface = {
    getTotal: Fun([UInt, UInt], UInt),
    getPurchasePrice: Fun([UInt, UInt], UInt),
    buyTicket: Fun([], Null),
    checkIfBuyingMore: Fun([], Bool),
}

export const main = Reach.App(
    {},
    [
        Participant('TicketProvider', TicketProviderInterface),
        Participant('TicketBuyer', TicketBuyerInterface),
    ],
    (TicketProvider, TicketBuyer) => {
        TicketProvider.only(() => {
            const token = declassify(interact.getToken())
            const numberOfTicketsAvailable = declassify(
                interact.getMaxNumberOfTickets()
            )
            const ticketPrice = declassify(interact.ticketPrice)
            assume(numberOfTicketsAvailable > 0);
        })

        TicketProvider.publish(numberOfTicketsAvailable, token, ticketPrice).pay([[
            numberOfTicketsAvailable, token
        ]])
        require(numberOfTicketsAvailable > 0);

        commit()

        TicketBuyer.publish()

        // Until timeout, allow buyers to buy ticket
        const [keepGoing, ticketsSold, hasPurchased] = parallelReduce([true, 0, false])
            .invariant(balance() == 0 && balance(token) == numberOfTicketsAvailable - ticketsSold)
            .while(keepGoing && numberOfTicketsAvailable != 0)
            .case(
                TicketBuyer,
                (() => ({
                    when: !hasPurchased,
                })),
                ((_) => ticketPrice),
                ((_) => {
                    const buyer = this;
                    TicketBuyer.only(() => interact.buyTicket());
                    require(balance(token) >= 1);
                    transfer(1, token).to(buyer)
                    transfer(ticketPrice).to(TicketProvider)
                    return [balance(token) > 0, ticketsSold + 1, true];
                })
            ).timeout(5, () => {
                Anybody.publish();
                return [false, ticketsSold, false];
            });

        if (balance(token) > 0) {
            require(balance(token) > 0)
            transfer(balance(token)).to(TicketProvider)

        }
        transfer(balance()).to(TicketProvider)

        commit();
        exit()
    }
)