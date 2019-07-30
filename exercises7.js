// [EXERCISES7] PERULANGAN - PLAY WITH ASTERIXS

// No.1
// Menyusun barisan bintang
var rows1 = 5;

for(var i = 1; i <= rows1; i++){
    console.log('*');
}


// No.2
// menyusun barisan bintang dengan nested looping
var rows2 = 5;
var bintang = '';

for(var i = 0; i < rows2; i++){
    for(var j = 0; j < rows2; j++){
        bintang += '*';  
    }
    bintang += ('\n');
}
console.log(bintang);


// No.3
// Menyusun barisan tangga bintang dengan nested looping
var rows3 = 5;
var bintang3 = '';

for(var i = 0; i < rows3; i++){
    for(var j = 0; j <= i; j++){
        bintang3 += '*';
    }
    bintang3 += ('\n');
}
console.log(bintang3);


