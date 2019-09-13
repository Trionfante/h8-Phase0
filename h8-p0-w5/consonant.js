// input: 'aAQfE' || 'aOIuE'
// output: false  || true

function testMeAgain(input) {
  return  input == 'a' ? true
        : input == 'i' ? true
        : input == 'u' ? true
        : input == 'e' ? true
        : input == 'o' ? true
        : false;
}

function consonant(input) {
  debugger
  // console.log(input);
  if (input.length == 1) {
    // console.log(true);
    return true;
  }

  var check = input.toLowerCase();
  // console.log(check[input.length-1]);
  if (testMeAgain(check[input.length-1]) === false) {
    // console.log(false);
    return false;
  }


  return consonant(input.slice(0,-1));
}

console.log(consonant('aAOfE'));
console.log(consonant('aOIuE'));

// End of consonant