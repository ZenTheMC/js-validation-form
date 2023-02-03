// I DID THIS ALL BY MYSELD!! NO REFERENCES, JUST THINKING IT THROUGH, AND APPLYING IT!!!

// Constraint Validation API Module
const constraintValidationAPI = (() => {
    // Fetching all the input fields by their ID listed in HTML, and storing them into their own variables
    const emailCheck = document.getElementById("email");
    const countryCheck = document.getElementById("country");
    const zipCodeCheck = document.getElementById("zip-code");
    const passwordCheck = document.getElementById("password");
    const passwordConfirmCheck = document.getElementById("confirm-password");

    // Making custom validity checks using an event listener on "input" which listens for when stuff is types into the input field

    // Calling built in function of check validity to run the checks at the end

})();