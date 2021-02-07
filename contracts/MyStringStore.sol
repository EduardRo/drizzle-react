// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract MyStringStore {
    string public myString =
        "Hello World! This is my store the Big Store of Crypto!";

    function set(string memory x) public {
        myString = x;
    }

    function get() public view returns (string memory) {
        return myString;
    }
}
