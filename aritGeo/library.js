function aritGeo(numberArray) {
	if (numberArray.length == 0) {
    return 0;
  }
  var [ratio, difference] = [(numberArray[1]/numberArray[0]), (numberArray[1]-numberArray[0])];
  for(var index=1; index<numberArray.length-1; index++) {
    if (numberArray[index+1]/numberArray[index] != ratio) {
      break;
    }
    if (index == numberArray.length-2) {
      return "Geometric";
    }
  }
  for(var index=1; index < numberArray.length-1; index++) {
    if (numberArray[index+1]-numberArray[index] != difference) {
      break;
    }
    if (index == numberArray.length-2) {
      return "Arithmetic";
    }
  }
  return -1;
}
module.exports = aritGeo;