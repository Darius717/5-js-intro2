/*

SWITCH STATEMENT

switch () {case, break, default}



*/

const animal = 'cat'

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
        console.log('ne tas gyvunas');
        break;
}

console.log('---------------');

const diena = 1;

switch (diena) {
    case 1:
        console.log('pirm');
        break;
    case 2:
        console.log('antr');
        break
    case 3:
        console.log('trec');
        break
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

//if (day === 1 || day === 2 )

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
            console.log('Lygines dienos');
}

console.log('-----------------');



const process = 6;

switch (process) {
    case 1:
        console.log('Paimti puodeli');
    case 2:
        console.log('Isideti arbatos');
    case 3:
        console.log('Isisdeti saldikli');
    case 4:
        console.log('Ipilti vandens');
    case 5:
        console.log('issimaisyti');
    case 6:
        console.log('gerti');
        break;
    default:
            console.log('Ane, viskas padaryta');

}