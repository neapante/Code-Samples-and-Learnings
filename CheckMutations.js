function mutation(arr) {
  //normalize case
  var string1 = arr[0];
  var string2 = arr[1];
  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();
  //console.log(string1 + " and " + string2);
  //store each element in two separate arrays
  var arrString = string1.split('');
  var element = string2.split('');
  
  console.log(arrString);
  console.log(element);
  
  //start search
  var x = 0;
  var result = 0;
  //will check the arrString until result is negative one or end of the element
  while (result != -1 && x < element.length) {
      result = arrString.indexOf(element[x]);
      x = x + 1;
      console.log(result);
  }
  
  //compare the result
  if (result === -1) {
    console.log("Nothing found");
    return false;
  } else if (result === 0 || result >= 1) {
    console.log("Match found");
    return true;
  }
}

mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']);
