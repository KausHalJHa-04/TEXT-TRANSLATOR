// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="h-screen w-screen bg-slate-200">

      <div className="flex items-center justify-center flex-col gap-y-10">
        <h1 className=' text-3xl text-zinc-700 font-bold'>Text Translator</h1>

        <div className="flex items-center justify-center flex-col gap-y-5">
          <textarea name="input-text" className="bg-white h-30 w-[500px] border border-slate-700 outline-none rounded-lg text-lg px-2 py-2"></textarea>
          <textarea name="input-text" className="bg-white h-30 w-[500px] border border-slate-700 outline-none rounded-lg text-lg px-2 py-2"></textarea>
        </div>

      </div>
    </div>
  )
}

export default App
