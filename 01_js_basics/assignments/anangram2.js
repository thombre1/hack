const s = "dobby"
const t = "ybbod"


function isAnagram(s,t){
  if(s.length !== t.length) return false;
  
  const myObject = {};
  const n = s.length;
  
  for(let i=0; i<n ;i++){
    myObject[s[i]] = (myObject[s[i]] || 0) + 1;
    myObject[t[i]] = (myObject[t[i]] || 0) - 1;
  }

  console.log(myObject)
  for(const key in myObject){
    if(myObject[key]!==0) return false;
  }
  return true;
}

console.log(isAnagram(s,t));
