// Expected output as string
// 321
// 21
// 1

  function recursive(input) {
    if (input == 0) {
      return input;
    }
    output = '';
    for (var i = 0; i < input; i++) {
      output += input-i;
    }
    console.log(output);
    input--;
    recursive (input);
  }

  recursive(3);

// End of 321

  console.log();

// input: 'I have a dream'
// output: 4

  function countWords(input) {
    // debugger;
    output = 0;
    check = '';
    for (var i = 0; i < input.length; i++) {
      if (input[i] !== ' ') {
        check += input[i];
        // console.log(check);
      } else {
        if (check) {
          output++
          check = '';
        }
      }
      if (i == input.length-1) {
        if (check) {
          output++
          check = '';
        }
      }
    }
    console.log(output);
  }

  countWords('  I    have  a dream    ');

// End of I have a dream - that sounds kinda depressing

  console.log();

// input 'Hello world'
// output: 'dlrow olleh'

  var output = ''; // container must be outside of loop's scope!!!!
  function reverse(input) {
    // debugger
    if (input.length == 0) {
      return;
    }
    
    var count = input.length;
    // console.log(count);
    output += input[count-1]; // because .length counts from 1, last indexed character is actually at 10 instead of 11
    // count--; // not needed since counter is managed directly by modified input
    
    reverse(input.slice(0,-1));
    
    // console.log(output) // will mysteriously run 11 times for some reason
    return output;
  }

  console.log(reverse('Hello world'));

// End of the world

  console.log();

// input: 'aAQfE' || 'aOIuE'
// output: false  || true

// End of consonant

  console.log();

// input: 3 || 0 || 21 || 23
// output: true || false || false || true

// End of ngga tau ini apa ya