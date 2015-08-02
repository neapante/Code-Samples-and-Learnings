function isBigEnough(value) {
  if (value === false || value === null || value === '' || value === undefined || value === isNaN || value === 0) {
   return false; 
  } else {
   return true;
  }
}

function bouncer(arr) {
  arr = arr.filter(isBigEnough);
  return arr;
}

bouncer([7, 'ate', '', false, 99]);
