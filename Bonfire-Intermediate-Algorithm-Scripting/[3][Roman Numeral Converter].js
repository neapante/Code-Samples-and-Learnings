function toLetters(number) {
  if (number >= 10) {
    if (number == 10) {
      number = 'X';
    } else if (number == 20) {
      number = 'XX';
    } else if (number == 30) {
      number = 'XXX';
    } else if (number == 40) {
      number = 'XL';
    } else if (number == 50) {
      number = 'L';
    } else if (number == 60) {
      number = 'LX';
    } else if (number == 70) {
      number = 'LXX';
    } else if (number == 80) {
      number = 'LXXX';
    } else if (number == 90) {
      number = 'XC';
    } else if (number === 0) {
      number = '';
    }
  } else {
        if (number == 1) {
      number = 'I';
    } else if (number == 2) {
      number = 'II';
    } else if (number == 3) {
      number = 'III';
    } else if (number == 4) {
      number = 'IV';
    } else if (number == 5) {
      number = 'V';
    } else if (number == 6) {
      number = 'VI';
    } else if (number == 7) {
      number = 'VII';
    } else if (number == 8) {
      number = 'VIII';
    } else if (number == 9) {
      number = 'IX';
    } else if (number === 0) {
      number = '';
    }
  }
  console.log(number);
  return number;
}




function convert(num) {
  var whole, decimal;
  var newArr = [];
  whole = Math.floor(num/10);
  whole = whole * 10;
  console.log(whole);
  whole = toLetters(whole);
  console.log(whole);
  
  decimal = num % 10;
  console.log(decimal);
  decimal = toLetters(decimal);
  console.log(decimal);
  newArr = [whole, decimal];
  console.log(newArr);
  
  var roman;
  roman = newArr.join('');
  return roman;
}

convert(16);
