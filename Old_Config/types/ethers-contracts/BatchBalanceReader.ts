/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface BatchBalanceReaderInterface extends utils.Interface {
  functions: {
    "canImplementInterfaceForAddress(bytes32,address)": FunctionFragment;
    "balancesOfByPartition(address[],address[],bytes32[])": FunctionFragment;
    "balancesOf(address[],address[])": FunctionFragment;
    "totalSuppliesByPartition(bytes32[],address[])": FunctionFragment;
    "totalSupplies(address[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "canImplementInterfaceForAddress",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "balancesOfByPartition",
    values: [string[], string[], BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "balancesOf",
    values: [string[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSuppliesByPartition",
    values: [BytesLike[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupplies",
    values: [string[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "canImplementInterfaceForAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "balancesOfByPartition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balancesOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSuppliesByPartition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupplies",
    data: BytesLike
  ): Result;

  events: {};
}

export interface BatchBalanceReader extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BatchBalanceReaderInterface;

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

    /**
     * Get a batch of ERC1400 token balances.
     * @param partitions Name of the partitions.
     * @param tokenAddresses Addresses of tokens where the balances need to be fetched.
     * @param tokenHolders Addresses for which the balance is required.
     */
    balancesOfByPartition(
      tokenHolders: string[],
      tokenAddresses: string[],
      partitions: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    /**
     * Get a batch of ERC20 token balances.
     * @param tokenAddresses Addresses of tokens where the balances need to be fetched.
     * @param tokenHolders Addresses for which the balance is required.
     */
    balancesOf(
      tokenHolders: string[],
      tokenAddresses: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    /**
     * Get a batch of ERC1400 token total supplies by partitions.
     * @param partitions Name of the partitions.
     * @param tokenAddresses Addresses of tokens where the balances need to be fetched.
     */
    totalSuppliesByPartition(
      partitions: BytesLike[],
      tokenAddresses: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    /**
     * Get a batch of ERC20 token total supplies.
     * @param tokenAddresses Addresses of tokens where the balances need to be fetched.
     */
    totalSupplies(
      tokenAddresses: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;
  };

  canImplementInterfaceForAddress(
    interfaceHash: BytesLike,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<string>;

  /**
   * Get a batch of ERC1400 token balances.
   * @param partitions Name of the partitions.
   * @param tokenAddresses Addresses of tokens where the balances need to be fetched.
   * @param tokenHolders Addresses for which the balance is required.
   */
  balancesOfByPartition(
    tokenHolders: string[],
    tokenAddresses: string[],
    partitions: BytesLike[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  /**
   * Get a batch of ERC20 token balances.
   * @param tokenAddresses Addresses of tokens where the balances need to be fetched.
   * @param tokenHolders Addresses for which the balance is required.
   */
  balancesOf(
    tokenHolders: string[],
    tokenAddresses: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  /**
   * Get a batch of ERC1400 token total supplies by partitions.
   * @param partitions Name of the partitions.
   * @param tokenAddresses Addresses of tokens where the balances need to be fetched.
   */
  totalSuppliesByPartition(
    partitions: BytesLike[],
    tokenAddresses: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  /**
   * Get a batch of ERC20 token total supplies.
   * @param tokenAddresses Addresses of tokens where the balances need to be fetched.
   */
  totalSupplies(
    tokenAddresses: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  callStatic: {
    canImplementInterfaceForAddress(
      interfaceHash: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * Get a batch of ERC1400 token balances.
     * @param partitions Name of the partitions.
     * @param tokenAddresses Addresses of tokens where the balances need to be fetched.
     * @param tokenHolders Addresses for which the balance is required.
     */
    balancesOfByPartition(
      tokenHolders: string[],
      tokenAddresses: string[],
      partitions: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    /**
     * Get a batch of ERC20 token balances.
     * @param tokenAddresses Addresses of tokens where the balances need to be fetched.
     * @param tokenHolders Addresses for which the balance is required.
     */
    balancesOf(
      tokenHolders: string[],
      tokenAddresses: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    /**
     * Get a batch of ERC1400 token total supplies by partitions.
     * @param partitions Name of the partitions.
     * @param tokenAddresses Addresses of tokens where the balances need to be fetched.
     */
    totalSuppliesByPartition(
      partitions: BytesLike[],
      tokenAddresses: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    /**
     * Get a batch of ERC20 token total supplies.
     * @param tokenAddresses Addresses of tokens where the balances need to be fetched.
     */
    totalSupplies(
      tokenAddresses: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;
  };

  filters: {};

  estimateGas: {
    canImplementInterfaceForAddress(
      interfaceHash: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Get a batch of ERC1400 token balances.
     * @param partitions Name of the partitions.
     * @param tokenAddresses Addresses of tokens where the balances need to be fetched.
     * @param tokenHolders Addresses for which the balance is required.
     */
    balancesOfByPartition(
      tokenHolders: string[],
      tokenAddresses: string[],
      partitions: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Get a batch of ERC20 token balances.
     * @param tokenAddresses Addresses of tokens where the balances need to be fetched.
     * @param tokenHolders Addresses for which the balance is required.
     */
    balancesOf(
      tokenHolders: string[],
      tokenAddresses: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Get a batch of ERC1400 token total supplies by partitions.
     * @param partitions Name of the partitions.
     * @param tokenAddresses Addresses of tokens where the balances need to be fetched.
     */
    totalSuppliesByPartition(
      partitions: BytesLike[],
      tokenAddresses: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Get a batch of ERC20 token total supplies.
     * @param tokenAddresses Addresses of tokens where the balances need to be fetched.
     */
    totalSupplies(
      tokenAddresses: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    canImplementInterfaceForAddress(
      interfaceHash: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Get a batch of ERC1400 token balances.
     * @param partitions Name of the partitions.
     * @param tokenAddresses Addresses of tokens where the balances need to be fetched.
     * @param tokenHolders Addresses for which the balance is required.
     */
    balancesOfByPartition(
      tokenHolders: string[],
      tokenAddresses: string[],
      partitions: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Get a batch of ERC20 token balances.
     * @param tokenAddresses Addresses of tokens where the balances need to be fetched.
     * @param tokenHolders Addresses for which the balance is required.
     */
    balancesOf(
      tokenHolders: string[],
      tokenAddresses: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Get a batch of ERC1400 token total supplies by partitions.
     * @param partitions Name of the partitions.
     * @param tokenAddresses Addresses of tokens where the balances need to be fetched.
     */
    totalSuppliesByPartition(
      partitions: BytesLike[],
      tokenAddresses: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Get a batch of ERC20 token total supplies.
     * @param tokenAddresses Addresses of tokens where the balances need to be fetched.
     */
    totalSupplies(
      tokenAddresses: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}