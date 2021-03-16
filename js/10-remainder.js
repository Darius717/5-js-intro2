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

const nuo = 1;
const iki = 9;
const daliklis = 2;
let kiekis = 0;

for (let i = nuo; i <= iki; i++) {
if (i, i % daliklis ===0){
    kiekis++;
    }
}

const ats = `Skaiciu intervale tarp ${nuo} ir ${iki}, besidalijančių be liekanos iš ${daliklis} yra ${kiekis} vienetai.`
console.log(ats);
