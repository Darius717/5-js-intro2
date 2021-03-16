const a = 8;
const b = 5;
const c = 99;
const d = 88;
const e = 2;
const f = 3;


function desimteriopaSuma (pirmas, antras) {
    const s = (pirmas + antras) *10;
    console.log(s);
}

desimteriopaSuma(e, f);
console.log('---------');
desimteriopaSuma(a, b);
console.log('---------');
desimteriopaSuma(c, d);

console.log('-----------');

function labas (vardas, amzius, gyvVieta) {
        console.log(`Labas as esu ${vardas} ir man ${amzius} metai esu is ${gyvVieta}`);
}

labas('Petras', 88, 'Kaunas');
labas('Maryte', 75, 'Siauliai'); 
labas('Alfonsas', 60);