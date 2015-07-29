function repeat(str, num) {
  // repeat after me
  var x;
  x = str; //stores number so that it will not be affected by concat
  if (num > 0) {
  for (var i = 1; i < num; i++) {
    str = str.concat(x);
  }
  } else {
    str = '';//Empty String
  }
  return str;
}

repeat('*', 5);