function chunk(arr, size) {
  // Break it up.
  var child = [];
  var mother = [];
  var start = 0;
  var end = size;
  var loops = arr.length/size;
  
    for (var i = 0; i < loops; i++) {
      child = arr.slice(start,end);
      mother.push(child);
      start = start + size;
      end = end + size;
    }
  return mother;
}

chunk([0, 1, 2, 3, 4, 5], 3);
