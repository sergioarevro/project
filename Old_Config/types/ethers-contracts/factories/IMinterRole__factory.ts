/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IMinterRole, IMinterRoleInterface } from "../IMinterRole";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isMinter",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IMinterRole__factory {
  static readonly abi = _abi;
  static createInterface(): IMinterRoleInterface {
    return new utils.Interface(_abi) as IMinterRoleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMinterRole {
    return new Contract(address, _abi, signerOrProvider) as IMinterRole;
  }
}