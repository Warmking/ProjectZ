import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='main bg-gray-900 w-full h-screen flex'>
      <div className='master w-[25vw] bg-slate-500 my-10 ml-10 rounded-md flex  items-center flex-col '>
          <div className='template w-3/4 h-[8%] bg-slate-800 my-5 rounded-lg flex justify-center items-center'>
            <h1 className='text-sky-400 text-xl font-sans font-bold'>Templates</h1>
           </div>
           <div className='w-3/4 h-[80%] '>
            <img className='w-full h-auto p-1 hover:border hover:border-slate-800' src='../public/images/1.png' />
           </div>
      </div>
      <div className='view w-[70vw] bg-slate-800 my-10 mx-10 rounded-lg flex justify-center items-center'>
        <div className='cv w-[60%] bg-white h-[85vh] rounded-sm'>
          <h1>Jonathan peterson</h1>
        </div>

        </div>
      </div>
    </>
  )
}

export default App
