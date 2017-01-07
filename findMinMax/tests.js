
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

    describe('Return the min and max number in the array in a new array as follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(findMinMax([1, 2, 3, 4])).to.deep.equal([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(findMinMax([6, 4])).to.deep.equal([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).to.deep.equal([2, 78]);
      });

      it('should return [-8, -2] for [-2, -3, -4, -5, -6, -7, -8]', function () {
        expect(findMinMax([-2, -3, -4, -5, -6, -7, -8])).to.deep.equal([-8, -2]);
      });

      it('should return [4.52, 4.59] for [4.52, 4.53, 4.54, 4.55, 4.56, 4.57, 4.58, 4.59]', function() {
        expect(findMinMax([4.52, 4.53, 4.54, 4.55, 4.56, 4.57, 4.58, 4.59])).to.deep.equal([4.52, 4.59]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it("should not return [4, 4] for [4, 4, 4, 4]", function() {
        assert.notDeepEqual(findMinMax([4, 4, 4, 4]), [4, 4]);
      });

      it('should return [4] for [4, 4, 4, 4]', function () {
        assert.deepEqual(findMinMax([4, 4, 4, 4]), [4]);
      });

    });

  });