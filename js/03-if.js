/* IF STATEMENT

IF STATEMENT:
logikos sablonai
if () {}
if () {} else {}
if () {} else if {}
if () {} else if {} ...  else if {}
if () {} else if {} ...  else if {} else {}

Palyginimo operatoriai  
    - visi: >, <, >=, <=, ==, !=, ===, !==, !
    - naudotini: >, <, >=, <=, ===, !==, !
    - nenaudotini: ==, !=   (nes nera tikrinamas reiksmiu tipas)
    loginiai operatoriai: &&, ||
*/

const a = 7;
const b = 4;

if (a > b) {
const ats = `${a} yra daugiau uz ${b}`;
    console.log(ats)
}

console.log('---------------');

const c = 7;
const d = 4;

if (c < d) {
    const cdMaziau = `${c} yra maziau uz ${d}`;
    console.log(cdMaziau);
} else {
    const cdNeMaziau = `${c} yra Ne maziau uz ${d}`;
    console.log(cdNeMaziau);
}

console.log('------------------');

const e = '89';
const f = 89;

if (e !== f){
    console.log('TAIP');
} else {
    console.log('NE');
}

console.log('-----------------');

const cookiesAgreed = false;

if (cookiesAgreed === false){
    console.log('Ismetame cookies sutikimo bloka...1');
}

if (!cookiesAgreed){
    console.log('Ismetame cookies sutikimo bloka...2');
}

console.log('-------------------');

const userLoggedIn = true;

if (userLoggedIn) {
    console.log('Log out');
}
else {
    console.log('Log in');
} 

console.log('------------------');

const pomidoras = 'pomidoras';
const pomidoroIlgis = pomidoras.length;

console.log(pomidoroIlgis);



console.log('----------------------');

const akys = 'Melynos';

if (akys === "Melynos") {
    console.log('Oj kokios grazios');
} else if  (akys === 'Zalios'){
    console.log('Linksmi');
} else if (akys === 'Rudos'){
    console.log('Melagiukai');
} else if (akys === 'Pilkos') {
    console.log('Nieko gero');
} else if (akys === 'Raudonos'){
    console.log(👩‍💻👩‍💻);
} else {
    console.log('Tavo akys puikios😅');
}


if (akys === "Melynos") {
    console.log('Oj kokios grazios');
} else {
    if (akys === 'Zalios') {
        console.log('Linkmsi😹');
    } else {
        if (akys === 'Rudos') {
            console.log('Melagiukai');
        } else {
              if (akys === 'Pilkos') { 
              console.log('Nieko gero✌');
           } else {
               if (akys === 'Raudonos') {
                   console.log('👩‍💻👩‍💻👩‍💻');
               } else {
                   console.log('Tavo akys puikios😅');
               }
            }
        }      
    } 
} 

console.log('-----------------');

if (akys === 'Melynos') {
    console.log('Oj kokios grazios');
}

if (akys === 'Zalios') {
    console.log('Linkmsi😹');
}

if (akys === 'Rudos') {
    console.log('Melagiukai');
}

if (akys === 'Pilkos') {
    console.log('Nieko gero✌');
}

if (akys === 'Raudonos') {
    console.log('Tavo akys puikios😅');
}

if (akys !== 'Melynos' &&
    akys !== 'Zalios' &&
    akys !== 'Rudos' &&
    akys !== 'Pilkos' &&
    akys !== 'Raudonos') {
    console.log('Tavo akys puikios😅');
}

if (akys === 'Melynos' ||
    akys === 'Zalios' ||
    akys === 'Rudos' ||
    akys === 'Pilkos' ||
    akys === 'Raudonos') {
    console.log('Tu turi vienas is man zinomu akiu spalvu!');
}