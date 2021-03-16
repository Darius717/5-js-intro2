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

for (i = 0; i < text2.length; i++) {
        reverse2 += text2[text.length - 1 - i];
}

console.log(text2, '->', reverse2 );



console.log('--------------');

const text3 = 'abcdefg'
let reverse3 = '';

for (i = 0; i < text3.length; i++) {
        reverse3 = text3[i] + reverse3;
}

console.log(text3, '->', reverse3 );