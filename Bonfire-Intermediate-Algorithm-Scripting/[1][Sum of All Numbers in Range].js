function sumAll(arr) {
  var min, max, set = [];
  max = Math.max(arr[0], arr[1]);
  min = Math.min(arr[0], arr[1]);
  for (var i = min; i <= max; i++) {
    set.push(i);
  }
  
  var total = set.reduce(function(a,b){
    return a + b;
  });
  
  return total;
}

sumAll([1, 99]);
