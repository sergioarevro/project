//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

interface DataOracleInterface {
    function getLatestData() external returns (uint256);
}
