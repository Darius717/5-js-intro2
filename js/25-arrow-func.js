//Iprasta
function suma(a, b){
    return a+b;

}

const atsSuma = suma(8, 5);
console.log(atsSuma);

console.log('--------------------');
//Bevardes funcijos priskirmas
const atimtis = function (a, b){
    return a - b;

}

const atsAtimits = atimtis(8, 5);
console.log(atsAtimits);

console.log('--------------------');

// arrow 
const daugyba =  (a, b) => {
    return a * b;

}

const atsDaugyba = daugyba(8, 5);
console.log(atsDaugyba);

console.log('-------------');

// arrow 
//jei logika turi viena procedura
const dalyba =  (a, b) => a / b;


const atsDalyba = dalyba(8, 5);
console.log(atsDalyba);

console.log('------------------');
// arrow 
//jei logika turi viena procedura
//jei parametru yra tik vienas, tai galima nerasyti paprastuju skliaustu ()
const kvadratu =  a => a * a;


const atsKvadratu = kvadratu(8, 5);
console.log(atsKvadratu);

console.log('-------------------');

const vardas = 'Pedro';

const pirmaRaide = name => name[0];
const paskutineRaide = name => name[name.length - 1];


const  raide = pirmaRaide(vardas);
const  paskutine = paskutineRaide(vardas);

console.log(raide);
console.log(paskutine);



