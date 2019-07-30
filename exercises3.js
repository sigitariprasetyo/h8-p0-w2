
//[Exercises3] Mengenal penggunaan Conditional (if-else)

var nama = 'sigit'
var peran = 'penyihir' //pilihan peran : ksatria, tabib, penyihir

if(nama === '' && peran === '' ){
    console.log('Nama harus di isi!')
} else if(nama === 'sigit' && peran === ''){
    console.log('Hallo ' + nama + ', Pilih peranmu untuk memulai game!')
} else if (nama === 'sigit' && peran === 'ksatria'){
    console.log('Selamat datang di Dunia Proxytia, ' + nama)
    console.log('Halo Ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!')
} else if (nama === 'sigit' && peran === 'tabib'){
    console.log('Selamat datang di Dunia Proxytia, ' + nama)
    console.log('Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka.')
}else if (nama === 'sigit' && peran === 'penyihir'){
    console.log('Selamat datang di Dunia Proxytia, ' + nama)
    console.log('Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!')
}




