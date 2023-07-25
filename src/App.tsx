import { useState } from "react";
import { SendTransactionInput } from "./components/SendTransactionInput";
import { MyWallet } from "./components/MyWallet";
import WalletLogo from './assets/metamask.svg'
import { Container, Footer, Header, Logo, Title } from "./App.styled";

function App() {
  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const [defaultAccaunt, setDefaultAccaunt] = useState<null | string>(null);
  const [userBalance, setUserBalance] = useState<null | string>(null);

  
  return (
    <Container>
      <Header>
        <Title>
          <Logo src={WalletLogo} width="47" height="47" alt="wallet logo" />
          My Wallet
        </Title>
        <MyWallet
          errorMes={errorMessage}
          setErrorMes={setErrorMessage}
          defaultAccaunt={defaultAccaunt}
          setDefaultAccaunt={setDefaultAccaunt}
          userBalance={userBalance}
          setUserBalance={setUserBalance}
        />
      </Header>
      <SendTransactionInput
        errorMes={errorMessage}
        setErrorMes={setErrorMessage}
        defaultAccaunt={defaultAccaunt}
        setDefaultAccaunt={setDefaultAccaunt}
        userBalance={userBalance}
        setUserBalance={setUserBalance}
      />
      {errorMessage && <p>{errorMessage}</p>}
      <Footer>
        <a href="https://github.com/AndreyNik2/my-wallet-app" target="_blank">
          Github
        </a>
      </Footer>
    </Container>
  );
}

export default App;
