const Crud = artifacts.require('Crud')

contract('Crud', () => {
  let crud = null;
  before(async() => {
    crud = await Crud.depolyed();
  });

  // async is used because we will use await
  it('Should create a new user and read', async () => {
    // we add 'await' so that the next line does not get executed before a user is created
    // otherwise the next line will be executed before we finish creating the user
    await crud.create('Ryan');
    const user = await crud.read(1);
    assert(user[0].toNumber() === 1);
    assert(user[1] === 'Ryan');
  });

  it('Should update a user', async () => {
    await crud.update(1, 'Ryyan');
    const user = await crud.read(1);
    assert(user[0].toNumber() === 1);
    assert(user[1] === 'Ryyan');
  });

  it('Should NOT update a non-existing user', async () => {
    // try block will catch an error without making the test fail
    // everything that throws an error in a try block will be caught
    // the catch block catches the error
    // 'error' is the variable that will recieve the errors
    try {
      await crud.update(2, 'Ryyan');
    } catch(error) {
      // error is an object that has a message
      assert(error.message.includes('User does not exist!'));
      // return if test passes
      return;
    }
    // a fail safe if the function in the try block does not get cause an error
    // it will hit 'assert(false)'' and the test will fail
    assert(false);
  });

  it('Should delete a user', async () => {
    await crud.destroy(1);
    try {
      await crud.read(1);
    } catch(error) {
      assert(error.message.includes('User does not exist!'));
      return;
    }
    assert(false);
  });
});
