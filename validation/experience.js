const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateExperienceInput(data) {
  let errors = {};

  // Checking to make sure the data.name type is a string.
  //If it is empty , make sure it goes as '' as the Validator needs it so.
  data.title = !isEmpty(data.title) ? data.title : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  // Check if the name is empty : Here we need to make sure that data.name comes in as a string
  // (whether or not it is empty).
  // Hence the check above.

  if (Validator.isEmpty(data.title)) {
    errors.title = "Job title field is required";
  }

  if (Validator.isEmpty(data.company)) {
    errors.company = "Company field is required";
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = "From date field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
