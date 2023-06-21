//Including packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

//Creating an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "What does your application do?.",
  },
  {
    type: "input",
    name: "screenshot",
    message: "Do you have the relative path of the screenshot of your project?"
  },
  {
    type: "input",
    name: "link",
    message: "Do you have a URL of your deployed application?"
  },
  {
    type: "checkbox",
    name: "license",
    message: "What license would you like for your project?",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
  },
  {
    type: "input",
    name: "require",
    message: "Any dependencies?",
  },
  {
    type: "input",
    name: "features",
    message: "What are some unique features of your project?",
  },
  {
    type: "input",
    name: "require",
    message:
      "What language(s) does your app use?",
  },
  {
    type: "input",
    name: "creator",
    message: "Github username?",
  },
  {
    type: "input",
    name: "email",
    message: "Email address?",
  }

];

// Writing README.md File
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Initializing app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Creating Professional README.md File...");
    writeToFile("README.md", generateMarkdown({ ...responses }));
  });
}
init();