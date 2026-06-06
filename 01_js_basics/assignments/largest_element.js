const arr = new Array(90).fill(0)

for([index,entry] of arr.entries()){
  arr[index] = Math.floor(Math.random()*1000);
}



let max = 0;
arr.forEach((number)=>{
  if(max<number){
    max=number;
  }
})

console.log(arr)
console.log("Largest Number is: ",max);
