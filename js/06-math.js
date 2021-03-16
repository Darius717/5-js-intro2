const c = 6;
const d = 5;

const ats2 = c > d ? 'daugiau' : 'nedaugiau'; // inline if

console.log(ats2);


const  pazymiai = [7, 10, 7];

const suma = pazymiai[0] + pazymiai[1] +pazymiai[2];

const vidurkis = suma / pazymiai.length;

console.log(vidurkis);

console.log('------------');

const marks = [10, 8, 6, 4]

const count = marks.length;
let sum = 0;
console.log('sum:', sum);

sum = sum + marks[0];               //0 + 10
console.log('suma:', sum);

sum = sum + marks[1];               //10 + 8
console.log('suma:', sum);

sum = sum + marks[2];               //18 + 6
console.log('suma:', sum);

sum = sum + marks[3];               //24 + 4
console.log('suma:', sum);


const average = sum / count;
console.log(average);


console.log('---------------');

const marks2 = [2, 4, 6, 8];

let sum2 = 0;
console.log(sum2);

sum2 +=  marks2[0];  // 0 + 2
console.log(sum2);

sum2 +=  marks2[1];  // 2 + 4 
console.log(sum2);

sum2 +=  marks2[2];  // 6 + 6
console.log(sum2);

sum2 +=  marks2[3];  // 12 + 8
console.log(sum2);

console.log('-------------------');

const marks3 = [2, 4, 6, 8];

let sum3 = 0;
let markIndex3 = 0;
console.log(sum3);

sum3 +=  marks3[markIndex3];  // 0 + 2
console.log(sum3);

markIndex3 +=1
sum3 +=  marks3[markIndex3];  // 2 + 4 
console.log(sum3);

markIndex3 +=1
sum3 +=  marks3[markIndex3];  // 6 + 6 
console.log(sum3);

markIndex3 +=1
sum3 +=  marks3[markIndex3];  // 12 + 8 
console.log(sum3);

console.log('-----------------');

const abc = ['r', 'y', 't', 'a', 's'];

let zodis = '';
let abcIndex = 0;
 
zodis += abc[abcIndex++];
console.log(zodis);

zodis += abc[abcIndex++];
console.log(zodis);

zodis += abc[abcIndex++];
console.log(zodis);

zodis += abc[abcIndex++];
console.log(zodis);

zodis += abc[abcIndex++];
console.log(zodis);


console.log('-----------------');

const abc2 = ['r', 'y', 't', 'a', 's'];

let zodis2 = '';
let abcIndex2 = 0;
 
zodis2 += abc2[abcIndex2++];
zodis2 += abc2[abcIndex2++];
zodis2 += abc2[abcIndex2++];
zodis2 += abc2[abcIndex2++];
zodis2 += abc2[abcIndex2++];

console.log(zodis2);
console.log('---------------------');

let a  = 4;
console.log(++a);
console.log(++a);
console.log(++a);
console.log(++a);
console.log(++a);