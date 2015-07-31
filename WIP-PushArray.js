function chunk(arr, size) {
  // Break it up.
  var newArrChild = [];
  var newArrMother = [];
  x = 0;
  y = arr.length/size;
  /*var x = 3;
  var y = 5;

  newArrChild.push(arr[0]);
  newArrChild.push(arr[1]);
  console.log(newArrChild);
  newArrMother.push(newArrChild);
  newArrChild = [];
  x = 22;
  y = 45;
  newArrChild.push(arr[2]);
  newArrChild.push(arr[3]);
  newArrMother.push(newArrChild);
  console.log(newArrMother[0][0]);
  console.log(newArrMother[0][1]);
  console.log(newArrMother[1][0]);
  console.log(newArrMother[1][1]);*/
 for (var h = 0; h < y; h++) {
    for (var i = x; i < size; i++) {
      if (i === size-1) {
        //push the last number and resest Child Array
        newArrChild.push(arr[i]);
        newArrMother.push(newArrChild);
        newArrChild = [];
        console.log("this is x " + x);
        console.log("this is size " + size);
      } else {
        newArrChild.push(arr[i]);
        console.log("pushed");
      }
    }
    x = x + y;
    size = size + y;
 }
 
  return newArrMother;
}

chunk([0, 1, 2, 3, 4, 5], 3);
