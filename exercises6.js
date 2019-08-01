// [EXERCISES6] BERLATIH PERULANGAN - LOOPING

// No.1
console.log('NO.1');

// Looping Pertama
var i = 1;

console.log(' LOOPING PERTAMA');
while(i <= 20){
    if(i%2 == 0){
        console.log(i + ' - I love coding');
    }
    i++;
}

// Looping Kedua
var i = 20;

console.log(' LOOPING KEDUA');
while(i > 0){
    if(i%2 == 0){
        console.log(i + ' - I love coding');
    }
    i--;
}


// No.2
console.log('NO.2');

// Looping Pertama
console.log(' LOOPING PERTAMA');
for(var i = 1; i <= 20; i++){
    console.log(i + ' - I love coding');
}

// Looping Kedua
console.log(' LOOPING KEDUA')
for(var i = 20; i > 0; i--){
    console.log(i + ' - I will become fullstack developer');
}

// No.3
console.log('NO.3');

// Angka Ganjil Genap
for(var counter = 1; counter <= 100; counter++){
    if(counter % 2 == 0){
        console.log('GENAP');
    } else {
        console.log('GANJIL');
    }
}

// Pertambahan 2 keliapatan 3
for(var counter = 1; counter <= 100; counter += 2){
    if(counter % 3 == 0){
        console.log(counter + ' adl kelipatan 3');
    } else {
        console.log();
    }
}

// Pertambahan 5 kelipatan 6
for(var counter = 1; counter <= 100; counter += 5){
    if(counter % 6 == 0){
        console.log(counter + ' adl kelipatan 6');
    } else {
        console.log();
    }
}

// Pertambahan 9 kelipatan 10
for(var counter = 1; counter <= 100; counter += 9){
    if(counter % 10 == 0){
        console.log(counter + ' adl kelipatan 10');
    } else {
        console.log();
    }
}