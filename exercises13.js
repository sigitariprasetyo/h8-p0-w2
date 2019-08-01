function xo(str) {
  // you can only write your code here!
var x = '';
var o = '';
var hasil;

for(i = 0; i < str.length; i++){
    if(str[i] == 'x'){
        x += 'x';
    } else {
        o += '0';
    }
}
if(x.length === o.length){
    hasil = true;
} else {
    hasil = false;
}
return hasil;
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true