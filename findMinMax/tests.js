
  'use strict';

  var chai = require('chai');
  var assert = chai.assert;
  var expect = chai.expect;
  var should = chai.should();

  var findMinMax = require('./library.js')

  describe('Min-Max Numbers in an Array: ', function () {

    describe('Accept an array of numbers and output an array of number(s)', function () {

      it("should produce an error message if input is not an array", function() {
        findMinMax("I'm a string").should.equal("ValueError, array of numbers is expected");
      });

      it("should produce an error message if array input is empty", function() {
        findMinMax([]).should.equal("ValueError, array of numbers is expected");
      });

      it ('should return an array', function() {
        findMinMax([6, 1, 5, 9]).should.be.an('array', 'function should return an array');
      });

    });

  });