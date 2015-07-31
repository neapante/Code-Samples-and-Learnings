function chunk(arr, size) {
  //question from http://www.freecodecamp.com/challenges/bonfire-chunky-monkey
  var newArr = [];
  
  for (var x = 0; x < 2; x++) {
    for (var y = 0; y < 2; y++) {
      x = [x][y];
      y = [x][y];
      newArr.push([x,y]);
    }
  }

 // var test = [];
 // for(var i = 0; i < 100; i++){
 //    test.push([i, "lol"]);
  //}
  
  return newArr;
}

chunk(['a', 'b', 'c', 'd'], 2);
