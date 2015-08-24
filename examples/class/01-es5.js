function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
Person.prototype.say = function(what) {
  console.log(this.firstName+' '+this.lastName+' says: '+what);
};

var john = new Person('John', 'Doe');
john.say('Hello!');