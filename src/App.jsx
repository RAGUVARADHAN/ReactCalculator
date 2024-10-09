import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/Input'
import Buttons from './components/Buttons'

function App() {
  const [result, setResult] = useState("")

  const handleClick=(e)=>{setResult(result.concat(e.target.value))};
  const clear=()=>{setResult("")};
  const deleteEle=()=>{setResult(result.slice(0,-1))};
  const calculate=()=>{setResult(eval(result).toString());}

  return (
    <div className='bg-blue-700 w-80 mx-auto p-4 rounded-lg shadow-lg mt-6'>
      <Input result={result} />
      <Buttons handleClick={handleClick} clear={clear} deleteEle={deleteEle} calculate={calculate}/>
    </div>
  )
}

export default App
