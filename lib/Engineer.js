// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer {
  constructor(name, id, email, role, GithubUser) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
    this.GithubUser = GithubUser;
  }

  printInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`ID: ${this.id}`);
    console.log(`Email: ${this.email}`);
    console.log(`Role: ${this.role}`);
    console.log(`GithubUser: ${this.GithubUser}`);
  }
}

const Engineer = new Engineer();

Engineer.printInfo();
