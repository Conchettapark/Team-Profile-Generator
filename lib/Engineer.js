// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, GitHubUser) {
    const github = GitHubUser;

    super(name, id, email, github);
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
  }

  getRole() {
    return "Engineer";
  }

  getGithub() {
    return this.github;
  }

  // printInfo() {
  //   console.log(`Name: ${this.name}`);
  //   console.log(`ID: ${this.id}`);
  //   console.log(`Email: ${this.email}`);
  //   console.log(`Role: ${this.role}`);
  //   console.log(`GithubUser: ${this.GithubUser}`);
  // }
}

module.exports = Engineer;
