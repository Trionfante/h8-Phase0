//logic string

function balikKata(kata) {
    var reverse ='';
    for (let i = kata.length-1;i>=0;i--){
        reverse = reverse + kata[i];
    }
    return reverse;
}
  
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS

  // extract 1 character using charAt(c); method