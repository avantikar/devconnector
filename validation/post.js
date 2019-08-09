const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  // Checking to make sure the data.name type is a string.
  //If it is empty , make sure it goes as '' as the Validator needs it so.
  data.text = !isEmpty(data.text) ? data.text : "";

  // Check if the name is empty : Here we need to make sure that data.name comes in as a string
  // (whether or not it is empty).
  // Hence the check above.

  if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.text = "Post must be between 10 and 300 characters.";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "Text field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
