// Logic Challenge 3: Konversi Menit

// Try #1
  function konversiMenit(menit){
    var num = menit;
    var jam = (num / 60);
    var rjam = Math.floor(jam);
    var nmenit = (jam - rjam) * 60;
    var rmenit = Math.round(nmenit);
    
    var omenit = ''
    
    if (rmenit < 10){
      omenit += '0' + rmenit;
    } else omenit = rmenit;

    return rjam + ":" + omenit;
  }

// End of Try #1

// Try #2
  function timeConvert(min){
    if (min <= 10){
      return "0:" + "0" + min;
    } else if (min <= 60){
      return "0:" + min;
    } else {
      var check = min % 60;
      if (check <= 10){
        return Math.floor(min / 60) + ":" + '0' + check;
      } else {
        return Math.floor(min / 60) + ":" + check;
      }
    }
 }

// End of Try #2

// Try #3
  function timeConvert2(min){
    var jam = Math.floor(min / 60);
    var check = min % 60;
    if (check <= 10){
      check = '0' + check;
    }
    return jam + ':' + check;
  }

// End of Try #3

console.log('Try 1');

  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00

console.log('\nTry 2');

  console.log(timeConvert(63)); // 1:03
  console.log(timeConvert(124)); // 2:04
  console.log(timeConvert(3)); // 0:53
  console.log(timeConvert(88)); // 1:28
  console.log(timeConvert(120)); // 2:00

console.log('\nTry 3');
  
  console.log(timeConvert2(63)); // 1:03
  console.log(timeConvert2(124)); // 2:04
  console.log(timeConvert2(3)); // 0:53
  console.log(timeConvert2(88)); // 1:28
  console.log(timeConvert2(120)); // 2:00