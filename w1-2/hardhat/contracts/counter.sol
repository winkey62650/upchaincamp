// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Counter {
    uint public counter;
    address owner;

    constructor(){
        counter = 0;
        owner = msg.sender ; 
    }

    function count() public {
        require(msg.sender==owner,'Only owner cancount');
        counter += 1;
    }

    function add(uint x) public{
        counter = counter + x ;
    }
}