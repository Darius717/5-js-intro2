function stringToArray(string){
   
const str = string; 
const arr = str.split(" "); 
return (arr); 

    
}

console.log(stringToArray("Robin Singh"), ["Robin", "Singh"]);
console.log(stringToArray("I love arrays they are my favorite"), ["I", "love", "arrays", "they", "are", "my", "favorite"])


//return string.split(' ');