/*

  Seorang user spotify ingin mengetahui lagu apa saja yang dia putar selama seminggu terakhir diurutkan dari paling jarang diputar

  Tugas kamu adalah membuat function sortPlaylist yang menerima inputan sebuah array satu dimensi berisi data lagu. Output dari function tersebut adalah array 2 dimensi yang menampilkan judul lagu dan jumlah pemutaran terurut dari jumlah pemutaran yang paling sedikit.

  INPUT:
    ['Senorita', 'Senorita', 'I Love You 3000', 'A Whole New World', 'Senorita', 'I Love You 3000', 'Senorita']

  OUTPUT:
    [ [ 'A Whole New World', 1 ], [ 'I Love You 3000', 2 ], [ 'Senorita', 4 ] ]

  RULES:
   - DILARANG MENGGUNAKAN BUILT IN FUNCTION APAPUN KECUALI .push()
*/

function sortPlaylist(playlist) {
  var contain = [];
  var count = contain;

  for (var i = 0; i < playlist.length; i++) {
    // for (var j = 0; j < playlist.length; j++) {
      // if (playlist[i] != contain[i]) {
        contain.push(playlist[i]);
      // }
    // }
  }

  for (var i = 0; i < contain.length; i++) {
    for (var j = 0; j < playlist.length; j++) {
      // console.log(contain[i], contain[j]);
      if (contain[i] == contain[j]) {
        // count[i][1] += 1;
        // console.log(contain[i]);
      }
      // console.log(count);
    }
  }
  return count;
}

console.log(sortPlaylist(['Senorita', 'Senorita', 'I Love You 3000', 'A Whole New World', 'Senorita', 'I Love You 3000', 'Senorita']));

//[ [ 'A Whole New World', 1 ], [ 'I Love You 3000', 2 ], [ 'Senorita', 4 ] ]

// console.log(sortPlaylist('Donna Donna', 'Top of The World', 'Donna Donna', 'Top of The World', 'Top of The World', 'Location Unknown', 'Location Unknown'));

// //[ [ 'Donna Donna', 2 ], [ 'Location Unknown', 2 ], [ 'Top of The World', 3 ] ]

// console.log(sortPlaylist([])); // []
