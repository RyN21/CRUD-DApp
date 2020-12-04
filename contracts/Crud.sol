pragma solidity ^0.5.0

contract Crud {
  struct User {
    uint id;
    string name;
  }
  User[] public users;
  uint public nextId;

  function create(string memory name) public {
    users.push(User(nextId, name));
    nextId++; 
  }
}
