// TODO: Include packages needed for this application
const generateMarkdown = require('./utilities/generateMarkdown');
const inquirer = require('inquirer');
const util = require("util");
const fs = require('fs');

// TODO: Create an array of questions for user input
function questions() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage information:',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Please provide credits for your project:',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide test instructions:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select a license for your project:',
            choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
    ]);
}

// TODO: Create a function to write README file
const generateReadMe = () => {
    questions()
        .then((response) => {
            const markdown = generateMarkdown(response);

            fs.writeFile('./generatedFiles/README.md', markdown, (err) => {
                err ? console.error(err) : console.log('Success! Your README.md file has been generated');
            });
        });
};
// const writeFileAsync = util.promisify(fs.writeFile);
// then((response) => {
//     const markdown = generateMarkdown(response);

//     fs.writeFile('README.md', markdown, (err) => {
//         err ? console.error(err) : console.log('Success! Your README.md file has been generated');
//     });
// })

// TODO: Create a function to initialize app
function init() {
    generateReadMe();
}

// Function call to initialize app
init();
