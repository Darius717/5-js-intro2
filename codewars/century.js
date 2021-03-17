/*function century(year) {
    // amzius is esmes yra metai padalinti is 100
    let amzius = year / 100;
    console.log(amzius);
    
    // suapvalinti, jog nelitu po kablelio liekanos
    amzius = Math.floor(amzius)

    // jei egzistuoja dalybos liekana, tai +1 amzius

    if (year % 100 > 0) (
        amzius++
    )
   return amzius++;
   */

   //Kitas sprendimo budas

   function century(year) {
    return Math.ceil(year / 100);
  }

console.log(century(1705), '->', 18,);
console.log(century(1900), '->', 19,);
console.log(century(1601), '->', 17,);
console.log(century(2000), '->', 20,);
console.log(century(89), '->', 1, );


