
//[Exercises4] Mengenal penggunaan Conditional (Switch-Case)

var hari = 31;
var bulan = 2; //input bulan dengan angka 1 - 12
var tahun = 1993;

switch (bulan) {
    case 1: {
        if(hari > 31){
            console.log('Bulan januari hanya sampai 31')
        } else if (tahun <= 1000){
            console.log('Tahun mulai dari 1000')
        }else {
        console.log(hari + ' Januari ' + tahun);
        }
        break;
    }
    case 2: {
        if(hari > 29){
            console.log('Bulan februari hanya sampai 29')
        } else if (tahun <= 1000){
            console.log('Tahun mulai dari 1000')
        }else {
        console.log(hari + ' Februari ' + tahun);
        }
        break;
    }
    case 3: {
        if(hari > 31){
            console.log('Bulan maret hanya sampai 31')
        } else if (tahun <= 1000){
            console.log('Tahun mulai dari 1000')
        }else {
        console.log(hari + ' Maret ' + tahun);
        }
        break;
    }
    case 4: {
        if(hari > 30){
            console.log('Bulan april hanya sampai 30')
        } else if (tahun <= 1000){
            console.log('Tahun mulai dari 1000')
        }else {
        console.log(hari + ' April ' + tahun);
        }
        break;
    }
    case 5: {
        if(hari > 31){
            console.log('Bulan mei hanya sampai 31')
        } else if (tahun <= 1000){
            console.log('Tahun mulai dari 1000')
        }else {
        console.log(hari + ' Mei ' + tahun);
        }
        break;
    }
    case 6: {
        if(hari > 30){
            console.log('Bulan juni hanya sampai 30')
        } else if (tahun <= 1000){
            console.log('Tahun mulai dari 1000')
        }else {
        console.log(hari + ' Juni ' + tahun);
        }
        break;
    }
    case 7: {
        if(hari > 31){
            console.log('Bulan juli hanya sampai 31')
        } else if (tahun <= 1000){
            console.log('Tahun mulai dari 1000')
        }else {
        console.log(hari + ' Juli ' + tahun);
        }
        break;
    }
    case 8: {
        if(hari > 31){
            console.log('Bulan agustus hanya sampai 31')
        } else if (tahun <= 1000){
            console.log('Tahun mulai dari 1000')
        }else {
        console.log(hari + ' Agustus ' + tahun);
        }
        break;
    }
    case 9: {
        if(hari > 30){
            console.log('Bulan september hanya sampai 30')
        } else if (tahun <= 1000){
            console.log('Tahun mulai dari 1000')
        }else {
        console.log(hari + ' September ' + tahun);
        }
        break;
    }
    case 10: {
        if(hari > 31){
            console.log('Bulan oktober hanya sampai 31')
        } else if (tahun <= 1000){
            console.log('Tahun mulai dari 1000')
        }else {
        console.log(hari + ' Oktober ' + tahun);
        }
        break;
    }
    case 11: {
        if(hari > 30){
            console.log('Bulan november hanya sampai 30')
        } else if (tahun <= 1000){
            console.log('Tahun mulai dari 1000')
        }else {
        console.log(hari + ' November ' + tahun);
        }
        break;
    }
    case 12: {
        if(hari > 31){
            console.log('Bulan desember hanya sampai 31')
        } else if (tahun <= 1000){
            console.log('Tahun mulai dari 1000')
        }else {
        console.log(hari + ' Desember ' + tahun);
        }
        break;
    }
    default:  { console.log('Bukan angka untuk bulan!'); }
}