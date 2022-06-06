// Required modules
const inquirer = require('inquirer');
const fs = require('fs');

// Linking page where the README is generated
const generatePage = require("./Develop/utils/generateMarkdown")

// An array of question for the user to answer
const questions = [
    {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'title'
    },{
        type: 'input',
        message: 'Enter a description of this application.',
        name: 'description'
    },{
        type: 'input',
        message: 'What is the process to install the application?',
        name: 'title'
    },{
        type: 'input',
        message: 'What does this application do?',
        name: 'usage'
    },{
        type: 'checkbox',
        message: 'Select the license:',
        choices: ['Apache', 'BSD', 'GNU GPLV2', 'GNU GPLV3', 'ISC', 'MIT', 'MPL'],
        default: 'MIT'
    },{
        type: 'input',
        message: 'Who contributed to this application?',
        name: 'credit'
    },{
        type: 'input',
        message: 'Are there any tests for this application?',
        name: 'tests'
    },{
        type: 'input',
        message: 'What is you github username?',
        name: 'github'
    },{
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
