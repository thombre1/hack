// Arrays are important and we will play with the following functions
// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

const arrayObject = [9,5,8,42,8,9,4,3,7,4,3,1,2,3,4,5,6,7,90,10];
console.log(`The original array: ${arrayObject}`);

//Idk how much this info serves me but when i run the push obejct it returns how many elements are there in an array, we can push multiple elements at once
//and pop returns the popped element ofcourse
console.log(`The pushed array length: ${arrayObject.push(69,70)}`);
console.log(arrayObject);
console.log(`The popped element: ${arrayObject.pop()}`);


// we can say shift() pops the element from front and shifts the array to one index less for each element, No args
const arrayShift = arrayObject.shift();
console.log(arrayObject);
console.log(arrayShift);

//we can say unshift() pushes multiple element at the start of the array and thus moves the indexes accordingly, just like push can have multiple arguments and the return value is number of elments in the array after the operation is done
const arrayUnshift = arrayObject.unshift(1002);
console.log(arrayObject);
console.log(arrayUnshift);

//Splice is cut-paste
console.log("The result of Splicing");
// The array is modified the start and upto arguments are the elements in the return value the remaining elements stay in the original array
const spliceArray = arrayObject.splice(0,4);
console.log(arrayObject);
console.log(spliceArray);

//Slice is copy-paste
console.log("The result of Slicing");
// The array is not modified the start and upto arguments are the elements in the return value the remaining elements stay in the original array
const sliceArray = arrayObject.slice(0,4);
console.log(arrayObject);
console.log(sliceArray);

//THe concat function will concatenate multiple array to a single one, according to argument order, the original array will not be modified
console.log("The arrays will be concatenated");
const array1 = [1,3,5,7,9];
const array2 = [0,2,4,6,8];

const concatArray = array1.concat(array2,arrayObject)
console.log(array1);
console.log(array2);
console.log(`The concatenated array: ${concatArray}`);


//forEach() is a loop i guess, gives an iterator that we can use to do variety of things
console.log("Iterate each element");
arrayObject.forEach(it=>console.log(it));


// so the return value is anything of map the element is mapped to, here 10+element
console.log("The map() thing takes in an function as an argument, that function by default has a iterator on which we can do operations and return a value to be 'mapped' in place of that iterator element. And the mapping is done on a copy not the original one");
const mapArray = arrayObject.map(function(it){
	return it+10;
})
console.log(mapArray);

// Filter - here the return value is boolean dependent that is if the boolean value true the element is copied in the new array else it isnt, thus working as a filter

const filterArray = arrayObject.filter(function(it){
	return it>5;
});
console.log(filterArray);

// I dont think I will use reduce much it feels weird
//Zero is the value initialised of the accumulator if that is not specified then the default value is the first element of the array on which we apply reduce

const reducedArray = arrayObject.reduce(function(accumulator,currentIterator){
	return accumulator+currentIterator;
},0)
console.log(`The reduced array result is: ${reducedArray}`);


// Similar to filter, find just returns the first occurence while filter gives all the occurence in an array
const findArrayResult = arrayObject.find(function(it){
	return it>69;
});
console.log(`I wonder the index of element to be found is: ${findArrayResult}`);

//sort() default behaviour is alphabetical sorting, even if the elements are integers
//The changes propogate back to the original array

const sortedArray = arrayObject.sort(function(a,b){
	return a-b;
});
console.log(`The original: ${arrayObject}`);
console.log(`The new and sorted: ${sortedArray}`);
