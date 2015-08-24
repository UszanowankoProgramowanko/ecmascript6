class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return [this.firstName, this.lastName].join(' ');
  }

  toString() {
    return 'Person ' + this.getFullName();
  }

}

class Employee extends Person {
  constructor(firstName, lastName, jobTitle) {
    super(firstName, lastName);
    this.jobTitle = jobTitle;
  }
  toString() {
    return `${super.toString()} (${this.jobTitle})`;
  }
}

var john = new Person('John', 'Doe');
var wiktor = new Employee('Wiktor', 'Toporek', 'PHP Programmer');

console.log(john.toString()); /*Person: John Doe*/
console.log(wiktor.toString()); //Person: Wiktor Toporek (PHP Programmer)