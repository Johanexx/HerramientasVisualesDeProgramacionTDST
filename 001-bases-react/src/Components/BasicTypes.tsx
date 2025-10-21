import React, { useState } from 'react'

export const BasicTypes = () => {
  let name: string = "Johanex";


const [age, setAge] = useState(20);
const [isActive, setIsActive] = useState(true);

const names = [

"Armando Casas1",
"Armando Casas2",
"Dolores Fuertes",
"Armando Casas4",
"Armando Casas5",


];
  return (
    <>
   
     {names[0]}

    </>

  )
}

