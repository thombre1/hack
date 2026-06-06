const numArray = [1,2,3,4,5,6,7,8,9,0,10];

function printEven(array){
  
  array.forEach(element => {
    if(element%2 == 0){
      console.log(element);
    }
  });

}

function printBiggest(array){
  let biggest = Number.MIN_SAFE_INTEGER;
  array.forEach((element) =>{
      if(biggest<element) biggest = element;
  })
  return biggest;
}

function reverseArray(array){
  const n = array.length;
  for(let i=0; i<n/2-1;i++){
      array[i] = array[i] ^ array[n-1-i];
      array[n-1-i] = array[i] ^ array[n-1-i];
      array[i] = array[i] ^ array[n-1-i];
  }
}


printEven(numArray);
console.log("Biggest ELement: ",printBiggest(numArray));

reverseArray(numArray);
console.log(numArray);
