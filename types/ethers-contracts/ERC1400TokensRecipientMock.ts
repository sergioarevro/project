/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ERC1400TokensRecipientMockInterface extends utils.Interface {
  functions: {
    "canImplementInterfaceForAddress(bytes32,address)": FunctionFragment;
    "canReceive(bytes,bytes32,address,address,address,uint256,bytes,bytes)": FunctionFragment;
    "tokensReceived(bytes,bytes32,address,address,address,uint256,bytes,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "canImplementInterfaceForAddress",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "canReceive",
    values: [
      BytesLike,
      BytesLike,
      string,
      string,
      string,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "tokensReceived",
    values: [
      BytesLike,
      BytesLike,
      string,
      string,
      string,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "canImplementInterfaceForAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "canReceive", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokensReceived",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ERC1400TokensRecipientMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC1400TokensRecipientMockInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    canImplementInterfaceForAddress(
      interfaceHash: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    canReceive(
      arg0: BytesLike,
      arg1: BytesLike,
      arg2: string,
      from: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      arg7: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    tokensReceived(
      arg0: BytesLike,
      arg1: BytesLike,
      arg2: string,
      from: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      arg7: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  canImplementInterfaceForAddress(
    interfaceHash: BytesLike,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<string>;

  canReceive(
    arg0: BytesLike,
    arg1: BytesLike,
    arg2: string,
    from: string,
    to: string,
    value: BigNumberish,
    data: BytesLike,
    arg7: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  tokensReceived(
    arg0: BytesLike,
    arg1: BytesLike,
    arg2: string,
    from: string,
    to: string,
    value: BigNumberish,
    data: BytesLike,
    arg7: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    canImplementInterfaceForAddress(
      interfaceHash: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<string>;

    canReceive(
      arg0: BytesLike,
      arg1: BytesLike,
      arg2: string,
      from: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      arg7: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    tokensReceived(
      arg0: BytesLike,
      arg1: BytesLike,
      arg2: string,
      from: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      arg7: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    canImplementInterfaceForAddress(
      interfaceHash: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    canReceive(
      arg0: BytesLike,
      arg1: BytesLike,
      arg2: string,
      from: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      arg7: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokensReceived(
      arg0: BytesLike,
      arg1: BytesLike,
      arg2: string,
      from: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      arg7: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    canImplementInterfaceForAddress(
      interfaceHash: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    canReceive(
      arg0: BytesLike,
      arg1: BytesLike,
      arg2: string,
      from: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      arg7: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokensReceived(
      arg0: BytesLike,
      arg1: BytesLike,
      arg2: string,
      from: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      arg7: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
