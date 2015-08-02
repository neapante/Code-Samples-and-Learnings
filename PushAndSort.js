//push the second argument then sort the contents. after sorting, the index of num is returned

function where(arr, num) {
  arr.push(num);
  arr = arr.sort();
  console.log(arr);
  for (var i = 0; i < arr.length;i++) {
    if (arr[i] === num) {
      //arr[i] = num;
      return i;
    }
  }
  //return num;
}

where([10, 20, 30, 40, 50], 35);
