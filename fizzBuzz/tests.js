var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var fizzBuzz = require('./library.js')

describe("Fizz Buzz tests ", function() {

  it("should return `Fizz` for number divisible by 3", function() {
    expect(fizzBuzz(3)).to.equal('Fizz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    expect(fizzBuzz(5)).to.equal('Buzz');
  });

  it("should return `FizzBuzz` for 15", function() {
    expect(fizzBuzz(15)).to.equal('FizzBuzz');
  });

  it("should return `FizzBuzz` for 45", function() {
    fizzBuzz(45).should.equal('FizzBuzz');
  });

  it("should return `FizzBuzz` for 90", function() {
    fizzBuzz(90).should.equal('FizzBuzz');
  });

  it("should return `Fizz` for 63", function() {
    fizzBuzz(63).should.equal('Fizz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    assert.equal(fizzBuzz(7), 7);
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
    assert.equal(fizzBuzz(101), 101);
  });

  it("should return 0 for 0 since its indivisible by 3 and 5", function() {
    assert.equal(fizzBuzz(0), 0);
  });

  it("should return an error message since input is not an integer", function() {
    assert.equal(fizzBuzz("I'm not an Integer"), "ValueError, Positive Integer input required");
  });

  it("should return an error message since input is a negative Integer", function() {
    assert.equal(fizzBuzz("I'm not an Integer"), "ValueError, Positive Integer input required");
  });

});