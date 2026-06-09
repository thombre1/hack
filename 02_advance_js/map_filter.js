const arr = [1,2,3,4,5,6,7,8,9];

console.log("Before Array: ",arr );
const doubleArr = arr.map((item)=>{
  return item*2;
})
console.log("After Array: ",doubleArr );


const evenArr = arr.filter((item)=>{
  return item%2==0;
})

console.log(evenArr);


