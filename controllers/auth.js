exports.signUpHandler = async () => {
  console.log("Inside signUpHandler");
  //add a user record to database
  //redirect to signin
};

exports.signInHandler = async () => {
  console.log("Inside signInHandler");
  //checks the record in database
  //if it matches:
  //make a jwt token and add it to res.cookies
  //else:return error
};
