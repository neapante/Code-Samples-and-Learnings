function largestOfFour(arr) {
  //look for Position of the number 0,0 ; 0,1 ; 0,2 etc
  //look for position x
  var storage = [0,0,0,0];
  for (var x = 0; x < arr.length; x++) {
    //look for position y
    for (var y = 0; y < arr.length; y++) {
      if (arr[x][y] > storage[x]) {
      storage[x] = arr[x][y];
    } else if (arr[x][y] < storage[x]) {
      storage[x] = storage[x];
    } else if (arr[x][y] === storage[x]) {
      storage[x] = storage[x];
    } else {}
    }
  }
  
  return storage;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);