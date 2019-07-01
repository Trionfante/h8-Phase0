//string

var word = "JavaScript";
var second = "is";
var third = "awesome";
var fourth = "and";
var fifth = "I";
var sixth = "love";
var seventh = "it!";

console.log(word + " " + second + " " + third + " " + fourth + " " + fifth + " " + sixth + " " + seventh);

var word = 'wow JavaScript is so cool';
var firstWord = word[0] + word[1] + word[2];
var secondWord = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13];
var thirdWord = word[15] + word[16];
var fourthWord = word[18] + word[19];
var fifthWord = word[21] + word[22] + word[23] + word[24];

console.log(firstWord);
console.log(secondWord);
console.log(thirdWord);
console.log(fourthWord);
console.log(fifthWord);

var firstWord2 = word.substring(0,3);
var secondWord2 = word.substring(4,14);
var thirdWord2 = word.substring(15,17);
var fourthWord2 = word.substring(18,20);
var fifthWord2 = word.substring(21,25);
var firstWordL = firstWord2.length;
var secondWordL = secondWord2.length;
var thirdWordL = thirdWord2.length;
var fourthWordL = fourthWord2.length;
var fifthWordL = fifthWord2.length;

console.log(firstWord2 + ", " + firstWordL);
console.log(secondWord2 + ", " + secondWordL);
console.log(thirdWord2 + ", " + thirdWordL);
console.log(fourthWord2 + ", " + fourthWordL);
console.log(fifthWord2 + ", " + fifthWordL);