import { useState } from 'react'

import './App.css'
import { BasicTypes } from './Components/BasicTypes'
import { Contador } from './Components/contador'
import { TiendaOnline } from './Components/TiendaOnline'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <BasicTypes/> */}
      <Contador/>
      <TiendaOnline/>
      </>
  )
}

export default App
