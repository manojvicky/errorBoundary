function fluent(fn) {
  return function(...args) {
    let argsn = [].slice.call(arguments);
    console.log("args", this);
    fn.apply(this, argsn);
    return this;
  };
}

function sender(name) {
  return name;
}

var first = fluent(sender);
var second = first("manoj");

function Person() {}
Person.prototype.setName = fluent(function(fname, lname) {
  this.fname = fname;
  this.lname = lname;
});
Person.prototype.getName = fluent(function() {
  console.log(`My name is ${this.fname} ${this.lname}.`);
  // return `My name is ${this.fname} ${this.lname}.`;
});

console.log(first, second);
var person = new Person();
console.log("person", person);
person
  .setName("manoj", "prajapati")
  .getName()
  .setName("vicky", "prajapati")
  .getName();
console.log("PERSON", person);
