import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
import launchToken from "@reach-sh/stdlib/launchToken.mjs";
import { ask, yesno, done } from "@reach-sh/stdlib/ask.mjs";

import optinToToken from "./helpers/optinToToken.mjs";

const MAX_NUMBER_OF_TICKETS = 100;
const TICKET_PRICE = 1;

const runProgram = async () => {
  const stdlib = loadStdlib();

  const providerStartingBalance = stdlib.parseCurrency(10);
  const buyerStartingBalance = stdlib.parseCurrency(10);

  const fmt = (x) => stdlib.formatCurrency(x, 4);
  const getAccountBalance = async (who) => fmt(await stdlib.balanceOf(who));
  const getTokenBalance = async (tokenX, who) => {
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
    getToken: () => {
      return ticketToken.id;
    },
    ticketPrice: stdlib.parseCurrency(TICKET_PRICE),
    showAvailableTickets: (tickets) =>
      console.log("Tickets Remaining: ", stdlib.bigNumberToNumber(tickets)),
  };

  const TicketBuyer = {
    buyTicket: () => console.log("Buyer buys ticket"),
    checkIfBuyingTicket: async (lastConsensusTime) => {
      const currentNetworkTimeBigInt = await stdlib.getNetworkTime();
      const currentNetworkTime = stdlib.bigNumberToNumber(
        currentNetworkTimeBigInt
      );
      console.log(
        "last Consensus Time:",
        stdlib.bigNumberToNumber(lastConsensusTime)
      );
      console.log("current network time:", currentNetworkTime);
      const isBuyingTicket = await ask(`Do you want to buy a ticket?`, yesno);
      if (isBuyingTicket) return true;
      return false;
    },
    showAvailableTickets: (tickets) => {
      console.log("Tickets Remaining: ", stdlib.bigNumberToNumber(tickets));
    },
    log: (data) => {
      console.log("DATA", stdlib.bigNumberToNumber(data));
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
