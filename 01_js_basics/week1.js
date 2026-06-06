
//substr args are start point and length
//slice args are start point and end point(not included)
console.log("Aditya Thombre".slice(2,8));
console.log("Aditya Thombre".substr(2,8));

const stringer = "Hello World, small world it is";
console.log(stringer.replace("World","Duniya"));


const someArray = [1,2,3,4,5];

function printer(arr){
	console.log(arr);
}

someArray.forEach(printer);


class City{
	constructor(name, area, speciality){
		this.name = name;
		this.area = area;
		this.speciality = speciality;
		}

	// wrong sytnatx static function info(){
	// wrong syntax function introduction(){
	static info(){
		console.log("This class makes city");
	}

	introduction(){
		console.log(`This is ${this.name} and its ${this.speciality} is famous`);
	}

}


const bhandara = new City("bhandara", "100sq.km", "Rice");
const Nagpur = new City("Nagpur", "1000sq.km", "Oranges");

City.info();
Nagpur.introduction();

const currentTime = new Date();
console.log(currentTime.getMonth());
console.log(currentTime.getDate());
console.log(currentTime.getFullYear());

console.log(`Current Time: ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`);

currentTime.setFullYear(2017);
console.log(currentTime.getFullYear());

function timeTester(){
	let a = 10;
	for(let i = 0;i<=1000000000;i++){
		a+=i;
	}
}
const beforeDate = new Date();
const beforeTime = beforeDate.getTime();
timeTester();
const afterTimer = new Date();
const afterTime = afterTimer.getTime();
console.log(`timeTaken by fn():${afterTime - beforeTime}ms`);
