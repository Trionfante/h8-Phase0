/* 
Buatlah sebuah function yang menerima parameter array of numbers.

Function tersebut akan mereturn numbers dengan kondisi:
  - terurut dari yang terbesar
  - terfilter hanya yang diatas atau sama dengan rata-rata


RULES:
  - dilarang menggunakan built-in function apapun selain .push


CONTOH:

INPUT:
  [2, 3, 5, 5, 6, 7]

PROCESS:
  - rata-ratanya adalah 4.67
  - yang diatas atau sama dengan rata-rata [5, 5, 6, 7]
  - lalu diurut dari yang terbesar

OUTPUT: 
  [7, 6, 5, 5]
*/

function getMean(numbers) {
  var output = 0;
  for (var i = 0; i < numbers.length-1; i+=2) {
    output = output + (numbers[i] + numbers[i+1]);
    // console.log(output);
  }
  output = output / numbers.length
  return output;
}

function sort(numbers) {
  var temp = [];
  for (var i = 0; i < numbers.length-1; i++) {
    for (var j = 0; j < numbers.length-i-1; j++) {
      if (numbers[j] < numbers[j+1]) {
        temp = numbers[j];
        numbers[j] = numbers[j+1];
        numbers[j+1] = temp;
      }
    }
  }
  return numbers;
}

function sortAndFilterAboveMean(numbers) {
  var mean = getMean(numbers)
  var aboveMean = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > mean) {
      aboveMean.push(numbers[i])
    }
  }
  return sort(aboveMean);
}

console.log(sortAndFilterAboveMean([2, 3, 5, 5, 6, 7])) // [ 7, 6, 5, 5 ]

console.log(sortAndFilterAboveMean([1, 10, 3, 9, 1, 4, 10])) // [ 10, 10, 9 ]

console.log(sortAndFilterAboveMean([45, 2, 8, 22, 3, 9])) // [ 45, 22 ]

console.log(sortAndFilterAboveMean([3, 5, 2, 6])) // [ 6, 5 ]

// START  09:35
// END    10:13