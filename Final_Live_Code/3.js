/* 

Setiap kali naik ojek online setelah sampai di tujuan, pada aplikasi kamu akan diminta untuk memberikan feedback.
Salah satu feedback yang diberi adalah dalam bentuk memberikan bintang.

Tugas kamu adalah membuat function countStar yang akan menghitung jumlah setiap bintang yang diterima oleh si abang ojol.

[INPUT]
[
  ['*', '*', '*', ' ', ' '],
  ['*', '*', '*', '*', ' '],
  ['*', '*', '*', ' ', ' '],
  ['*', '*', '*', '*', '*'],
  ['*', '*', ' ', ' ', ' '],
  ['*', '*', '*', ' ', ' '],
  ['*', '*', '*', '*', ' '],
  ['*', '*', ' ', ' ', ' '],
  ['*', '*', '*', ' ', ' '],
  ['*', '*', ' ', ' ', ' '],
  ['*', '*', '*', '*', '*'],
  ['*', '*', '*', '*', ' '],
]


[PROCESS]
bintang yang diterima
- bintang 5 ada 2
- bintang 4 ada 3
- bintang 3 ada 4
- bintang 2 ada 3
- bintang 1 tidak ada

[OUTPUT]
{
  '*****': 2,
  '****': 3,
  '***': 4,
  '**': 3,
  '*': 0,
}

*/


function countStar(stars) {
  var count = 0;
  var tally = [];
  var output = {
    '*****' : 0,
    '****' : 0,
    '***' : 0,
    '**' : 0,
    '*' : 0,
  };
  for (var i = 0; i < stars.length; i++) {
    for (var j = 0; j < stars[i].length; j++) {
      if (stars[i][j] == '*') {
        count += 1;
      }
    }
    tally.push(count);
    count = 0;
  }

  for (var i = 0; i < tally.length; i++) {
    if (tally[i] == 5) {
      output["*****"] += 1;
    } else if (tally[i] == 4) {
      output["****"] += 1;
    } else if (tally[i] == 3) {
      output["***"] += 1;
    } else if (tally[i] == 2) {
      output["**"] += 1;
    } else if (tally[i] == 1) {
      output["*"] += 1;
    }
  }
  return output;
}


console.log(countStar([
  ['*', '*', '*', ' ', ' '],
  ['*', '*', '*', '*', ' '],
  ['*', '*', '*', ' ', ' '],
  ['*', '*', '*', '*', '*'],
  ['*', '*', ' ', ' ', ' '],
  ['*', '*', '*', ' ', ' '],
  ['*', '*', '*', '*', ' '],
  ['*', '*', ' ', ' ', ' '],
  ['*', '*', '*', ' ', ' '],
  ['*', '*', ' ', ' ', ' '],
  ['*', '*', '*', '*', '*'],
  ['*', '*', '*', '*', ' '],
]));

/*
{
  '*****': 2,
  '****': 3,
  '***': 4,
  '**': 3,
  '*': 0,
}
 */