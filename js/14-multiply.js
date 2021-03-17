function daugyba (a, b) {
    // parametru validacija
    // jeigu, a yra ne skaicius grazinti klaidos pranesima
    // jeigu, b yra ne skaicius grazinti klaidos pranesima
    if ( typeof a !== 'number' ) {
        return 'Pirmasis parametras turi buti skaiciaus tipo'
    }

    if ( isNaN (a) || a === -Infinity || a === Infinity ) {
        return `Pirmasis parametras turi buti normalus skaiciaus tipo ir negali buti ${a}`
    }

    if ( typeof b !== 'number' ) {
        return 'Antras parametras turi buti skaiciaus tipo'
    }

    if ( isNaN(b) || b === Infinity || b === -Infinity) {
        return `Antras parametras turi buti normalus skaiciaus tipo ir negali buti ${b}`
    }
    

    //logika
    const rez = a * b;

    //rezultato grazinimas
    return rez;
}
console.log(daugyba('trys', 'penki'), '->', 15);
console.log(daugyba(3, 'penki'), '->', 15);
console.log(daugyba(true, false), '->', 15);
console.log(daugyba(3, false), '->', 15);
console.log(daugyba(3, 5), '->', 15);
console.log('-------------------');
console.log(daugyba(3, [2]), '->', 0);
console.log(daugyba([2],[3]), '->', 0);
console.log(daugyba([2], 5), '->', 0);
console.log(daugyba(-5, 5), '->', 0);
console.log(daugyba(-5, 5), '->', 0);


console.log(daugyba(4, 5), '->', 20);
console.log(daugyba(44, 5), '->', 220);
console.log(daugyba(-44, -55), '->', 2420);
console.log(daugyba(44, 55), '->', -2420);
console.log(daugyba(44, 0), '->', 0);
console.log(daugyba(-5, 5), '->', 0);

console.log(daugyba(NaN, 3), '->', -2420);
console.log(daugyba(3, NaN ), '->', 0);
console.log(daugyba(NaN, NaN), '->', 0);

console.log(daugyba(Infinity, 3), '->', -2420);
console.log(daugyba(3, Infinity ), '->', 0);
console.log(daugyba(Infinity, Infinity), '->', 0);

console.log(daugyba(-Infinity, 3), '->', -2420);
console.log(daugyba(3, -Infinity ), '->', 0);
console.log(daugyba(-Infinity, -Infinity), '->', 0);


console.log('----------------');


function daugyba2 (a, b, c) {
    const rez1 = a * b;
    const rez2 = c * b;
    const rez3 = c * a;
    return rez1;
}


console.log( daugyba2(4, 0, 5));
console.log( daugyba2(4, 5, 6));
console.log( daugyba2(7.3, 5.4, 4));
console.log( daugyba2(10, 50, 3));
console.log( daugyba2(77, 11, 4));
console.log( daugyba2(-5, 5, 7));