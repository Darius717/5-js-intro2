function pazymiuVidurkis(vardas, pazymiai) {
    let suma = 0;
    
    for (let i = 0; i < pazymiai.length; i++ ) {
        suma += pazymiai[i];
    }
    const average = suma / pazymiai.length;
    
    // Vardenis: pazymiu vidurkis yra 6.
    console.log(`${vardas}: pazymiu vidrkis yra ${average}.`);
}

// pazymiuVidurkis('Petriukas', [10, 2, 8, 4]);
// pazymiuVidurkis('Maryte', [10, 8, 6, 8]);
// pazymiuVidurkis('Alfonsas', [10, 8, 10, 8]);

console.log('----------------');

const mokykla = [
    ['Petriukas', [10, 2, 8, 4]],
    ['Maryte', [10, 8, 6, 8]],
    ['Alfonsas', [10, 8, 10, 8]],
];
// console.log(mokykla);

for (let i = 0; i < mokykla.length; i++) {
    console.log('------------');
    const mokinys = mokykla[i];
    const name = mokinys[0];
    const marks = mokinys[1];
    
    pazymiuVidurkis(name, marks);
    pazymiuVidurkis(mokykla[i][0], mokykla[i][1])
    
}