// connect frontend answers to write into backend README file
// serve the markdown file to the user to directly download to their computer

// use React, axios, and ???
// create GUI
// create question headers
// create answer boxes as forms
// create submit answer button that communicates with the server and gives it the answer to the particular question to write on the README.md file
// when questions are over make download link appear so the user can download their README.md file
import inquirer from 'inquirer';
import fs from 'fs';
import  questions  from './questions.js';
import  generateFile  from './generate.js';

const writeReadme = (filename, data) => {
    fs.writeFile(filename, data, (error) => {
        if (error) {
            return console.log('Please fill out all of the input fields.')
        };
        console.log('Writing README!')
    });
};

const runIt = () => { inquirer.prompt(questions)
.then((userData) => {console.log(userData)
    writeReadme("README.md", generateFile(userData));
});
};

runIt();