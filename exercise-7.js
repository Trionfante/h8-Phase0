//looping asterisk

var rows1 = 5
var rows2 = 5
var rows3 = 5
var starA = ''
// var starB = ''

// 1. Menyusun Barisan Bintang
    while (rows1 > 0){
        rows1--;
        console.log('*');
    }

// End of Barisan Bintang

    console.log();

// 2. Menyusun Barisan Bintang dengan Nested Looping

    while (rows2 > 0){
        rows2--;
        for (count = 5; count > 0; count--){
            starA += '*';
        }
        console.log(starA)
        starA = '';
    }

// End of Barisan dengan Nested Looping

    console.log();

// 3. Menyusun Barisan Tangga Bintang dengan Nested Looping

    while (rows3 > 0){
        rows3--;
        //console.log(starb+='b');
        for (count = 1; count > 0; count--){
        console.log(starA+='*');
        }
    }

// End of Barisan Tangga Bintang