// Constraint Validation API Module
const constraintValidationAPI = (() => {

    // Fetching form and storing it in a variable to use later for alert message on successful submit, array made too for that process
    const form = document.getElementsByTagName("form")[0];

    // Fetching all the input fields by their ID listed in HTML, and storing them into their own variables, and each respective span error in its own
    const emailCheck = document.getElementById("email");
    const emailCheckError = document.querySelector("#email + span.error");
    const countryCheck = document.getElementById("country");
    const countryCheckError = document.querySelector("#country + span.error");
    const zipCodeCheck = document.getElementById("zip-code");
    const zipCodeCheckError = document.querySelector("#zip-code + span.error");
    const passwordCheck = document.getElementById("password");
    const passwordCheckError = document.querySelector("#password + span.error");
    const passwordConfirmCheck = document.getElementById("confirm-password");
    const passwordConfirmCheckError = document.querySelector("#confirm-password + span.error");

    // Event Listeners to look for input and check if valid, for each input field, if it is, blank error message, if not, run showError function from later in the code
    emailCheck.addEventListener("input", function (event) {
        if (emailCheck.validity.valid) {
            emailCheckError.textContent = "";
            emailCheckError.className = "error";
        } else {
            showError();
        };
    });
    countryCheck.addEventListener("input", function (event) {
        if (countryCheck.validity.valid) {
            countryCheckError.textContent = "";
            countryCheckError.className = "error";
        } else {
            showError();
        };
    });
    zipCodeCheck.addEventListener("input", function (event) {
        if (zipCodeCheck.validity.valid) {
            zipCodeCheckError.textContent = "";
            zipCodeCheckError.className = "error";
        } else {
            showError();
        };
    });
    passwordCheck.addEventListener("input", function (event) {
        if (passwordCheck.validity.valid) {
            passwordCheckError.textContent = "";
            passwordCheckError.className = "error";
        } else {
            showError();
        };
    });
    passwordConfirmCheck.addEventListener("input", function (event) {
        if (passwordConfirmCheck.validity.valid) {
            passwordConfirmCheckError.textContent = "";
            passwordConfirmCheckError.className = "error";
        } else {
            showError();
        };
    });

    // On submit, checking if entries are valid or not
    form.addEventListener("submit", function (event) {
        if (!emailCheck.validity.valid) {
            showError();
            event.preventDefault();
        }

        if (!countryCheck.validity.valid) {
            showError();
            event.preventDefault();
        }

        if (!zipCodeCheck.validity.valid) {
            showError();
            event.preventDefault();
        }

        if (!passwordCheck.validity.valid) {
            showError();
            event.preventDefault();
        }

        if (!passwordConfirmCheck.validity.valid) {
            showError();
            event.preventDefault();
        }

        // Alert pop up for successful submit
        if (
        emailCheck.validity.valid &&
        countryCheck.validity.valid &&
        zipCodeCheck.validity.valid &&
        passwordCheck.validity.valid &&
        passwordConfirmCheck.validity.valid
        ) {
        alert("All your information was confirmed and submitted! Thank you for signing up!");
        }
    });

    // Event listener on click, for resetting form and clearing the DOM
    const reset = document.querySelector(".reset");
    reset.addEventListener("click", function clearForm() {
        const activeErrorMsgNodeList = document.querySelectorAll(".active");
        for (let i = 0; i < activeErrorMsgNodeList.length; i++) {
            activeErrorMsgNodeList[i].textContent = "";
            activeErrorMsgNodeList[i].className = "error";
        }
    });

    // Error message function for each input field
    function showError() {
        if (document.activeElement == emailCheck) {
            if (emailCheck.validity.valueMissing) {
                emailCheckError.textContent = "Email can't be blank";
            } else if (emailCheck.validity.typeMismatch) {
                emailCheckError.textContent = "That is not an email address, try again"
            }
            emailCheckError.className = "error active";
        }
        if (document.activeElement == countryCheck) {
            if (countryCheck.validity.valueMissing) {
                countryCheckError.textContent = "Country can't be blank";
            } else if (countryCheck.validity.tooShort) {
                countryCheckError.textContent = "Country name must be two letters or more"
            }
            countryCheck.className = "error active";
        }
        if (document.activeElement == zipCodeCheck) {
            if (zipCodeCheck.validity.valueMissing) {
                zipCodeCheckError.textContent = "Zip Code can't be blank";
            } else if (zipCodeCheck.validity.tooShort) {
                zipCodeCheckError.textContent = "This Zip Code is too short";
            } else if (zipCodeCheck.validity.patternMismatch) {
                zipCodeCheckError.textContent = "Zip Code has to be 5 digits like 12345 for example"
            }
            zipCodeCheckError.className = "error active";
        }
        if (document.activeElement == passwordCheck) {
            if (passwordCheck.validity.valueMissing) {
                passwordCheckError.textContent = "Password can't be blank";
            } else if (zipCodeCheck.validity.tooShort) {
                zipCodeCheckError.textContent = "This password is too short";
            } else if (passwordCheck.validity.patternMismatch) {
                passwordCheckError.textContent = "Your password needs at least 1 upper case and lower case letter, one number, and a symbol";
            }
            passwordCheckError.className = "error active";
        }
        if (document.activeElement == passwordConfirmCheck) {
            if (passwordConfirmCheck.validity.valueMissing) {
                passwordConfirmCheckError.textContent = "Password needs confirmation";
            } else if (passwordConfirmCheck.validity.patternMismatch) {
                if (passwordCheck.value !== passwordConfirmCheck.value) {
                    passwordConfirmCheckError.textContent = "Your passwords do not match, try again";
                }
            }
            passwordConfirmCheckError.className = "error active";
        }
    }
})();