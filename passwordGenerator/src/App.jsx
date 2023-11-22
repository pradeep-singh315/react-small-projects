import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [ password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "~!@#$%^&*?></"

    for (let index = 1; index <= str.length; index++) {
      
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)
      setPassword(pass)
      
    }
    
  }, [length, numberAllowed, charAllowed, setPassword])

  return (
    <>
      <div className='w-full max-w-md px-4 py-3 mx-auto rounded-lg text-white bg-slate-500'>
        <div>Password Generator</div>
        <div className='flex shadow rounded-lg overflow-hidden mb-5'>
          <input type="text" value={password} className='w-full outline-none p-2 rounded-lg' />
          <button className='rounded-lg bg-blue-800 text-white'>Copy</button>
        </div>
        <div className='flex text-sm'>
          <input type="range" min={6} max={100} value={length} className='cursor-pointer' 
          onChange={(e) => {
            setLength(e.target.value)
          }}/>
          <label> Length : {length}</label>
        </div>
      </div>
    </>
  )
}

export default App
