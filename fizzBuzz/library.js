function fizzBuzz(n) {
  if (!Number.isInteger(n) || n < 0) {
    return "ValueError, Positive Integer input required"
  }
  if (n == 0) {
    return 0;
  }
  var fizz_buzz = '';
  if (n % 3 == 0) {
    fizz_buzz+='Fizz';
  }
  if (n % 5 == 0) {
    fizz_buzz+='Buzz';
  }
  if (fizz_buzz) {
    return fizz_buzz;
  }
  else {
    return n;
  }
}
module.exports = fizzBuzz