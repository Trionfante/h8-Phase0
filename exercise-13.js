//Logic Challenge 4: X and O

function xo(str) {
    var xcount = 0;
    var ocount = 0;
    for (var pos = 0; pos < str.length; pos++){
        if (str.charAt(pos) == 'o'){
            ocount += 1;
        }
        if (str.charAt(pos) == 'x'){
            xcount += 1;
        }
    }
    if (ocount == xcount){
        return true;
    } else {
        return false;
    }
}
  
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true

// End of Logic Challenge 4