/*

Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):

ATS:
Intervale nuo 0 iki 4 suma yra 10.

a. 0 - 0
b. 0 - 4
c. 0 - 100
d. 574 - 815
e. -50 - 50
f. -70 - 30

*/

const nuo = 0;
const iki = 4;

let sum = 0;

if (nuo <= iki){

for (let i = nuo; i <= iki; i++) {
    sum +=i;
    } 
} else {
   for (let i = iki; i <= nuo; i++) {
        sum +=i;
}
}

const ats =`Suma nuo' ${nuo} 'iki' ${iki} yra ${sum}`

console.log(ats);

