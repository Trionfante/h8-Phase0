/*
=====
Hacktiv Mining
=====

[INSTRUCTIONS]
salesAmount adalah fungsi yang mengambil parameter:
    1. array penjualan/sales hasil tambang dari berbagai macam tambang yang dimiliki oleh perusahaan Hacktiv
    2. nama mineral yang ingin diketahui jumlah salesnya dari semua tambang-tambang tersebut.

Fungsi ini akan me-return amount atau jumlah dari sales suatu mineral. 

Berikut ini adalah daftar mineral beserta harga-harganya:
    - sulfur dengan harga 10
    - silver dengan harga 30
    - malachite dengan harga 50
    - gold dengan harga 50
    - diamond dengan harga 100

[EXAMPLE]
INPUT : 
- hasil tambang: [['silver','silver','gold'], ['gold','malachite']]
- mineral yang dicari nilai penjualannya: gold

PROSES:
1. Ada 2 tambang, tambang pertama menghasilkan [silver,silver,gold] dan tambang kedua menghasilkan [gold,malachite]
2. Di semua tambang perusahaan Hacktiv, terdapat 2 biji hasil tambang gold.
3. Harga gold adalah 50, jadi hasil penjualan gold adalah 100

OUTPUT:
100

[RULES]
1. WAJIB menggunakan algoritma/pseudocode atau -50 poin

*/


function salesAmount(mine, target) {
  debugger
  var times = 0;
  var multiplier = 0;
  if (target == 'sulfur') {
    multiplier = 10;
  } else if (target == 'silver') {
    multiplier = 30;
  } else if (target == 'malachite' || 'gold') {
    multiplier = 50;
  } else if (target == 'diamond') {
    multiplier = 100;
  }

  for (var i = 0; i < mine.lenght; i++) {
    for (var j = 0; j < mine[i].lenght; j++) {
      if (mine[i][j] == target) {
        console.log(mine[i][j]);
        times++
      }
    }
  }
  return times * multiplier;
}








var tambangA = [
  ['gold', 'gold', 'gold', 'diamond', 'diamond', 'sulfur'],
  ['sulfur', 'sulfur', 'sulfur', 'diamond', 'diamond', 'gold']
]
console.log(salesAmount(tambangA, 'gold')); // 200

var tambangB = [
  ['gold', 'gold', 'gold', 'diamond', 'diamond', 'sulfur'],
  ['sulfur', 'sulfur', 'sulfur', 'diamond', 'diamond', 'gold'],
  ['sulfur', 'sulfur', 'sulfur', 'diamond', 'diamond', 'gold'],
]
console.log(salesAmount(tambangB, 'diamond')); // 600

var tambangC = [
  [],
  ['sulfur', 'sulfur', 'silver', 'gold'],
  ['gold', 'diamond']
]
console.log(salesAmount(tambangC, 'sulfur')) // 20
