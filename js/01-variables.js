const a = 'Labas😜'
console.log(a);
console.log("Kai diena");
console.log('Graži Lietuva');
console.log(123579);
console.log('Mano', 'Vardas', 'yra');
console.log('Mano Vardas yra');

console.log('--------------------');

/* Kintamuju INICIAVIMO BUDAI:
    const - kintamasis, kurio reiksmes negalime is naujo priskirti*
    let - kintamasis, kurio reiksmes gali buti priskirta kiek norite kartu (is naujo)
    var - esant galimybe ⚠⚠⚠⚠⚠NENAUDOTI⚠⚠⚠⚠⚠!!!!   

    * - yra papildomu salugu su kompleksiniais kintamaisiais

*/

let vardas = 'Vakaris';
console.log(vardas);

const pasisveikinimas = 'Labas dienas - Lietuva 🟨🟩🟥';
console.log(pasisveikinimas);

const pirmasSkaicius = 7;
const antrasSkaicius = 77;
console.log();
const suma = pirmasSkaicius + antrasSkaicius;

console.log(pirmasSkaicius);
console.log(antrasSkaicius);
console.log('Viso:', suma);

console.log(suma + pirmasSkaicius + antrasSkaicius);
console.log(suma, '+', pirmasSkaicius, '+', antrasSkaicius,);

const mathText = pirmasSkaicius + ' + ' + antrasSkaicius + ' = ' + suma;
console.log('Viso:', mathText);

console.log('---------------------');

const petrasName = 'Petras';
const age  ='99';

// Petras age is 99.

const petrasAge = petrasName + ' age is ' + age + '.';
console.log(petrasAge);


console.log('---------------------');

// sarasa (array)
const pazymiai = [5, 5, 8, 9, 10, 6];
console.log(pazymiai);


const pirmasPazymys = pazymiai [0];
console.log(pirmasPazymys);

const antrasPazymys = pazymiai [1];
console.log(antrasPazymys);

const treciasPazymys = pazymiai [2];
console.log(treciasPazymys);

const ketvirtasPazymys = pazymiai [3];
console.log(ketvirtasPazymys);

const penktasPazymys = pazymiai [4];
console.log(penktasPazymys);

console.log(pazymiai);


const abc = ["a", "l", "p", "f", 'd', 'g',];
console.log(abc);

//Is mums zinomos siu raidziu abeceles paskutine yra "f".

const abcIlgis = abc.length;
const paskutineRaidesPozicija = abcIlgis - 1;
const paskutineRaide = abc [paskutineRaidesPozicija];

const abcatsakymas = 'Is mums zinomos ' + abcIlgis + ' raidziu abeceles paskutine yra "' + paskutineRaide + '".';
console.log(abcatsakymas); 