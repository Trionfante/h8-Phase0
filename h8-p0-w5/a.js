function isConsonant(input) {
  debugger
  console.log(input);
  count = input.length;
  if (count == 0) {
    return true;
  }
  lower = input.toLowerCase();
  console.log(lower[count-1]);
  if (lower[count-1] != 'a') {
    console.log('cuk')
    if (lower[count-1] != 'i') {
      if (lower[count-1] != 'u') {
        if (lower[count-1] != 'e') {
          if (lower[count-1] != 'o') {
            console.log('popopopopopopopopopopopopo')
            input = '';
            console.log(false);
            return false;
          }
        }
      }
    }
  } else {
    console.log('asdasdasdsadasdasd')
    return isConsonant(input.slice(0,-1));
  }
}

console.log(isConsonant('aAOfE'));
console.log(isConsonant('aOIuE'));

// End of consonant

console.log();

// input: 3 || 0 || 21 || 23
// output: true || false || false || true

// End of ngga tau ini apa ya