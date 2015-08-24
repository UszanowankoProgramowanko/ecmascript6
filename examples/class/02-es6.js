class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  say(what) {
    console.log(`${this.firstName} ${this.lastName} says: ${what}`);
  }
}

var john = new Person('John', 'Doe');
john.say('Hello!');