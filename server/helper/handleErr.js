exports.handleErr = (res, err) => {
  const errors = { email: "", passward: "", name: "", lastName: "" };

  switch (err.message) {
    case "Incorrect Email":
      res.statusCode = 401;
      errors.email = "Incorrect Email";
      break;
    case "Incorrect passward":
      res.statusCode = 401;
      errors.passward = "Incorrect passward";
      break;
    case "Invalid Email":
      res.statusCode = 400;
      errors.email = "Invalid Email";
    case "Invalid passward":
      res.statusCode = 400;
      errors.passward = "min length 6";
  }

  // if (err.message === "Incorrect Email") {
  //   res.statusCode = 401;
  //   errors.email = "Incorrect Email";
  // }
  // if (err.message === "Incorrect passward") {
  //   res.statusCode = 401;
  //   errors.passward = "Incorrect passward";
  // }
  // if (err.message === "Invalid Email") {
  //   res.statusCode = 400;
  //   errors.email = "Invalid Email";
  // }
  // if (err.message === "Invalid passward") {
  //   res.statusCode = 400;
  //   errors.passward = "min length 6";
  // }

  if (err.code === 11000) {
    res.statusCode = 409;
    errors.email = "That email is Already registered";
    return errors;
  }

  if (err.message.includes("user validation failed")) {
    res.statusCode = 400;
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};
