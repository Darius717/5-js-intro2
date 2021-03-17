function daugyba (a, b) {
        // parametru validacija
    if ( typeof a !== 'number' ) {
        return 'Pirmasis parametras turi buti skaiciaus tipo'
       }
    // jeigu, a yra ne skaicius grazinti klaidos pranesima
    
    //if ( isNaN (a) || a === -Infinity || a === Infinity ) {
        //    return `Pirmasis parametras turi buti normalus skaiciaus tipo ir negali buti ${a}`
        //}
        
        //if ('' + a === 'NaN' || Math.abs(a) === Infinity ) {
            //     return `Pirmasis parametras turi buti normalus skaiciaus tipo ir negali buti ${a}`
            // }
            
        if (!isFinite(a) ) {
                return `Pirmasis parametras turi buti normalus skaiciaus tipo ir negali buti ${a}`;
            }
    // jeigu, b yra ne skaicius grazinti klaidos pranesima

    if ( typeof b !== 'number' ) {
        return 'Antras parametras turi buti skaiciaus tipo';
    }

    //if ( isNaN(b) || b === Infinity || b === -Infinity) {
    //    return `Antras parametras turi buti normalus skaiciaus tipo ir negali buti ${b}`
    //}
    
    if (!isFinite(a) ) {
        return `Pirmasis parametras turi buti normalus skaiciaus tipo ir negali buti ${a}`;
    }

    //logika
    const rez = a * b;

    //rezultato grazinimas
    return rez;
}
console.log(daugyba('trys', 'penki'));
console.log(daugyba(3, 'penki'));
console.log(daugyba(penki, 3));
console.log(daugyba(true, false));
console.log(daugyba(3, false));
console.log(daugyba(false, 3));
console.log(daugyba([asd], [786]));
console.log(daugyba([3],['asd', 786]));
console.log(daugyba(['asd', 786], ['asd', 786]));
console.log(daugyba(['asd'], [3]));
console.log(daugyba(-3, ['asd']));
console.log(daugyba(['asd'], ['asd']));
console.log(daugyba([2], 3));
console.log(daugyba(3, [2]));
console.log(daugyba([2], [2]));
console.log(daugyba(44, 0));
console.log(daugyba(NaN, 3));
console.log(daugyba(3, NaN ));
console.log(daugyba(NaN, NaN));
console.log(daugyba(Infinity, 3));
console.log(daugyba(3, Infinity ));
console.log(daugyba(Infinity, Infinity));
console.log(daugyba(-Infinity, 3));
console.log(daugyba(3, -Infinity ));
console.log(daugyba(-Infinity, -Infinity));

console.log(daugyba(4, 5), '->', 20);
console.log(daugyba(44, 5), '->', 220);
console.log(daugyba(-44, -55), '->', 2420);
console.log(daugyba(-44, 55), '->', -2420);
console.log(daugyba(-44, 0), '->', 0);
console.log(daugyba(0, 0), '->', 0);
console.log(daugyba(0, 54850), '->', 0);
console.log(daugyba(3.14, 2), '->', 6.28);
console.log(daugyba(3, 5), '->', 15);

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