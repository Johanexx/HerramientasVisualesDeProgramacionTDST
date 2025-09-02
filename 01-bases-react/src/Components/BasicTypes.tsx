import React, { useState } from 'react'

export const BasicTypes = () => {
  let name: string = "Johanex";


const [age, setAge] = useState(20);
const [isActive, setIsActive] = useState(true);
  return (
    <>
   <h3>Basic Types</h3>
      {isActive?
      <ul>
        <li>Nombre {name}</li>
        <li>Edad {age}</li>
      </ul>:
      <p>Usuario inactivo</p>
      }



<h2>Variable de estado 1</h2>
<button onClick={()=>{
        setIsActive(!isActive);
      }}>
        {isActive?"Desactivar": "Activar"} Usuario
        </button>

<  h2>Variable de estado 2</h2>
<button onClick={
  () => {
    setAge(21);
    console.log(`l valor de age es: ${age}`)
  }
  

}>Modificar Edad</button>
    </>

  )
}

