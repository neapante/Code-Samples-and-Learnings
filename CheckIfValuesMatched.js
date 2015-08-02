//Hardcoded
function isMatched(value) {
  
  
  if (value === 2 || value === 3) {
   return false; 
  } else {
   return true;
  }
}

/*function bouncer(arr) {
  arr = arr.filter(isBigEnough);
  return arr;
}*/

//bouncer([7, 'ate', '', false, 99]);





function destroyer(arr,a,b) {
  console.log(arr);
  console.log(a + " " + b);
  arr = arr.filter(isMatched);
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
