/**
* @Author: Alcwyn Parker <alcwynparker>
* @Date:   2017-06-21T15:03:12+01:00
* @Email:  alcwynparker@gmail.com
* @Project: Unlocking Potential
* @Filename: index.js
* @Last modified by:   alcwynparker
* @Last modified time: 2017-07-07T10:19:30+01:00
*
* The Simple Factory pattern is used when instantiating objects needs to be
* simplified or where many similar but distinct object need to instantiated
* and managed
*
* This worksheet draws upon the wisdom shared at:
* http://loredanacirstea.github.io/es6-design-patterns/#factory-method
*
*/

// TODO: Simple Factory
// ----------------------------------------------------------------
//
// • Review the language used in the comments
// • Using the simple factory class, create a new Customer.
// • Remove the static declaration before the createUser method in the factory class.
//   Discuss the outcome.
//


//ABSTRACT CLASS
class User{
  constructor(){
    this.username = '';
    this.password = '';
    this.accessLevel = 0;
  }
}

// CONCRETE CLASS 1
class Customer extends User{
  constructor(){
    super();
    console.log('New Customer Created')
  }
}

// CONCRETE CLASS 2
class Admin extends User{
  constructor(){
    super();
    console.log('New Admin Created');
    this.accessLevel = 2;
  }
}

// FACTORY CLASS
class UserFactory{

  let resources = [];

  static createUser(type){

    if (type === 'admin'){

      return new Admin();

    } else if (type === 'customer'){

      return new Customer();

    }
  }
}

// PRODUCT
var admin1 = UserFactory.createUser('admin');
