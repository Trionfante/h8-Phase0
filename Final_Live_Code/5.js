/*
============
ONGKOS KIRIM
============
ongkosKirim adalah sebuah fungsi yang menerima parameter berupa array of object.
Function akan menerima sebuah parameter array of object dengan format:
​
[
  { nama: <nama pengirim>, asal: <asal pengirim>, tujuan: <tujuan pengiriman>, ekspedisi: <nama ekspedisi>},
  { nama: <nama pengirim>, asal: <asal pengirim>, tujuan: <tujuan pengiriman>, ekspedisi: <nama ekspedisi>},
  ...
]
​
Data di atas merupakan campuran seluruh data pengiriman dari berbagai ekspedisi.
​
Kota-kota yang dimiliki perusahaan adalah secara berurut adalah Depok, Jakarta, Bandung, Surabaya, Bali
​
Function akan memproses array of object tersebut untuk membuat sebuah laporan pengiriman dalam bentuk array of object dengan format:
​
[
  { pengirim: <nama pengirim>, tagihan: <jumlah tagihan>, durasi: <jumlah durasi pengiriman> },
  { pengirim: <nama pengirim>, tagihan: <jumlah tagihan>, durasi: <jumlah durasi pengiriman> },
  ...
]
​
Data yang diharapkan merupakan perhitungan tagihan dan durasi pengiriman dengan ketentuan:
- perjalanan antar kota bernilai 9000/kota
    Ex. dari Depok ke Bandung = Depok >> Jakarta >> Bandung = 2 * 9000 = 18000
    Ex. dari Bali ke Bandung = Bali >> Surabaya >> Bandung = 2 * 9000 = 18000
- Pengiriman dalam kota bernilai 9000
- Untuk pengiriman dengan ekspedisi NJE diskon 10%
- Jika value kota asal atau tujuan tidak ada di dalam daftar kota yang sudah disediakan, maka tagihan 0 dan durasi 0.
- Pengiriman tiap kota berdurasi 1 hari. 
    Ex. dari Depok ke Bandung = Depok >> Jakarta >> Bandung = 2 hari

*/


function ongkosKirim(pengirim) {
  var output = [
    {
    pengirim : '',
    tagihan : 0,
    durasi : 0
    }
  ];
  // var tagihan = 0;
  var durasi = 0;
  var asal = 0;
  var tujuan = 0;
console.log(output[0].tagihan);
  for (var i = 0; i < case1.length; i++) {
    // output[i].pengirim = pengirim[i].nama;
    // output[i].tagihan = (
    // for (var j = 0; j < kota.length; j++) {
    //   if (pengirim[i].asal == kota[j][0]) {
    //     asal = kota[j][1];
    //   }
    //   if (pengirim[i].tujuan == kota[j][0]) {
    //     tujuan = kota[j][1];
    //   } 
    // }
    // if (pengirim[i].ekspedisi != 'NJE') {
    //   output[i].tagihan = (tujuan - asal) * 9000
    // } else if (pengirim[i].ekspedisi == 'NJE') {
    //   output[i].tagihan = (((tujuan - asal) * 9000) - ((tujuan - asal) * 9000) * 10 / 100)
    // }
    // output[i].durasi = durasi;
  }
  
  // wait
  // for (var j = 0; j < kota.length; j++) {
  //   if (pengirim.asal) {

  //   }
  // }
  // return output;
}

var kota = [
  ['Depok',1], ['Jakarta',2], ['Bandung',3], ['Surabaya',4], ['Bali',5]
];

var case1 = [
  { nama: 'Jasper', asal: 'Depok', tujuan: 'Jakarta', ekspedisi: 'NJE' },
  { nama: 'Kevin', asal: 'Jakarta', tujuan: 'Surabaya', ekspedisi: 'Si Lambat' },
  { nama: 'Barry', asal: 'Bali', tujuan: 'Bandung', ekspedisi: 'NJE' }
];

console.log(ongkosKirim(case1))
/*
[
  { pengirim: 'Jasper', tagihan: 8100, durasi: 1 },
  { pengirim: 'Kevin', tagihan: 18000, durasi: 2 },
  { pengirim: 'Barry', tagihan: 16200, durasi: 2 }
]
*/

var case2 = [
  { nama: 'Patricia', asal: 'Jakarta', tujuan: 'Jakarta', ekspedisi: 'TnJ' },
  { nama: 'Anne', asal: 'Medan', tujuan: 'Depok', ekspedisi: 'NJE' }
];

console.log(ongkosKirim(case2))
/*
[                         // if == 0, result = 1 // 1 * 9000
  
  { pengirim: 'Patricia', tagihan: 9000, durasi: 1 },
  { pengirim: 'Anne', tagihan: 0, durasi: 0 }
]
*/