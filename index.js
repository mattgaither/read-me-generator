// Required modules
const inquirer = require('inquirer');
const fs = require('fs');

// Linking page where the README is generated
const generatePage = require("./Develop/utils/generateMarkdown");
const generateMarkdown = require('./Develop/utils/generateMarkdown');

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

// Created the function to write the file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, err => {
        if(err) throw new Error(err);

        console.log('Page created and you may view this in the directory.')
    })
};

// Created the Init function 
function init() {
    return inquirer.prompt(questions);
};

// Call the init()
init().then(answers => {
    const genReadmeFile = generateMarkdown(answers)
    writeToFile('./README.md', genReadmeFile)
});
