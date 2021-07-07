import * as backend from "reach";
import * as reach from "@reach-sh/stdlib/ALGO";
import React from "react";

const Interface = {
  checkIfBuyingTicket: () => {
      console.log("THIS WAS CALLED BY REACH!")
  },
};

const Attacher = () => {
  const [contractInfo, setContractInfo] = React.useState("");
  const attach = async () => {
    if (!contractInfo) return;
    const parsedContractInfo = JSON.parse(contractInfo);
    const defaultAccount = await reach.getDefaultAccount();
    const attachedContract = defaultAccount.attach(backend, parsedContractInfo);
    backend.TicketBuyer(attachedContract, Interface);
  };
  return (
    <div>
      <h1>Attacher</h1>
      <textarea
        className="border"
        value={contractInfo}
        onChange={(e) => setContractInfo(e.target.value)}
      />
      <button onClick={attach}>Attach</button>
    </div>
  );
};

export default Attacher;
