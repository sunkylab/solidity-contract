// SPDX-License-Identifier: MIT
pragma solidity ^0.7.3;

import "../node_modules/hardhat/console.sol"

contract wallet {
    uint256 walletValue;

    constructor() {
    }

    function incrementWalletValue() public {
        walletValue +=1;
    }

    function getWalletValue() public view returns (uint256) {
        return walletValue;
    }
}