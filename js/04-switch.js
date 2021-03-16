/*

SWITCH STATEMENT

switch () {case, break, default}



*/

const animal = 'wolf'

switch (animal) {
    case "cat":
        console.log('Miau 😁');
        break;
    case 'wolf': 
        console.log('auuuuuuu');
        break; 
    case 'dog':
        console.log('au au au');
        break;  
    default:
        console.log('Ne tas gyvunas');
        break;
    }

console.log('--------------');

if (animal === 'cat') {
    console.log('Miau miau🐱');
} else if (animal === 'wolf') {
    console.log('auuuuuuuuuuuuu🐺');
} else {
            console.log('Nezinomas gyvnunas');
        }




console.log('---------------');

const diena = 3;

switch (diena) {
    case 1:
            console.log('pirmadienis');
            break;
    case 2:
            console.log('antradienis');
            break;
    case 3:
            console.log('treciadienis');
            break;
    case 4:
            console.log('ketvirtadienis');
            break;
    case 5:
            console.log('penktadienis');
            break;
    case 6:
            console.log('sestadienis');
            break;
    case 7:
            console.log('sekmadienis🎉🎊🥳');
            break;
        default:
        console.log('Nera tokios dienos savaiteje');
        break;
}

console.log('-----------------------');



switch (diena) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('Darbo diena');
        break;

    case 6:
    case 7:
        console.log('Savaitgalis');
        break;
    default:
            console.log('Nera tokios dienos');
}

console.log('-------------');

if (diena === 1 || diena === 2 || diena === 3 || diena === 4 || diena ===5) {
    console.log('Darbo diena😅');
} else if (diena === 6 || diena === 7) {
    console.log('Savaitgalis😎');
} else {
    console.log('Tokios dienos zemeje nera');
}


console.log('-----------');

switch (diena) {
    case 1:
    case 3:
    case 5:
    case 7:
        console.log('Nelygines dienos');
        break;
                  
    case 2:
    case 4:
    case 6:
        console.log('Lygines dienos');
        break;
    default:
            console.log('Tokios dienos nera zemeje');
}

console.log('-----------------');



const process = 6;

switch (process) {
    case 1:
        console.log('Paimti puodeli');
    case 2:
        console.log('Isideti arbatos');
    case 3:
        console.log('Isideti medaus');
    case 4:
        console.log('Ipilti vandens');
    case 5:
        console.log('issimaisyti');
    case 6:
        console.log('megautis arbata');
        break;
    default:
            console.log('Laikas gerti arbata');

}