function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  if (target === str.substr(str.length-target.length, target.length)) {
    return true; 
  } else {
    return false;
  }
}

end('If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing', 'mountain');