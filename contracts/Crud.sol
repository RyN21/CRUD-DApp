pragma solidity ^0.5.0;

contract Crud {
  // Structs allow you to create custom types
  // List the attributes of the type by the data type and the name
  struct User {
    uint id;
    string name;
  }
  // Reuses users type definition and spescify it as an array.
  User[] public users;
  // nextId starts at 0
  uint public nextId;

  // create function to create a User type
  // Users only takes in one argument, a string: name
  function create(string memory name) public {
    // users.push -> stores new User in the users array
    users.push(User(nextId, name));
    // Incraments nextId
    nextId++;
  }

  // read function takes an id as an argument
  // returns two values, id and name
  function read(uint id) view public returns(uint, string memory) {
    uint i = find(id);
    return(users[i].id, users[i].name);
  }

  // undate takes two arguments id and value of what we want to update
  function update(uint id, string memory name) public {
    uint i = find(id);
    users[i].name = name;
  }

  function destroy(uint id) public {
    uint i = find(id);
    // use delete keyword
    delete users[i];
  }

  // Refactoring: Pull out the logic in both the read and update function to a 'find' function.
  function find(uint id) view internal returns(uint) {
    // for loop:
    //  - define an integer 'i'
    //  - create a stopping condition 'i < users.length'
    //  - incrament 'i' for each pass
    for(uint i = 0; i < users.length; i++) }
      if(users[i].id == id) {
        return i;
      }
  }
}
