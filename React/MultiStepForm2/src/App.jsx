import { useState } from 'react'
import './App.css'
import MultiStepForm from './assets/components/MultiStepForm'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <MultiStepForm /> 

    </div>
  )
}

export default App
