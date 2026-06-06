const JaySON = { "Name":"Aditya", "Status":"Creative", "Preferences":"Performance"};
const stringSON = '{ "Name":"Aditya", "Status":"Creative", "Preferences":"Performance"}';

console.log(JaySON["Name"]);

console.log("This is stringSON as JSON");
console.log(typeof(JSON.parse(stringSON)));
console.log(JSON.parse(stringSON));

JSON.stringify(JaySON);
console.log("This is JaySON as String");
console.log(typeof(JSON.stringify(JaySON)));
console.log(JSON.stringify(JaySON));

const keys = Object.keys(JaySON);
const values = Object.values(JaySON);
const entries = Object.entries(JaySON);

console.log(keys);
console.log(values);
console.log(entries);


