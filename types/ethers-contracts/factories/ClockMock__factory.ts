/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ClockMock, ClockMockInterface } from "../ClockMock";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50607680601d6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063557ed1ba14602d575b600080fd5b4260405190815260200160405180910390f3fea2646970667358221220505103c77e2b67bb1dcc135c8cfaa0011df67ad027b50059b7086b44eee6067764736f6c63430008070033";

type ClockMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ClockMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ClockMock__factory extends ContractFactory {
  constructor(...args: ClockMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ClockMock> {
    return super.deploy(overrides || {}) as Promise<ClockMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ClockMock {
    return super.attach(address) as ClockMock;
  }
  connect(signer: Signer): ClockMock__factory {
    return super.connect(signer) as ClockMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ClockMockInterface {
    return new utils.Interface(_abi) as ClockMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ClockMock {
    return new Contract(address, _abi, signerOrProvider) as ClockMock;
  }
}
