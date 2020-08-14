function Person(firstName, lastName, age, gender, interests) {
  this.name = `${firstName} ${lastName}`;
  this.age = age;
  this.gender = gender;
  this.interests = interests;

  (this.bio = function () {
    console.log(
      `${this.name} is ${this.age} years old. They like ${this.interests}.`
    );
  }),
    (this.greeting = function () {
      console.log(`Hi! I'm ${this.name}`);
    });
}

function Teacher(subject, firstName, lastName, age, gender, interests) {
  Person.call(this, firstName, lastName, age, gender, interests);
  this.subject = subject;
  this.greeting = function () {
    return `Hello. My name is ${this.name}, I am ${this.age} years old and I teach ${this.subject}.`;
  };
}
