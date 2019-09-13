function testMe(input) {
  if ((input === 'a')
  || (input === 'i')
  || (input === 'u')
  || (input === 'e')
  || (input === 'o')) {
    // console.log('match');
    return true;
  } else {
    // console.log('mismatch');
    return false;
  }
}

function testMeAgain(input) {
  return  input == 'a' ? true
        : input == 'i' ? true
        : input == 'u' ? true
        : input == 'e' ? true
        : input == 'o' ? true
        : false;
}

console.log(testMe('a'));
console.log(testMeAgain('a'));
// testMeAgain('z');