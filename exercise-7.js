//looping asterisk

var rows1 = 5
var rows2 = 5
var rows3 = 5
var starA = ''
// var starB = ''

while (rows1 > 0){
    rows1--;
    console.log('*');
}

console.log();

while (rows2 > 0){
    rows2--;
    for (count = 5; count > 0; count--){
        starA += '*';
    }
    console.log(starA)
    starA = '';
}

console.log();

while (rows3 > 0){
    rows3--;
    //console.log(starb+='b');
    for (count = 1; count > 0; count--){
    console.log(starA+='*');
    }
}