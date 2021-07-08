import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
import launchToken from "@reach-sh/stdlib/launchToken.mjs";
import { ask, yesno, done } from "@reach-sh/stdlib/ask.mjs";

import optinToToken from "./helpers/optinToToken.mjs";

const MAX_NUMBER_OF_TICKETS = 10;
const TICKET_PRICE = 1;

const runProgram = async () => {
  const stdlib = loadStdlib();

  const providerStartingBalance = stdlib.parseCurrency(10);
  const buyerStartingBalance = stdlib.parseCurrency(10);

  const fmt = (x) => stdlib.formatCurrency(x, 4);
  const getAccountBalance = async (who) => fmt(await stdlib.balanceOf(who));
  const getTicketBalance = async (tokenX, who) => {
    if (!tokenX) return;
    const amt = await tokenX.balanceOf(who);
    return `${fmt(amt)} ${tokenX.sym}`;
  };

  const ticketToken = await launchToken("coolTicket", "TIX");

  let contract;

  const TicketProvider = {
    getMaxNumberOfTickets: () => {
      return MAX_NUMBER_OF_TICKETS;
    },
    getTicket: () => {
      return ticketToken.id;
    },
    ticketPrice: stdlib.parseCurrency(TICKET_PRICE),
    showAvailableTickets: (tickets) =>
      console.log("Tickets Remaining: ", stdlib.bigNumberToNumber(tickets)),
  };

  const TicketBuyer = {
    buyTicket: () => console.log("Buyer buys ticket"),
    checkIfBuyingTicket: async (lastConsensusTimeBigInt, ticketsSoldBigInt) => {
      const currentNetworkTimeBigInt = await stdlib.getNetworkTime();
      const currentNetworkTime = stdlib.bigNumberToNumber(
        currentNetworkTimeBigInt
      );
      const ticketsSold = stdlib.bigNumberToNumber(ticketsSoldBigInt)
      console.log('Tickets Sold', ticketsSold)
      const lastConsensusTime = stdlib.bigNumberToNumber(
        lastConsensusTimeBigInt
      );
      const isNow = currentNetworkTime - lastConsensusTime <= 1;
      const isBuyingTicket = await ask(`Do you want to buy a ticket?`, yesno);
      if (isBuyingTicket && isNow) return true;
      console.log('Is in the past!')
      return false;
    },
    showAvailableTickets: (tickets) => {
      console.log("Tickets Remaining: ", stdlib.bigNumberToNumber(tickets));
    },
    log: (data) => {
      console.log("Log: ", data);
    },
  };

  const isDeployer = await ask(`Are you deployer`, yesno);

  if (isDeployer) {
    const accountTicketProvider = await stdlib.newTestAccount(
      providerStartingBalance
    );
    // mint X amount of tokens to the Ticket Provider
    await ticketToken.mint(
      accountTicketProvider,
      stdlib.parseCurrency(MAX_NUMBER_OF_TICKETS)
    );
    // optin ticker provider account
    await optinToToken({
      stdlib,
      account: accountTicketProvider,
      token: ticketToken,
    });
    contract = accountTicketProvider.deploy(backend);
    const info = await contract.getInfo();
    console.log(`The contract is deployed as = ${JSON.stringify(info)}`);
  } else {
    const accountTicketBuyer = await stdlib.newTestAccount(
      buyerStartingBalance
    );
    console.log('WOO',accountTicketBuyer.getAddress())
    // optin buyer of ticket/token
    await optinToToken({
      stdlib,
      account: accountTicketBuyer,
      token: ticketToken,
    });
    const info = await ask(
      `Please paste the contract information:`,
      JSON.parse
    );
    contract = accountTicketBuyer.attach(backend, info);
  }

  if (isDeployer) {
    await backend.TicketProvider(contract, TicketProvider);
  } else {
    await backend.TicketBuyer(contract, TicketBuyer);
  }
};

runProgram();
