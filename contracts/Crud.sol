pragma solidity ^0.5.0

contract Crud {
  struct User {
    uint id;
    string name;
  }
  User[] public users;
}
