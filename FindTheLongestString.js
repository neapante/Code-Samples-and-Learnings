function findLongestWord(str) {
  var arrayString = str.split(' ');
  console.log("Length of array: "+ arrayString.length);
  var initialVal = 0;
  var finalVal = 0;
  var loop = 0;
  for (var i = 0; i < arrayString.length; i++) {
    if (arrayString[i].length > finalVal) {
      finalVal =arrayString[i].length;
    } else if (arrayString[i].length < finalVal) {
      finalVal = finalVal;
    } else if (arrayString[i].length === finalVal) {
      finalVal = finalVal;
    } else {}
    //finalVal = initialVal;
    loop = loop + 1;
    console.log(loop);
    console.log("Highest is : " +  finalVal);
    console.log("--------");
  }
  //str = arrayString[finalVal]
  //str = finalVal;
  //console.log(str);
  return finalVal;
}

findLongestWord('The quick brown fox jumped over the lazy');
