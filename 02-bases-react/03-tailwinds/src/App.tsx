import { useState } from 'react'
import './App.css'
import { Counter } from './Components/Counter'

function App() {

  return (
    <>
      <div className='flex flex-col justify-center items-center h-svh w-svw'>
        <h1 className='text-4xl mb-5 text-red-500'>
Contador
<Counter/>
        </h1>
        
      </div>

    </>
  )
}

export default App
