/*
2. panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
a. pvz.: “abcdef” -> “fedcba”

*/

const text = 'abcdefg'
let reverse = '';

for (i = 0; i < text.length; i++) {
    console.log(i, text[i]);
    reverse += text[i];
}

console.log(text, '->', reverse );



console.log('------------');

const text2 = 'abcdefg'
let reverse2 = '';

for ( let i = text.length - 1; i >= 0; i--) {
        console.log(i, text[i]);
        reverse2 += text2[i];
}

console.log(text2, '->', reverse2 );



console.log('--------------');

const text3 = 'abcdefg'
let reverse3 = '';

for (let i = text3.length; i > 0; i--) {
        console.log(i, text3[i - 1]);
        reverse3 += text3[i -1];
}

console.log(text3, '->', reverse3 );

console.log('---------------');

const text4 = 'abcdefg'
let reverse4 = '';

for (i = 0; i < text4.length; i++) {
        reverse4 += text4[text4.length - 1 - i];
}

console.log(text4, '->', reverse4 );

console.log('------------');

const text5 = 'abcdefg'
let reverse5 = '';

for (i = 0; i < text5.length; i++) {
        reverse5 = text5[i] + reverse5;
}

console.log(text5, '->', reverse5 );

console.log('------------');

function reverseString (text) {
    let reverse = '';

    for (let i = 0; i < text.length; i++) {
            reverse = text[i] + reverse;
    }
        console.log(text, '->', reverse);
}
 const pirmasZodis = 'Labas rytas';
 reverseString(pirmasZodis);

 reverseString('Lietuva');
 reverseString('sedek uzu kedes');
 reverseString('sula')