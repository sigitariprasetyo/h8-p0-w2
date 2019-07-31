// [EXERCISES 10] BANDINGKAN ANGKA

function bandingkanAngka(angka1, angka2) {
    var output;
    if(angka2 > angka1){
        output = 'True';
    } else if (angka2 < angka1 ){
        output = 'False';
    } else {
        output = '-1';
    }
    return output;
}

  // TEST CASES
  console.log(bandingkanAngka(5, 8)); // true
  console.log(bandingkanAngka(5, 3)); // false
  console.log(bandingkanAngka(4, 4)); // -1
  console.log(bandingkanAngka(3, 3)); // -1
  console.log(bandingkanAngka(17, 2)); // false