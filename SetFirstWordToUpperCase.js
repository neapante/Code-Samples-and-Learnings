function titleCase(str) {
  str = str.toLowerCase();
  
  var arrayStr = str.split('');
  for (var i = 0; i < arrayStr.length; i++) {
    if (arrayStr[i] === arrayStr[0]) {
      arrayStr[0] = arrayStr[0].toUpperCase();
    } else if (arrayStr[i] === " ") {
      arrayStr[i+1] = arrayStr[i+1].toUpperCase();
    }
  }
  str = arrayStr.join('');
  
  console.log(str);
  return str;
}

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
