// conv minute to hour

function konversiMenit(menit) {
  var num = menit;
  var jam = (num / 60);
  var rjam = Math.floor(jam);
  var nmenit = (jam - rjam) * 60;
  var rmenit = Math.round(nmenit);
  
  var omenit = ''
  if (rmenit < 10){
    omenit += '0' + rmenit;
  } else omenit = rmenit;

  return num + " minutes = " + rjam + ":" + omenit;
  }
  
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00