
// The goal is to play with the following functions for strings
// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.
// Treat String as Array of Character,not words

const myString = "I am eating a banana while by breath is high, if that makes sense, and I am worried about my career"
console.log(myString);
const stringLength = myString.length;
const amIndex = myString.indexOf("am");
const amLastIndex = myString.lastIndexOf("am");
console.log(`This is the length:${stringLength} and this is indexOf am: ${amIndex} and lastIndexOf am: ${amLastIndex}`);


//slice can be used with arrays and Stsrings both with the ability to handle negative arguments as length-n for(-n,-m), basically start from n from end and upto m from end
const slicedString = myString.slice(0,44);
console.log(`The slice of String: ${slicedString}`);

//only for strings
const mySubstring = myString.substring(0,44);
console.log(`The Substring: ${mySubstring}`);

// the /am/g  is a regular expression, /am is the exact string pattern and /g means global action, here the action is replace
const myReplaceString = myString.replace(/am/g,"was");
console.log(" ");
console.log(`The Original: ${myString}`);
console.log(`The Replaced: ${myReplaceString}`);


const arrayOfWords = myString.split(" ");
console.log(`Type:${typeof(arrayOfWords)}  The array of words: ${arrayOfWords[0]} `);

//No args for trim
const trimString = myString.trim();
console.log(`What does trim do: ${trimString} removes empty spaces`);

console.log(`This is what shouting on text looks like: ${myString.toUpperCase()}`)
console.log(`This is what speaking in temple sounds like: ${myString.toLowerCase()}`)

