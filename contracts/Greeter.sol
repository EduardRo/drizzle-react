// SPDX-License-Identifier: MIT
pragma solidity ^0.5.0;

contract Greeter {
    string greeting = "Hello World this is Greeter the best of!";

    function set(string memory _greeting) public {
        greeting = _greeting;
    }

    function get() public view returns (string memory) {
        return greeting;
    }
}
