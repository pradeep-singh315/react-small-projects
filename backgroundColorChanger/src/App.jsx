import { useState } from 'react'

function App() {
      const [color, setColor] = useState("olive")

  return (
   <>
    <div className='w-full h-screen duration-200' style={{backgroundColor : color}}>
        <div className='fixed flex flex-wrap bottom-20 justify-center inset-x-0 px-2'>
           <div className='flex flex-wrap gap-5 bg-white py-2 px-4 rounded-xl'>
           <button className='bg-red-700 outline-none px-4 py-3 text-white rounded-xl' onClick={() => {setColor("red")}}>Red</button>
           <button className='bg-green-600 outline-none px-4 py-3 text-white rounded-xl' onClick={() => {setColor("green")}}>Green</button>
           <button className='bg-orange-400 outline-none px-4 py-3 text-white rounded-xl' onClick={() => {setColor("orange")}}>Orange</button>
           <button className='bg-blue-700 outline-none px-4 py-3 text-white rounded-xl' onClick={() => {setColor("blue")}}>Blue</button>
           <button className='bg-red-400 outline-none px-4 py-3 text-white rounded-xl' onClick={() => {setColor("salmon")}}>Cream</button>
           <button className='bg-yellow-300 outline-none px-4 py-3 text-white rounded-xl' onClick={() => {setColor("yellow")}}>Yellow</button>
           <button className='bg-violet-500 outline-none px-4 py-3 text-white rounded-xl' onClick={() => {setColor("violet")}}>Violet</button>
           <button className='bg-indigo-900 outline-none px-4 py-3 text-white rounded-xl' onClick={() => {setColor("indigo")}}>Indigo</button>
           <button className='bg-black outline-none px-4 py-3 text-white rounded-xl' onClick={() => {setColor("black")}}>Black</button>
           <button className='bg-pink-300 outline-none px-4 py-3 text-white rounded-xl' onClick={() => {setColor("pink")}}>pink</button>
           </div>
        </div>
    </div>
   </>
  )
}

export default App
