import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('black')

  return (
    <>
    <div className='  w-full h-full duration-200'
    style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap gap-12 justify-center bottom-8 inset-x-0 px-2'>
      <button onClick={()=>{setColor("Blue")}} className='flex px-6 rounded-xl outline-2 hover:scale-110 transition 1' style={{backgroundColor: "Blue"}}>Blue</button>
      <button onClick={()=>{setColor("Red")}} className='flex px-6 rounded-xl outline-2 hover:scale-110' style={{backgroundColor: "Red"}}>Red</button>
      <button onClick={()=>{setColor("Green")}} className='flex px-6 rounded-xl outline-2 hover:scale-110' style={{backgroundColor: 'Green'}}>Green</button>
      <button onClick={()=>{setColor("Pink")}} className='flex px-6 rounded-xl outline-2 hover:scale-110' style={{backgroundColor: 'Pink'}}>Pink</button>
      <button onClick={()=>{setColor("Purple")}} className='flex px-6 rounded-xl outline-2 hover:scale-110' style={{backgroundColor: 'Purple'}}>Purple</button>
      <button onClick={()=>{setColor("Orange")}} className='flex px-6 rounded-xl outline-2 hover:scale-110' style={{backgroundColor: 'Orange'}}>Orange</button>
      <button onClick={()=>{setColor("Crimson")}} className='flex px-6 rounded-xl outline-2 hover:scale-110' style={{backgroundColor: 'Crimson'}}>Crimson</button>
      <button onClick={()=>{setColor("Indigo")}} className='flex px-6 rounded-xl outline-2 hover:scale-110' style={{backgroundColor: 'Indigo'}}>Indigo</button>
      </div>
    </div>
    </>
  )
}

export default App
