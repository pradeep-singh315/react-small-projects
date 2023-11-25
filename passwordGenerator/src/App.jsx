import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [ password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed)
    { str += "0123456789" }
    if(charAllowed) 
    {str += "~!@#$%^&*?></"}

    for (let index = 1; index <= length; index++) {
      
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      setPassword(pass)
      
    } 
  }, [length, numberAllowed, charAllowed, setPassword])

  

  const copyPassword = useCallback(() =>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 100)
    window.navigator.clipboard.writeText(password)
    alert("Password Copied")
  },[password])

  useEffect(() =>{
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md px-4 py-5 mx-auto rounded-lg text-white bg-slate-300 mt-52'>
        <div className='text-orange-500 text-xl font-extrabold pb-5'>Password Generator</div>
        <div className='flex shadow rounded-lg overflow-hidden mb-5'>
          <input type="text" value={password} className='w-full outline-none p-2 rounded-lg text-orange-600' placeholder='Password' readOnly ref={passwordRef}/>
          <button className='rounded-lg bg-blue-800 text-white px-2 hover:text-blue-700 hover:bg-white hover:border hover:border-blue-700' onClick={copyPassword}>Copy</button>
        </div>
        <div className='flex text-sm text-orange-600 gap-5'>
          <div>
                <input type="range" min={6} max={100} value={length} className='cursor-pointer'
               onChange={(e) => {
               setLength(e.target.value)
               }}/>
               <label> Length : {length}</label>
          </div>

          <div>
               <input type="checkbox" id="numAllowed" value={numberAllowed} onChange={() => {
               setNumberAllowed((prev) => !prev)
               }}/>
               <label htmlFor='numAllowed'> Numbers</label>
          </div>

          <div>
              <input type="checkbox" id='charAllowed' value={charAllowed} onChange={() =>{
               setCharAllowed((prev) => !prev)
               }}/>
               <label htmlFor="charAllowed"> Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
