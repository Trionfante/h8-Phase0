//function

function shoutOut(){
    return 'Halo Function!'
}

console.log(shoutOut());
console.log('\n');

function multiply(angka1,angka2){
    return angka1*angka2
}

var num1 = 5;
var num2 = 6;

var hasilKali = multiply(num1,num2);
console.log(hasilKali);
console.log('\n');

function sentence(name,hasilKali,address,hobby){
    return 'nama '+name+ ' umur ' +hasilKali+ ' alamat ' +address+ ' hobby ' +hobby
}

var name = "Agus";
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = sentence(name,hasilKali,address,hobby);
console.log(fullSentence);