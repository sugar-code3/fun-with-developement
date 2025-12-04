import {useState} from "react"

function App() {
const [color,setColor]=useState("olive");
  return (
<div className="w-full h-screen duration-200" style={{backgroundColor: color}}>

<div className="fixed flex flex-wrap justify-center border-2  border-none bottom-12 inset-x-0 px-2">
<div className="flex flex-wrap justify-center bg-white px-3 py-2 rounded-3xl" >
  <button onClick={()=>setColor("Red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg mx-1" style={{background:"red"}} >Red</button>
  <button  onClick={()=>setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg mx-1" style={{background:"blue"}}>Blue</button>
  <button  onClick={()=>setColor("yellow")} className="outline-none px-4 py-1 rounded-full  shadow-lg mx-1" style={{background:"yellow"}}>Yellow</button>
  <button  onClick={()=>setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg mx-1" style={{background:"black"}}>Black</button>
  <button  onClick={()=>setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg mx-1" style={{background:"green"}}>Green</button>
  <button  onClick={()=>setColor("orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg mx-1" style={{background:"orange"}}>orange</button>
  <button  onClick={()=>setColor("magenta")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg mx-1"  style={{background:"magenta"}}>Magenta</button>
  <button  onClick={()=>setColor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg mx-1" style={{background:"purple"}}>purple</button>
  <button  onClick={()=>setColor("royalblue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg mx-1" style={{background:"royalblue"}}>RoyalBlue</button>
  <button   onClick={()=>setColor("white")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg mx-1 " style={{background:"white"}}>White</button>
</div>
</div>
</div>
  )
}

export default App
