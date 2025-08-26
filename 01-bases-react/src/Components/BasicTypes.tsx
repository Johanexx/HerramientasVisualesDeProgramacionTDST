import React from 'react'

export const BasicTypes = () => {
  const name: string = "Johanex";
const age: number = 19  ;
let isActive: boolean = true;
  return (
    <>
    <div>
      BasicTypes
      </div>
      <div>
        {" "+ name}
      </div>
      <div>
        {" "+ age}
      </div>
      <div>
        {" "+ isActive}
      </div>
   </>
  )
}

