import { useState } from 'react'

import './App.css'
import { BasicTypes } from './Components/BasicTypes'
import { Contador } from './Components/contador'
import { TiendaOnline } from './Components/TiendaOnline'
import { Prueba1 } from './Components/Prueba1'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <BasicTypes/> */}
      <Contador/>
      <TiendaOnline/>
      <Prueba1/>

      </>
  )
}

export default App
