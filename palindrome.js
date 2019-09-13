function check(number){
    
}

var genInit = 33;
var result = check(genInit);
console.log(result);

if (result == false){
    while (result == false){
        genInit++
        result=check(genInit);
    }
    console.log(genInit+' is true');
} else if (result == true){
    result = false;
    while (result == false){
        genInit++;
        result=check(genInit);
    }
    console.log(genInit+' is the next true');
}