// conv minute to hour

function konversiMenit(menit) {
  var num = menit;
  var jam = (num / 60);
  var rjam = Math.floor(jam);
  var nmenit = (jam - rjam) * 60;
  var rmenit = Math.round(nmenit);
  //if (rmenit > 10){
    switch(rmenit){
      case 0:
        rmenit = '00';
        break;
      case 1:
        rmenit = '01';
        break;
      case 2:
        rmenit = '02';
        break;
      case 3:
        rmenit = '03';
        break;
      case 4:
        rmenit = '04';
        break;
      case 5:
        rmenit = '05';
        break;
      case 6:
        rmenit = '06';
        break;
      case 7:
        rmenit = '07';
        break;
      case 8:
        rmenit = '08';
        break;
      case 9:
        rmenit = '09';
        break;
    }
  //}
  return num + " minutes = " + rjam + ":" + rmenit;
  }
  
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00