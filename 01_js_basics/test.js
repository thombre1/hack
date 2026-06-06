function greet({firstName, lastName}){
  console.log(`Hello ${firstName}. Nice to meet you!`);
}

function conditionalGreet({firstName, gender}){
  if(gender.toLocaleLowerCase()=='female'){
    console.log(`Hello ${firstName}. Nice to meet you!`);
  }
  else{
    console.log("I aint gay bro, no offence")
  }
}

function counter(n){
  for(let i=0; i<n; i++){
    setTimeout(() => {
      console.clear();
      console.log(i,"\n");
    }, 1000*i);
  }
}


const users = {
  "user1": {
    "firstName": "Aditya",
    "lastName": "Thombre",
    "status": "Working",
    "gender": "Male"
  },
  "user2": {
    "firstName": "Digambar",
    "lastName": "Dhawade",
    "status": "Travelling",
    "gender": "Male"
  },
"user3": {
    "firstName": "Poorva",
    "lastName": "Harde",
    "status": "Banking",
    "gender": "Female"
  }
}

greet(users["user1"]);
conditionalGreet(users["user3"]);
counter(10);
