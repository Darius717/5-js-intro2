/*
JS galimi ciklai ir "cikliskos funkcijos/metodai"

(funkcijos)
- for
- for-in
- for-of
- while
- do-while

(metodai)
- foreach
- map
- filter
- reduce
- sort
*/

const list = [1, -5, 78, 2, 11, -14, 0, -3];

//FOR 
//break: nutraukia ciklo darba
//continue: eiti i sekancia ciko operacija, jei tokia yra

for (let i = 0; i < list.length; i++) {
    const item = list[i];
    if (item > 0) {
        continue;
    }
    console.log(item);
}
console.log('----2------');

//FOR-IN
// break: nutraukia ciklo darba
// continue: eiti seknacia ciklo iteracija, jei tokia yra

for (const i in list) {
    const item = list[i];
    if (item > 0) {
        continue;
    }
    console.log(i, item);
}

console.log('-------3-----------');

//FOR-OF
// break: nutraukia ciklo darba
// continue: eiti seknacia ciklo iteracija, jei tokia yra

for (const item of list) {
    if (item > 0) {
        continue;
    }
    console.log(item);
}
console.log('----4------');

//WHILE

let randomNumber = 0;
let randomNumberCount = 0;


while (randomNumber < 0.9) {
        randomNumber = Math.random();   // [0...1) tol kol...
        randomNumberCount++;
        console.log(randomNumberCount, randomNumber);
}

let i =0;
while (i < list.length) {
    const item = list[i];
    if (item < -10) {
        break;
    }
    console.log(item);
    i++
}

console.log('-------5--------');

//DO-WHILE
// break: nutraukia ciklo darba

let dwi = 0;

do {
    console.log(dwi);
    if (dwi > 2) {
       break; 
    }
    dwi++;
} while (dwi < 5)

console.log('-------6------');

// FOREACH

let FEsuma = 0;

list.forEach(n => FEsuma += n);
    console.log(FEsuma);
    


    const doubleList = [[1, 5], 15, [8, 99], -40, [-8, -7, 15, 4], [3]];
    let dlSuma = 0;
//doubleList.forEach(innerItem => innerItem.forEach(n => dlSuma += n));

doubleList.forEach(
        innerItem => typeof innerItem === 'number' 
        ? dlSuma += innerItem
        : innerItem.forEach(n => dlSuma += n)
);

console.log(dlSuma);

console.log('------7-------');

// MAP
//map() metodas perėjęs per duota sąrašą grąžina tokio pačio dydžio sąrašą, tik su pakeistomis reikšmėmis 

const mapList = [1, 2, 3, 4, 5, 6];
const forListSquare = [];

for (const num of mapList) {
    forListSquare.push(num * num);

}

console.log(forListSquare);

const mapListSquare = mapList.map(n => n * n);
console.log(mapListSquare);

console.log('-----8-----');


// uzdavinys: visi neigiami skaičiai turi būti konvertuoti į nulį
const pazymiai = [10, -8, 2, -6, 8, -2];

const konvertuotiPazymiai = pazymiai.map(n => n < 0 ? 0 : n);
console.log(pazymiai);
console.log(konvertuotiPazymiai);

console.log('----9------');

// dešimtainiai skaičiai į sveikuosius
const desimtainiai = [3.14, 5, 6.7, -14.7, -8, 0.001];

const sveikieji = desimtainiai.map(n => Math.round(n));
console.log(desimtainiai);
console.log(sveikieji);

console.log('----10-------');
// FILTER
// atrinkti tik tikrus pažymius t.y. [1...10]

const marks = [10, -8, 2, 3.14, -6, 7.5, 8, -2, 11, 55];

const filteredMarks = marks.filter(m => m >= 1 && m <=10 && m % 1 ===0);

console.log(marks);
console.log(filteredMarks);

console.log('----11-----');

// palikti žodžius iš didžiosios raidės

const dictionary = ['Labas', 'rytas', 'Lietuva', 'sakau', 'tau'];

const isDidziosios = dictionary.filter(word => word[0] === word[0].toUpperCase());

console.log(dictionary);
console.log(isDidziosios);

console.log('----12-----');

//REDUCE
//// eina per sarasa, paima visas reiksmes is eiles ir su jomis padaro viena bendra rezultata
// pvz.: jei turim pazymiu sarasa, tai eina per pazymius ir suskaiciuoja pazymiu suma

const petriukoPazymiai = [10, 2, 8, 6, 4];

let petriukoPazymiuSuma = 20;
petriukoPazymiai.forEach(p=> petriukoPazymiuSuma += p);
console.log(petriukoPazymiuSuma);

const reducePazymiai = petriukoPazymiai.reduce((total, paz) => total + paz, 0);
console.log(reducePazymiai);

// koks gausis tekstas, jei sujungsime visu zodziu pirmas raides

const dictionary2 = ['Labas', 'rytas', 'Lietuva', 'sakau', 'tau'];

const short = dictionary2.reduce((total, word) => total + word[0], '');
console.log(short);