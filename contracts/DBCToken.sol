// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DBCToken is ERC20 {
  //add minter variable

  //add minter changed event

  constructor() public payable ERC20("DBC Token", "DBC") {
    //_setupRole(MINTER_ROLE, msg.sender);
    mint(msg.sender, 10000);
  }

  function mint(address account, uint256 amount) public {
    // Check that the calling account has the minter role
    // require(hasRole(MINTER_ROLE, account), "Caller is not a minter");
	  _mint(account, amount);
	}
}