/*
  /////
  order
  /////
  Function order ini hanya berfungsi mengurutkan number dari kecil ke besar dalam bentuk string
  dan outputnya disatukan dengan satu spasi. Apabila ada angka yang sama selalu urutkan dari paling
  kiri.

  [RULES]
  1. Tidak boleh menggunakan built in function selain .push() dan .unshift()
*/

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

function order(words) {
  // check if input parameter is false
  if (words == "") {
    return words;
  }

  // container for word check, array to contain and string output
  var storeLetter = '';
  var arr = [];
  var arr2 = [];
  var arr3 = [];
  var output = '';

  // code belows process inputted string to an array
  for (var i = 0; i < words.length; i++) {
    // this if store each letter that is not a space
    if (words[i] != ' ') {
      storeLetter += words[i]
      // console.log(storeLetter);
    }
    // if a space is found, do check if storeLetter is true, if it is, push to arr
    if ((words[i] == ' ') && (storeLetter.length)) {
      arr.push(storeLetter);
      storeLetter = '';
    } // this if includes word at the end of the string that does not contain space (also checked for space)
    if ((i == words.length-1) && (storeLetter.length)) {
      arr.push(storeLetter);
    }
  }

  // code belows -supposed- to sort the array directly without reforming any array of array
  // debugger
  // for (var i = 0; i < arr.length-1; i++) {            // this loops the length of the array container
  //   for ( var j = 0; j < arr[i].length-1; j++) {      // this loops the length of string inside indexed array
  //     if (i+1 == arr[i][j]) {
  //       output += arr[i];
  //     }
  //   }
  // }

  // restructuring array
  for (var i = 0; i < arr.length; i++) {
    arr2.push(arr[i]);
    arr2.push(cekAngka(arr[i]));
    arr3.push(arr2)
    arr2 = [];
    // console.log(arr2);
    // console.log(arr3);
  }

  // sorts strings inside array
  for (var i = 0; i < arr3.length-1; i++) {
    // console.log(arr3[i+1][1]);
    for (var j = 0; j < arr3.length-1; j++) {
      if (arr3[j][1] > arr3[j+1][1]) {
        var temp = arr3[j];
        arr3[j] = arr3[j+1];
        arr3[j+1] = temp;
      }
    }
  }

  // store sorted string in array to direct string variable
  for (var i = 0; i < arr3.length; i++) {
    output += arr3[i][0] + ' ';
  }

  // console.log(arr2[1]);
  console.log(arr3);
  return output;
}

console.log(order("is2 Thi1s T4est 3a")) // "Thi1s is2 3a T4est
console.log(order("4of Fo-10r       pe6000ople   g3ood    th5e  the2")) // "Fo-10r the2 g3ood 4of th5e pe6000ople"
console.log(order("i1s Thi0s m2e real1")) // "Thi0s i1s real1 2me"
console.log(order("")) // ""

// console.log(cekAngka('Thi1s')) // 1
// console.log(cekAngka('peo6000ple')) // 6000
// console.log(cekAngka('Fo-10r')) // -10

/*
  IGNORE THIS - ATTEMPT AT FINAL CODE SIMULATION - IGNORE THIS

  -. if it is not space, contain character
  -. if it is space, check container, if character is found, 

  -. loop a check for each index of the array
  -. recurisve a function to check each word if any match 0-9
  
  -. return of each push an array of object, with keyname taken from matched number, and value of the word before space
  -. get keyname of each object in array, sort
  -. unshift string with value taken from object ordered by sorted keyname


  START 10:40
  END   11:10
*/