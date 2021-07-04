import { loadStdlib } from '@reach-sh/stdlib'
import * as backend from './build/index.main.mjs'
import launchToken from '@reach-sh/stdlib/launchToken.mjs'

import optinToToken from './helpers/optinToToken.mjs'

const MAX_NUMBER_OF_TICKETS = 100
const TICKET_PRICE = 1

const runProgram = async () => {
  const stdlib = loadStdlib()

  const providerStartingBalance = stdlib.parseCurrency(10)
  const buyerStartingBalance = stdlib.parseCurrency(10)

  const fmt = x => stdlib.formatCurrency(x, 4)
  const getAccountBalance = async who => fmt(await stdlib.balanceOf(who))
  const getTokenBalance = async (tokenX, who) => {
    const amt = await tokenX.balanceOf(who)
    return `${fmt(amt)} ${tokenX.sym}`
  }

  const ticketToken = await launchToken('coolTicket', 'TIX')

  const accountTicketProvider = await stdlib.newTestAccount(
    providerStartingBalance
  )
  const accountTicketBuyer = await stdlib.newTestAccount(buyerStartingBalance)

  // optin ticker provider account
  await optinToToken({
    stdlib,
    account: accountTicketProvider,
    token: ticketToken,
  })
  // optin buyer of ticket/token
  await optinToToken({
    stdlib,
    account: accountTicketBuyer,
    token: ticketToken,
  })

  const providerAccountBalance = await getAccountBalance(accountTicketProvider)
  const providerTicketBalance = await getTokenBalance(
    ticketToken,
    accountTicketProvider
  )

  // mint X amount of tokens to the Ticket Provider
  await ticketToken.mint(
    accountTicketProvider,
    stdlib.parseCurrency(MAX_NUMBER_OF_TICKETS)
  )

  const ctcProvider = accountTicketProvider.deploy(backend)
  const ctcBuyer = accountTicketBuyer.attach(backend, ctcProvider.getInfo())

  const TicketProvider = {
    getMaxNumberOfTickets: () => {
      return MAX_NUMBER_OF_TICKETS
    },
    getToken: () => {
      return ticketToken.id
    },
    ticketPrice: stdlib.parseCurrency(3),
    getNumberOfTickets: () => stdlib.parseCurrency(3),
  }

  const TicketBuyer = {
    getTotal: numberOfTickets => {
      const totalOwed = numberOfTickets * TICKET_PRICE
      return stdlib.parseCurrency(totalOwed)
    },
    getPurchasePrice: (ticketPrice, numberOfTickets) => 4,
    buyTicket: () => console.log('Buyer buys ticket'),
  }

  console.log('BEFOREEEEE')
  console.log('providerAccountBalance', providerAccountBalance)
  console.log('providerTicketBalance', providerTicketBalance)

  await Promise.all([
    backend.TicketProvider(ctcProvider, TicketProvider),
    backend.TicketBuyer(ctcBuyer, TicketBuyer),
  ])

  const providerAccountBalanceA = await getAccountBalance(accountTicketProvider)
  const providerTicketBalanceA = await getTokenBalance(
    ticketToken,
    accountTicketProvider
  )

  console.log('AFTERRRRR')
  console.log('providerAccountBalance', providerAccountBalanceA)
  console.log('providerTicketBalance', providerTicketBalanceA)
}

runProgram()
