// console.log(parseInt('abc123'));
// console.log(parseInt('123abc'));
// console.log(parseInt('1a2b3c'));
// console.log(parseInt('6000abc'));
// console.log(parseInt('abc6000'));
// console.log(parseInt('0',16))
// console.log(parseInt('0123456789',16));;

function cekAngka(input) {
  // var isnowint = parseInt(input);
  // console.log(input.length);
  var output = ''; 
  for (var i = 0; i < input.length; i++) {
    if ((parseInt(input[i])) || (input[i] == '0') || (input[i] == '-')){
      output += input[i];
    }
  }
  return Number(output);
}

// function whether(one, two) {
//   if (one > two) {
//     return 'say yes';
//   } else {
//     return 'say no';
//   }
// }


console.log(cekAngka('Thi1s')) // 1
console.log(cekAngka('peo6000ple')) // 6000
console.log(cekAngka('Fo-10r')) // -10
console.log();

// console.log(whether(cekAngka('peo6000ple'), 20));

// console.log(whether(20, cekAngka('peo6000ple')));

// console.log(whether(cekAngka('6000'), 20));

// console.log(whether(6000, 20));

// cekAngka('Thi1s');