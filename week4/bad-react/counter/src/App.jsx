import './App.css'
import { useState } from "react";

function App(){
    const [count, setCount] = useState(1);

    return (
        <button onClick={()=>setCount(function(count){
            return count*2;
        })}>Counter {count}</button>
    )
}
export default App;

