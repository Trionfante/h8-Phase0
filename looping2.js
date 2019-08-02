//looping

for (i = 1; i < 101; i++){
    if (i % 2 == 0){
        console.log(i, 'genap');
    } else {
        console.log(i, 'ganjil');
    }
}
console.log('\n');
for (i = 1; i < 101; i+=2){
    if (i % 3 == 0){
        console.log(i + ' kelipatan 3');
    } else {
        console.log(i);
    }
}
console.log('\n');console.log('\n');console.log('\n');
for (i = 1; i < 101; i+=5){
    if (i % 6 == 0){
        console.log(i + ' kelipatan 6');
    } else {
        console.log(i);
    }
}
console.log('\n');console.log('\n');console.log('\n');
for (i = 1; i < 101; i+=9){
    if (i % 10 == 0){
        console.log(i + ' kelipatan 10');
    } else {
        console.log(i);
    }
}