import React, { useState } from 'react'

export const BasicTypes = () => {
    const name: string = 'Temu';
    const age: number = 30;

    const [isActive,setIsActive]=useState(true)
  return (
    <>
    <div>Pagina para come queso XD</div>
    <h2>Constantes</h2>
    <ul>
        <li><b>name </b><span>{name}</span></li>
        <li><b>age </b><span>{age}</span></li>
        <li><b>isActive </b><span>{isActive?"usuario activo:":"usuario inactivo"}</span></li>
    </ul>
 
 <button onClick={()=> setIsActive(!isActive)}>click Temu{isActive?"usuario activo:":"usuario inactivo"}</button>
</>
)
}
