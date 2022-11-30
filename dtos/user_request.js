class RegisterUserDTO{
    first_name;
    last_name;
    username;
    email;  

    constructor(data) {
        this.first_name = data.first_name;
        this.last_name = data.last_name;
        this.username = data.username;
        this.email = data.email;
      
    }
  }

  module.exports = RegisterUserDTO;