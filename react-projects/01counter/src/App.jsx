import { useState } from 'react'
import './App.css'
import './index.css'

function App() {

  const [counter, setCounter] = useState(0);
  const increasecount=()=>{
   if(counter<100){
    setCounter((counter)=>counter+1);
    setCounter((counter)=>counter+1);
    setCounter((counter)=>counter+1);
    setCounter((counter)=>counter+1);
  }
else{
  setCounter((counter)=>counter=0);
}
  }

  const  removecount=()=>{
    
    setCounter(counter<=0? counter===0: counter-1);
  }

  return (
    <>
     <h1>chai aur code</h1>
     <h3>counter value: {counter}</h3>
 
     <button onClick={increasecount}>Add Counter  {counter}</button>
     <br></br>
     <button onClick={removecount}>Remove Counter {counter}</button>

     <footer>footer {counter}</footer>

    </>
  )
}

export default App
