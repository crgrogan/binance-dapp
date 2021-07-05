import React, { useState } from "react";
import "./App.css";
import useWeb3 from "./helpers/useWeb3";

function App() {
  const [address, setAddress] = useState(null);
  const [balance, setBalance] = useState(null);
  const web3 = useWeb3();

  const getUserAccount = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.enable();
        web3.eth.getAccounts().then((accounts) => {
          setAddress(accounts[0]);
          updateBalance(accounts[0]);
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Metamask extension not detected!");
    }
  };

  const updateBalance = async (address) => {
    await web3.eth.getBalance(address).then((value) => {
      setBalance(web3.utils.fromWei(value, "ether"));
    });
  };

  return (
    <div className="App">
      <button onClick={getUserAccount}>Connect</button>
      <p>Address: {address}</p>
      <p>Balance: {balance}</p>
    </div>
  );
}

export default App;
