/*function check(a, x) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === x) {
            return true;
        }
    }
    return false;
}

console.log(check([66, 101], 66), true);
    console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
    console.log(check(['t', 'e', 's', 't'], 'e'), true);
    console.log(check(['what', 'a', 'great', 'kata'], 'kat'), false);

    //const check = (a,x) => a.includes(x);
    //return a.includes(x);
    //return a.indexOf(x) > -1 ? true : false;

    */

    function stringToArray(string){
        // split string
    const str = string; 
	const arr = str.split(" "); 
	return (arr); 

        // code code code
    
    }

console.log(stringToArray("Robin Singh"), ["Robin", "Singh"]);
console.log(stringToArray("I love arrays they are my favorite"), ["I", "love", "arrays", "they", "are", "my", "favorite"])