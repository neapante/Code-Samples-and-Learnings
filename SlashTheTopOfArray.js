function slasher(arr, howMany) {
  // it doesn't always pay to be first
  
  if (howMany > 1) {
    if (howMany >= arr.length) {
      arr = [];
      return arr;
    } else {
      arr = arr.slice(howMany);
      return arr;
    }
  } else if (howMany < 1) {
    return arr;
  }


}

slasher([1, 2, 3, 3,4], 2 );
