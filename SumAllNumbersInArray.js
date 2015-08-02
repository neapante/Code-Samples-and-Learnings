function sumAll(arr) {
  var x = arr[0], y = arr[1];
  var a = Math.min(x, y);
  var b = Math.max(x, y);
  arr = [a,b];
  console.log(arr);
  var loop = b - a;
  console.log(loop);
  var newArr = [];
  var total = 0;
  
  for (var i = 0; i <= loop; i++) {
    console.log("poush");
    newArr.push(a+i);
  }
  
  for (var j = 0; j < newArr.length; j++) {
    total = total + newArr[j];
  }
  
  console.log(newArr);
  return(total);
}

sumAll([5, 1]);
