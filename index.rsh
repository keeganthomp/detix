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
  checkIfBuyingMore: Fun([], Null),
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
    })

    TicketProvider.publish(numberOfTicketsAvailable, token, ticketPrice).pay([
      [numberOfTicketsAvailable, token],
    ])

    commit()

    TicketBuyer.publish()

    var ticketsPurchased = 0
    invariant(balance() == 0)
    while (balance(token) > 0) {
      commit()
      TicketBuyer.only(() => {
        interact.buyTicket()
      })
      TicketBuyer.pay(ticketPrice)
      transfer(ticketPrice).to(TicketProvider)
      transfer(1, token).to(TicketBuyer)
      TicketProvider.only(() => {
        interact.getAvailableTickets(balance(token))
      })
      TicketBuyer.only(() => {
        interact.checkIfBuyingMore()
      })
      continue
    }

    commit()
    exit()
  }
)
