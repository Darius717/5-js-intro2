/*
JS galimi ciklais ir "cikiskos funkcijos/netodai"

- for
- for-in
- for-of
- while
- do-while
- foreach
*/

const list = [1, -5, 78, 2, 11, -14, 0, -3];

//FOR 
//break: nutraukia ciklo darba
//continue: eiti i sekancia ciko operacija, jei tokia yra

for (let i = 0; i < list.length; i++); {
    const item = list[i];
    if (item > 0) {
        continue;
    }
    console.log(item);
}


//FOR-IN

for (const i in list) {
    const item = list[i];
    if (item > 0) {
        continue;
    }
    console.log(i, item);
}

//FOR-OF

for (const item of list) {
    if (item > 0) {
        continue;
    }
    console.log(item);
}
console.clear();

//WHILE

let randomNumber = 0;
let randomNumberCount = 0;


while (randomNumber < 0.9) {
        randomNumber = Math.random();   // [0...1) tol kol...
        randomNumberCount++;
        console.log(randomNumber, randomNumber);
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

//DO-WHILE

let dwi = 0;

do {
    console.log(dwi);
    if (dwi > 2) {
       break; 
    }
    dwi++;
} while (dwi < 5)