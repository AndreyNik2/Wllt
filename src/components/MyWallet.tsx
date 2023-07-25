import { FC, useState } from "react";
import { ethers } from "ethers";
import { Container, MyWalletContainer, WalletText, WalletTextTitle } from "./MyWallet.styled";
import ClipLoader from "react-spinners/ClipLoader";

type Prop = {
  errorMes: null | string;
  setErrorMes: (message: string) => void;
  defaultAccaunt: null | string;
  setDefaultAccaunt: (account: string) => void;
  userBalance: null | string;
  setUserBalance: (balance: string) => void;
};

export const MyWallet: FC<Prop> = ({
  setErrorMes,
  defaultAccaunt,
  setDefaultAccaunt,
  userBalance,
  setUserBalance,
}) => {
const [loading, setLoading] = useState<boolean>(false)

  const connectWallet = async () => {
    
    if (window.ethereum) {
      try {
        setLoading(true);
        const result = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        accountChanged(result[0]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    } else {
      setErrorMes("Install MetaMask");
    }
  };

  const accountChanged = async (accountName: string) => {
    setDefaultAccaunt(accountName);
    getUserBalance(accountName);
  };

  const getUserBalance = (accountAddress: string) => {
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [String(accountAddress), "latest"],
      })
      .then((balance: string) => {
        setUserBalance(ethers.formatEther(balance));
      });
    // .catch(setErrorMes("Can't get the ballance"));
  };

  return (
    <Container>
      {!defaultAccaunt && !userBalance && (
        <button onClick={connectWallet}>
          {loading && (
            <ClipLoader
              color="#d29718"
              loading={loading}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          )}
          Connect wallet
        </button>
      )}
      {defaultAccaunt && userBalance && (
        <MyWalletContainer>
          <WalletText>
            <WalletTextTitle>Address: </WalletTextTitle>
            {defaultAccaunt.slice(0, 5)} ... {defaultAccaunt.slice(38)}
          </WalletText>
          <WalletText>
            <WalletTextTitle>Balance: </WalletTextTitle>
            {Number(userBalance).toFixed(3)}
          </WalletText>
        </MyWalletContainer>
      )}
    </Container>
  );
};
