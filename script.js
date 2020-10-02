const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
//show input error message
const showError = function (input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.textContent = message;
};
//show input success
const showSuccess = function (input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

//Get field names
const getFieldName = function (input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

//Check required
const checkRequired = function (inputArr) {
  inputArr.forEach(function (input) {
    if (!input.value.trim()) {
      showError(input, `${getFieldName(input)} is required.`);
    } else {
      showSuccess(input);
    }
  });
};
//check length
const checkLength = function (input, min, max) {
  if (input.value) {
    if (input.value.length < min) {
      showError(
        input,
        `${getFieldName(input)} must be at least ${min} characters.`
      );
    } else if (input.value.length > max) {
      showError(
        input,
        `${getFieldName(input)} must be at least ${max} characters.`
      );
    } else {
      showSuccess(input);
    }
  }
};
//isValidEmail
const checkEmail = function (input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.value) {
    if (re.test(input.value)) {
      showSuccess(input);
    } else {
      showError(input, "Email is not valid");
    }
  }
};
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 6, 15);
  checkLength(password, 8, 25);
  checkEmail(email);
});
