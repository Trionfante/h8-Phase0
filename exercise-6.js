//looping

    // Melakukan Looping Menggunakan while
    
    var i = 0;
    
    console.log(" LOOPING PERTAMA ");
    while (i < 20){
        console.log((i+1) + ' - I love coding');
        i++;
    }

    var i=20;
    
    console.log(" LOOPING KEDUA ");
    while (i > 0){
        console.log(i + ' - I will become fullstack developer');
        i -= 2;
    }

    // End of Menggunakan while

    console.log();

    // Melakukan Looping Menggunakan for
    
    console.log(' LOOPING PERTAMA ');
    for (var i = 0; i < 20; i++){
        console.log((i+1) + ' - I love coding');
    }

    console.log(' LOOPING KEDUA ');
    for (var i = 20; i > 0; i--){
        console.log(i + ' - I will become fullstack developer');
    }

    // End of Menggunakan for

    console.log();

    // Angka Ganjil dan Genap

    for (i = 1; i < 101; i++){
        if (i % 2 == 0){
            console.log(i, 'genap');
        } else {
            console.log(i, 'ganjil');
        }
    }

    console.log();

    for (i = 1; i < 101; i+=2){
        if (i % 3 == 0){
            console.log(i, 'kelipatan 3');
        } else {
            console.log(i);
        }
    }

    console.log();

    for (i = 1; i < 101; i+=5){
        if (i % 6 == 0){
            console.log(i, 'kelipatan 6');
        } else {
            console.log(i);
        }
    }

    console.log();

    for (i = 1; i < 101; i+=9){
        if (i % 10 == 0){
            console.log(i, 'kelipatan 10');
        } else {
            console.log(i);
        }
    }
    
    // End of Ganjil dan Genap