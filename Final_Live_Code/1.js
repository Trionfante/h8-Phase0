/*
******
Cari Student
******


Function studentFinder menerima input berupa string berisi nama-nama student sebuah batch, dipisahkan oleh " " atau ",".
Function ini mengeluarkan output berupa nama student dengan jumlah huruf terpendek.
Apabila ada 2 nama student yang terpendek, maka function akan mengeluarkan nama yang berada di posisi sebelah kiri terlebih dahulu!


[RULES]
  - Dilarang menggunakan built-in function .split

*/


function studentFinder(students) {
  var store = '';
  var contain = [];
  var sort = [];
  var temp = [];

  for (var i = 0; i < students.length; i++) {
    if ((students[i] != ' ') && (students[i] != ',')) {
      // console.log(students[i])
      store += students[i]
    }
    if (((students[i] == ' ') || (students[i] == ',')) && (store)) {
      contain.push(store)
      store = '';
    }
    if ((i == students.length-1) && (store)) {
      contain.push(store);
    }
  }

  for (var i = 0; i < contain.length; i++) {
    for (var j = 0; j < contain.length-i-1; j++) {
      if (contain[j].length > contain[j+1].length) {
        temp = contain[j];
        contain[j] = contain[j+1];
        contain[j+1] = temp;
      }
    }
  }

  return contain[0];
}



console.log(studentFinder('Hanif Ranev Tio Tirta Igor Yusril Tia Titania')); // Tio
console.log(studentFinder('Yogi Hengky Trina An Hamzah')); // An
console.log(studentFinder('Huday,Kay,Trisna,Kinan,Hazman')); // Kay
