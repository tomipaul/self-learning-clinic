'use strict'

function findMinMax(numbersArray) {
	if (!Array.isArray(numbersArray) || numbersArray.length==0) {
		return "ValueError, array of numbers is expected";
	}
	var [min, max] = [numbersArray[0], numbersArray[0]]
	for (var count = 1; count < numbersArray.length; count++ ) {
		if (numbersArray[count] > max) {
			max = numbersArray[count];
		}
		if (numbersArray[count] < min) {
			min = numbersArray[count];
		}
	}
	if (min==max) {
		return [min];
	}
	return [min, max];
}
module.exports = findMinMax;