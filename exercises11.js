// [EXERCISES 11] BALIK KATA

function balikKata(kata) {
    // you can only write your code here!
    var panjangKata = kata.length - 1;
    var output = '';
    for(i = 0; panjangKata >= i; panjangKata--){
    output += kata[panjangKata];
    }
    return output;
}

  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS