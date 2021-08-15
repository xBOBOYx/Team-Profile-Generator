const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const xmenArr = [];

const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Name your team manager!',
            validate: nameInput => {
                
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your team manager\'s ID?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter an ID number!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your team manager\'s email?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email address!');
                    return false;
                }
            }
        },  
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your team manager\'s office number?',
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log('Please enter an office number!');
                    return false;
                }
            }
        }
    ])
    .then(teamManagerInput => {
        const { name, id, email, officeNumber } = teamManagerInput;
        const teamManager = new Manager(name, id, email, officeNumber);

        xmenArr.push(teamManager);
        console.log(`${name} has been added to the team!`);
    })
    
};

const addXmen = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'xmen',
            message: 'Choose your next team member!',
            choices: ['Engineer', 'Intern',]
        },
        {
            type: 'input',
            name: 'name',
            message: 'Please enter your team member\'s name.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                    return false;
                }

            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your team member\'s ID number?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter an ID number!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your team member\'s email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your team member\'s GitHub username?',
            when: (input) => input.xmen === 'Engineer',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter a GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is your team member\'s school?',
            when: (input) => input.xmen === 'Intern',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter a school!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddXmen',
            message: 'Would you like to add another team member?',
            default: false
        }
    ])
    .then(xmenInput => {
        const { xmen, name, id, email, github, school,confirmAddXmen } = xmenInput;
        let xmenType;

        if (xmen === 'Engineer') {
            xmenType = new Engineer(name, id, email, github);
            console.log(`${name} has been added to the team!`);

        } else if (xmen === 'Intern') {
            xmenType = new Intern(name, id, email, school);
            console.log(`${name} has been added to the team!`);
        }
        xmenArr.push(xmenType);
        if (confirmAddXmen) {
            return addXmen(xmenArr);
        
        } else {
            return xmenArr;
        }
    })
};



managerQuestions()
    .then(addXmen)



