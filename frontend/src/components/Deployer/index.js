import React from "react";
import * as backend from "reach";
import * as reach from "@reach-sh/stdlib/ALGO";
reach.setSignStrategy("AlgoSigner");
reach.setProviderByName("TestNet");

const MAX_NUMBER_OF_TICKETS = 2;
const TICKET_PRICE = 1;

const Interface = {
  getMaxNumberOfTickets: () => {
    console.log("MAXERRRR");
    return MAX_NUMBER_OF_TICKETS;
  },
  getTicket: () => {
    console.log("TICKETERRR");
    return 18724022;
  },
  ticketPrice: reach.parseCurrency(TICKET_PRICE),
  showAvailableTickets: (tickets) => {
    console.log("Tickets Remaining: ", reach.bigNumberToNumber(tickets));
  },
};

const Deployer = () => {
  const [contractInfo, setContractInfo] = React.useState("");
  const deploy = async () => {
    const defaultAccount = await reach.getDefaultAccount();
    const contract = defaultAccount.deploy(backend);
    backend.TicketProvider(contract, Interface);
    const contractInfo = await contract.getInfo();
    setContractInfo(contractInfo);
  };
  return (
    <div>
      <h1>Deployer</h1>
      <button onClick={deploy}>Deploy</button>
      {contractInfo && <div>{JSON.stringify(contractInfo)}</div>}
    </div>
  );
};

export default Deployer;
