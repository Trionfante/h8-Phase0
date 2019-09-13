/*
  ///////////
  diagonAlley
  ///////////
  Function diagonAlley adalah sebuah function yang membentuk tulisan dalam bentuk diagonal dan
  membentuk bingkai kotak seperti pada test cases. function ini akan menerima parameter string, dan
  function ini berfungsi hanya untuk menampilkan.

  [EXAMPLE]
  INPUT: non
  OUTPUT: 
    |-n
    |o|
    n-|

  NOTES:
    - word membentuk diagonal
    - tepi bingkai horizontal disambung dengan -
    - tepi bingkai vertical disambung dengan |
    - Ukuran bingkai sesuai dengan panjang karakter yang diberikan.
    - Minimal panjang karakter yang diinput adalah 3. Tampilkan 'Invalid input' jika kondisi ini tidak terpenuhi.
*/

function diagonAlley(word) {
  debugger
  if (word.length < 3) {
    return 'Invalid Input';
  }

  // IF i DECREASES, word REVERSED DUE TO index CALL COUNTING BACKWARD
  // for (i = word.length; i > 0; i--) {
  //   var output = '';
  //   for (j = 0; j < word.length; j++) {
  //     if (i-1 == j) {
  //       output += word[j];
  //     } else if ((j == 0) || (j == word.length-1)) {
  //       output += '|';
  //     } else {
  //     output += '-';
  //     }
  //   }
  //   console.log(output);
  // }
/**
 * word needs to be printed out in increasing order
 * word position need to be printed out in decreasing order
 * 
 * as i counts vertically, i HAVE to be in increasing order, following requirement for word print out order
 * as j counts horizontally, j HAVE to be in decreasing order, following requirement for word print out position
 *
 * QUESTION:
 * if i and j both counts in different order, then both can be exchanged?
 * 
 * ANSWER:
 * they can't
 * 
 * REASON:
 * because each is nested, and each process is count until the loop is finished, inside the first process of outer
 * - loop. 
 */

  // INDEX i INCREASES, INDEX j DECREASES
  // AS j DECREASES:
  // - FIRST PRINTED POSITION EQUALS length INSTEAD OF -1
  // - LAST PRINTED POSITION EQUALS 1 INSTEAD OF 0
  for (i = 0; i < word.length; i++) {               // index i starts from 0, but the loop needs to be done as word.length
    var output = '';                                // index i = 0 times 6 equals to index i = 5 ( 0 1 2 3 4 5 )
    for (j = word.length; j > 0; j--) {             // j equals 6, because the loop needs to be done 6 times
      if (i == j-1) {                               // for this check to work, both needs to be in 0 index, hence -1 for j
        output += word[i];                          // word[i] equals word[0], which is the first letter in print out order
      } else if ((j == word.length) || (j == 1)) {  // check follows the first counter as in 'number of times', not index position
        output += '|';                              // but why is j == 1 as the last print position?
      } else {                                      // because j == 0 would equal 7 times instead of 6
      output += '-';                                // everything else prints out a '-'
      }
    }
    console.log(output);
  }
}


// TEST CASES

diagonAlley('kuroko')
/*
  |----k
  |---u|
  |--r-|
  |-o--|
  |k---|
  o----|
*/
console.log('')

diagonAlley('non')
/*
  |-n
  |o|
  n-|
*/
console.log('')

diagonAlley('basuke')
/*
  |----b
  |---a|
  |--s-|
  |-u--|
  |k---|
  e----|
*/
console.log('')

diagonAlley('no')
// Invalid input

/*

-. get input length
-. count i from initiate to length
-. count j from length to initiate

-. if 

-. while not at length print -
-. if count at initiate print |
-. if count at length print |



  START 10:15
  END   10:35
*/