function palindrome(str) {
  
  //Code to remove all punctuation and lowercase all
  str = str.replace(/[^\w\s]|_/g, "");
  console.log(str);
  //code to remove all spaces in a string
  str = str = str.replace(/\s+/g, '');
  console.log(str);
  str = str.toLowerCase();
  console.log(str);
  //Check for Palindrome
  var arrayString = str.split('');
  arrayString = arrayString.reverse();
  var newString = arrayString.join('');
   if (newString === str) {
     console.log(newString);
     console.log(str);
     return true;
   } else {
     console.log(newString);
     console.log(str);
     return false;
   }
  
  return true;
}



palindrome("not a palindrome");
