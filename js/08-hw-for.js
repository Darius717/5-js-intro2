/*

Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):

ATS:
Intervale nuo 0

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


console.log;




/*
3. Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7
atskirai:
a. 0 - 11
b. 8 - 31
c. -18 - 18
d. rezultatą pateikti tokiu formatu:
i. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
ii. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
iii. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.

*/
/*
const a = 0;
const b = 11;
const c =3;

let suma = 0;

for (i = a; b + c; i++) {
   suma +=i;


const ats2 =`Suma nuo' ${a} 'iki' ${b} yra ${suma}`
console.log(ats2)

*/ 