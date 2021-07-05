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

  console.log("TICKET", ticketToken);

  const accountTicketProvider = await stdlib.newTestAccount(
    providerStartingBalance
  );
  const accountTicketBuyer = await stdlib.newTestAccount(buyerStartingBalance);

  // optin ticker provider account
  await optinToToken({
    stdlib,
    account: accountTicketProvider,
    token: ticketToken,
  });
  // optin buyer of ticket/token
  await optinToToken({
    stdlib,
    account: accountTicketBuyer,
    token: ticketToken,
  });

  const providerAccountBalance = await getAccountBalance(accountTicketProvider);
  // const providerTicketBalance = await getTokenBalance(
  //   ticketToken,
  //   accountTicketProvider
  // )

  let contract;

  const isDeployer = await ask(`Are you deployer`, yesno);

  if (isDeployer) {
    // mint X amount of tokens to the Ticket Provider
    await ticketToken.mint(
      accountTicketProvider,
      stdlib.parseCurrency(MAX_NUMBER_OF_TICKETS)
    );
    contract = accountTicketProvider.deploy(backend);
    const info = await contract.getInfo();
    console.log(`The contract is deployed as = ${JSON.stringify(info)}`);
  } else {
    const info = await ask(
      `Please paste the contract information:`,
      JSON.parse
    );
    contract = accountTicketBuyer.attach(backend, info);
  }

  const TicketProvider = {
    getMaxNumberOfTickets: () => {
      return MAX_NUMBER_OF_TICKETS;
    },
    getToken: () => {
      return ticketToken.id;
    },
    ticketPrice: stdlib.parseCurrency(3),
    getAvailableTickets: (tickets) =>
      console.log("Tickets Remaining: ", stdlib.bigNumberToNumber(tickets)),
  };

  const TicketBuyer = {
    getTotal: (numberOfTickets) => {
      const totalOwed = numberOfTickets * TICKET_PRICE;
      return stdlib.parseCurrency(totalOwed);
    },
    getPurchasePrice: (ticketPrice, numberOfTickets) => 4,
    buyTicket: () => console.log("Buyer buys ticket"),
    checkIfBuyingTicket: async () => {
      const isBuyingMore = await ask(`Do you want to buy a ticket?`, yesno);
      if (isBuyingMore) return true;
      return false;
    },
    getAvailableTickets: (tickets) => {
      console.log("Tickets Remaining: ", stdlib.bigNumberToNumber(tickets));
    },
  };

  if (isDeployer) {
    await backend.TicketProvider(contract, TicketProvider);
  } else {
    await backend.TicketBuyer(contract, TicketBuyer);
  }

  const providerAccountBalanceA = await getAccountBalance(
    accountTicketProvider
  );
};

runProgram();
