pragma solidity ^0.5.0

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
    // for loop:
    //  - define an integer 'i'
    //  - create a stopping condition 'i < users.length'
    //  - incrament 'i' for each pass
    for(uint i = 0; i < users.length; i++) {
      // returns id and name when "users[i].id is equal to the argument's 'id' "
      if(users[i].id == id) {
        return(users[i].id, users[i].name);
      }
    }
  }
}
