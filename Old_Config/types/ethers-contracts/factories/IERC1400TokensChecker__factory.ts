/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IERC1400TokensChecker,
  IERC1400TokensCheckerInterface,
} from "../IERC1400TokensChecker";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "partition",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "canTransferByPartition",
    outputs: [
      {
        internalType: "bytes1",
        name: "",
        type: "bytes1",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IERC1400TokensChecker__factory {
  static readonly abi = _abi;
  static createInterface(): IERC1400TokensCheckerInterface {
    return new utils.Interface(_abi) as IERC1400TokensCheckerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC1400TokensChecker {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IERC1400TokensChecker;
  }
}