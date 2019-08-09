const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters";
  }

  // Checking to make sure the data.name type is a string.
  //If it is empty , make sure it goes as '' as the Validator needs it so.
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // Check if the name is empty : Here we need to make sure that data.name comes in as a string
  // (whether or not it is empty).
  // Hence the check above.
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid.";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be atleast 6 characters.";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm Password field is required.";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match.";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
