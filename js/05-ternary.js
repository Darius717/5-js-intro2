/*
Ternary Operator: ? (klaustukas)
palyginimas ? ar daryti jei tenkinama logika : ka daryti jei logikos netenkinama

palyginimas ? true :

*/

const a = 5;
const b = 7;

let ats = '';

if (a > b) {
    ats = 'daugiau'
} else {
    ats = 'ne daugiau'
}

console.log(ats);

const c = 6;
const d = 5;

const ats2 = c > d ? 'daugiau' : 'nedaugiau'; // inline if

console.log(ats2);
 




const  pazymiai = [7, 10, 7];

const suma = pazymiai[0] + pazymiai[1] +pazymiai[2];

const vidurkis = suma / pazymiai.length;

console.log(vidurkis);