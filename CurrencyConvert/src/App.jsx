import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-screen w-full bg-blue-300' >
        <div className="relative h-10 w-full bg-cyan-700 top-25">
          <label className='flex justify-center text-2xl font-bold text-white'>CurrencyConvert</label>
        </div>
      </div>
    </>
  )
}

export default App
