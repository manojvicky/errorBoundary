function compose(a, b) {
  return function(c) {
    return a(b(c));
  };
}
function addTwo(value) {
  return value + 2;
}

function multiplyTwo(value) {
  return value * 2;
}
var number = compose(
  addTwo,
  multiplyTwo
);
console.log(number);
var next = number(4);
console.log(next);
