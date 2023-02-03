# js-validation-form
A simple validation form project - no backend - HTML/CSS/JS/npm only

PSEUDO CODE : HOLY SHIT IM SUCH A GOD AT THIS TODAY, WHEN DID I GET THIS GOOD WTF! ACTUALLY HAVING SO MUCH FUN TOO!

Make an HTML form base with:
-Container that encompasses form
-Form that encompasses all input fields and buttons
-Label and Input fields for : Email, Country, Zip Code, Password, Confirm Password
-Make sure all labels match IDs
-Make a reset and submit button, and make sure you set their type respectively
-Make sure all input fields have the correct type specified, to have built in validation already for some of them
-Even though the project instructions ask you to keep all validation allocated to the JS file, add a required attribute at the end of each input line regardless, for easy null validation
-

Styling the webpage:
-Center the container div
-Center the form
-Give each input field and it's respective label, their own line
-Add a pleasing background color for the webpage (container div or body or html)
-Add a good synergist color to the form background
-Add padding and margins to space out the form items neatly
-

Styling the validation features:
-Add styling for valid and invalid psuedo classes on the input fields
-Add a red border on invalid
-Add a black border on valid
-

Form Validation via JS Module(s):
-Contraint Validation API module with contains the following:
-Declared and stored in variables, each of the input forms, by ID selector
-Add event listeners to each, and listen for "input", which refers to stuff in the input fields
-Maybe add event listener to buttons and listen for a "click", to display a pop-up alert box error if something isn't meeting submit-worth conditions?
-The project instructions want a validation check on a per form basis, immediately after, if a user leaves the field : Play around with the focus or hover psuedoclass? Maybe it auto-checks using the CSS, if those psuedoclasses are styled, and there might be no need.... hmm...
-Perhaps find some "regular expressions" which I haven't messed with creating my own because it looks like mumbo jumbo for now, but have used a few in the past and I know they work well for specific validation checks, that are more in-depth than just the build in checks or custom message hints. They might actually need to be put into HTML input type field instead, so I have to double-check to make sure

After you finish:
Set up the NPM package
Publish it too maybe? If you can get it to work this time...
Try out setting up ESLint and Prettier locally, using the json file generated from npm (webpack not needed for this project, cause no dependencies or bundling necessary)
Make sure you add, commit, and push to your github repository