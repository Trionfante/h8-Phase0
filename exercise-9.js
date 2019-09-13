//function

// Tugas 1

    function shoutOut(){
        return 'Halo Function!'
    }

    console.log(shoutOut());

// End of Tugas 1

    console.log();

// Tugas 2

    function multiply(angka1,angka2){
        return angka1*angka2
    }

    var num1 = 5;
    var num2 = 6;

    var hasilKali = multiply(num1,num2);
    console.log(hasilKali);

// End of Tugas 2

    console.log();

// Tugas 3

    function sentence(name,hasilKali,address,hobby){
        return 'Nama saya '+ name + ' umur saya ' + age + ' tahun, alamat saya di ' + address + ', dan saya punyha hobby yaitu ' + hobby + '!'
    }

    var name = "Agus";
    var age = 30;
    var address = "Jln. Malioboro, Yogjakarta";
    var hobby = "gaming";

    var fullSentence = sentence(name,age,address,hobby);
    console.log(fullSentence);

// End of Tugas 3