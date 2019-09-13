/*
============
rapotAsrama
============
rapotAsrama adalah sebuah fungsi yang menerima parameter berupa array of object.
Function akan menerima sebuah parameter array of object dengan format:

  [
    { nama: <nama murid>, nilai: <nilai murid>, asrama: <nama asrama>},
    { nama: <nama murid>, nilai: <nilai murid>, asrama: <nama asrama>},
    ...
  ]

Data di atas merupakan campuran seluruh nilai murid dari asrama manapun.

Function akan memproses array of object tersebut untuk membuat sebuah rapot dalam bentuk array of object dengan format:

  [
    { asrama: <nama asrama>, lulus: <array berisi nama murid yg lulus>, gagal: <array berisi nama murid yg gagal> },
    { asrama: <nama asrama>, lulus: <array berisi nama murid yg lulus>, gagal: <array berisi nama murid yg gagal> },
    ...
  ]

Data yang diharapkan merupakan akumulasi murid yang lulus dan tidak dari setiap asrama.
Standard kelulusan adalah minimum 70.

*/

function rapotAsrama(students) {
  debugger
  var rapot = [];
  var Griffindor = {
    asrama: '',
    gagal: [],
    lulus: []
  };
  var Ravenclaw = {};
  var Slyterin = {};
  
  
  for (var i = 0; i < students.length; i++) {
    var gagal = [];
    var lulus = [];
    // for (var j = 0; j < students.length; j++) {
      if (students[i].asrama == 'Griffindor') {
        if (students[i].nilai >= 70) {
          lulus.push(students[i].nama)
        } else if (students[i].nilai < 70) {
          gagal.push(students[i].nama)
        }
        Griffindor.asrama = students[i].asrama;
        Griffindor.gagal.push(gagal);
        Griffindor.lulus.push(lulus);
        rapot.push(Griffindor);
      // } else if (students[i].asrama == 'Ravenclaw') {
      //   if (students[i].nilai >= 70) {
      //     lulus.push(students[i].nama)
      //   } else if (students[i].nilai < 70) {
      //     gagal.push(students[i].nama)
      //   }
      //   Ravenclaw.asrama = students[i].asrama;
      //   Ravenclaw.gagal = gagal;
      //   Ravenclaw.lulus = lulus;
      //   rapot.push(Ravenclaw);
      // } else if (students[i].asrama == 'Slyterin') {
      //   if (students[i].nilai >= 70) {
      //     lulus.push(students[i].nama)
      //   } else if (students[i].nilai < 70) {
      //     gagal.push(students[i].nama)
      //   }
      //   Slyterin.asrama = students[i].asrama;
      //   Slyterin.gagal = gagal;
      //   Slyterin.lulus = lulus;
      //   rapot.push(Slyterin);
      }
  }
  return rapot;
}


var data = [
  { nama: 'Harry Potter', nilai: 80, asrama: 'Griffindor' },
  { nama: 'Cho Chang', nilai: 60, asrama: 'Ravenclaw' },
  { nama: 'Pansy Parkinson', nilai: 70, asrama: 'Slyterin' },
  { nama: 'Dean Thomas', nilai: 50, asrama: 'Griffindor' },
  { nama: 'Ginny Weasley', nilai: 10, asrama: 'Griffindor' },
  { nama: 'Gregory Goyle', nilai: 10, asrama: 'Slyterin' },
  { nama: 'Penelope Clearwater', nilai: 10, asrama: 'Ravenclaw' },
  { nama: 'Tom Marvolo Riddle', nilai: 90, asrama: 'Slyterin' },
];

console.log(JSON.stringify(rapotAsrama(data)));

/* 
[
  {
    asrama: 'Griffindor',
    gagal: ['Dean Thomas', 'Ginny Weasley'],
    lulus: ['Harry Potter']
  },
  {
    asrama: 'Ravenclaw',
    gagal: ['Cho Chang', 'Penelope Clearwater'],
    lulus: []
  },
  {
    asrama: 'Slyterin',
    gagal: ['Gregory Goyle'],
    lulus: ['Pansy Parkinson', 'Tom Marvolo Riddle']
  }
]
*/
