/**
        For Loop (ciklas)

    for (){

    }

 */


const rytas = ['r', 'y', 't', 'a', 's'];

let zodis = '';
let abcIndex = 0;
 
zodis += rytas[abcIndex++];
zodis += rytas[abcIndex++];
zodis += rytas[abcIndex++];
zodis += rytas[abcIndex++];
zodis += rytas[abcIndex++];

console.log(zodis);

console.log('-------------');

for (let i = 0; i <= 5; i++) {
    console.log(i);
}

console.log('ciklo pabaiga');

for (let i = 3; i <= 7; i++) {
    console.log(i);
}

console.log('Ciklas uzsibaige');



console.log('--------------');

const abc = ['a', 'b', 'c', 'd'];

  for (let i = 0; i < abc.length; i++) {
    const raide = abc[i];
    console.log(raide);
}
console.log('--------------');

const zmones = ['Petras', 'Maryte', 'Jonas', 'Onute', 'Vakaris'];

  for (let i = 0; i < zmones.length; i++) {
    const asmuo = zmones[i];

    console.log(asmuo);
}

console.log('-------------');

const marks = [5, 7, 10, 4, 2, 10, 8];
let sum = 0;

for ( let i = 0; i < marks.length; i++) {       // Ėjimas per sąrašą
    const pazymys = marks[i];
        sum += pazymys;
}

const average = sum / marks.length;
console.log(sum, '/', marks.length, '=', average);

console.log('---------------');

const sakinys = 'Labas rytas';

for (i = 0; i < sakinys.length; i++) {
    const simbolis = sakinys[i];
    console.log(simbolis);
}