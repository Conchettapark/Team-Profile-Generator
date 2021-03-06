const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const employeeTypeMap = {
  Manager,
  Engineer,
  Intern,
};

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

var managerQuestions = [
  {
    name: "name",
    type: "input",
    message: "What is your manager's name?",
  },

  {
    name: "id",
    type: "input",
    message: "What is your manager's id?",
  },

  {
    name: "email",
    type: "input",
    message: "What is your manager's email?",
  },

  {
    name: "officeNumber",
    type: "input",
    message: "What is your manager's office number?",
  },
];
var employeeQuestions = [
  {
    name: "TeamMemberType",
    type: "list",
    message: "Which type of team member would you like to add?",
    choices: ["Engineer", "Intern", "I do not want to add a team member"],
  },
  {
    name: "name",
    type: "input",
    message: "What is your engineer's name?",
    when: (answers) => answers.TeamMemberType == "Engineer",
  },
  {
    name: "id",
    type: "input",
    message: "What is your engineer's id?",
    when: (answers) => answers.TeamMemberType == "Engineer",
  },
  {
    name: "email",
    type: "input",
    message: "What is your engineer's email?",
    when: (answers) => answers.TeamMemberType == "Engineer",
  },
  {
    name: "github",
    type: "input",
    message: "What is your engineer's github username?",
    when: (answers) => answers.TeamMemberType == "Engineer",
  },
  {
    name: "name",
    type: "input",
    message: "What is your intern's name?",
    when: (answers) => answers.TeamMemberType == "Intern",
  },
  {
    name: "id",
    type: "input",
    message: "What is your intern's id?",
    when: (answers) => answers.TeamMemberType == "Intern",
  },
  {
    name: "email",
    type: "input",
    message: "What is your intern's email?",
    when: (answers) => answers.TeamMemberType == "Intern",
  },
  {
    name: "school",
    type: "input",
    message: "What is your intern's school?",
    when: (answers) => answers.TeamMemberType == "Intern",
  },
];
var employees = [];

inquirer.prompt(managerQuestions).then((managerAnswers) => {
  inquirer.prompt(employeeQuestions).then((employeeAnswers) => {
    const m = new Manager(managerAnswers);
    employees.push(m);

    if (employeeTypeMap[employeeAnswers.TeamMemberType]) {
      const e = new employeeTypeMap[employeeAnswers.TeamMemberType](
        employeeAnswers
      );
      employees.push(e);
    }
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, render(employees));
  });
});

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
