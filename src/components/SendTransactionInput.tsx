import { ethers } from "ethers";
import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import {
  Form,
  HashText,
  Input,
  SuccessContainer,
  SuccessText,
  TransactionButton,
  TransactionContainer,
} from "./SendTransactionInput.styled";

type Inputs = {
  walletAddress: string;
  transferAmount: string;
};

type Prop = {
  errorMes: null | string;
  setErrorMes: (message: string | null) => void;
  defaultAccaunt: null | string;
  setDefaultAccaunt: (message: string) => void;
  userBalance: null | string;
  setUserBalance: (message: string) => void;
};

export const SendTransactionInput: FC<Prop> = ({
  setErrorMes: setErrorMessage,
  defaultAccaunt,
  errorMes,
}) => {
  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const [hash, setHash] = useState<null | string>(null);

  const onSubmit: SubmitHandler<Inputs> = async (data) =>
    await sendTransaction(data.walletAddress, data.transferAmount);

  const sendTransaction = async (address: string, value: string) => {
    try {
      if (!window.ethereum) {
        setErrorMessage("No crypto wallet fount. Please install MetaMask");
        throw new Error("No crypto wallet fount. Please install MetaMask");
      }
      if (!defaultAccaunt) {
        setErrorMessage(
          "Crypto wallet not connected. Please connect the wallet"
        );
        throw new Error(
          "Crypto wallet not connected. Please connect the wallet"
        );
      }
      if (!ethers.isAddress(address)) {
        setErrorMessage("Incorrect wallet address");
        throw new Error("Incorrect wallet address");
      }
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const tx = await signer.sendTransaction({
        to: address,
        value: ethers.parseEther(value),
      });
      console.log("tx :", tx);
      setHash(tx.hash);
      clearErrors();
      setErrorMessage(null);
      reset();
    } catch (error) {
      // console.log(error)
      console.log(error);
    }
  };

  console.log(errorMes);

  return (
    <TransactionContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("walletAddress", {
            pattern: {
              value: /^0x[0-9a-fA-F]{40}$/,
              message: "Incorrect wallet address",
            },
            required: "Address is required",
          })}
          placeholder="Enter Your Wallet Address"
        />
        <Input
          {...register("transferAmount", {
            required: "Transfer ammount is required",
          })}
          placeholder="Enter the amount of Your transfer"
        />
        <TransactionButton type="submit">Send me ETH</TransactionButton>
        <ErrorMessage
          errors={errors}
          name="walletAddress"
          as="p"
          style={{ color: "#bf1650", height: "16px" }}
        />
      </Form>
      {hash && (
        <SuccessContainer>
          <SuccessText>Transaction success</SuccessText>
          <HashText>Hash: {hash}</HashText>
        </SuccessContainer>
      )}
    </TransactionContainer>
  );
};
