import React, { useState } from 'react'

export const Counter = () => {
    const[Count,setCount]=useState(10)
    return (
        <>
            <div>
                <h3>Counter<small></small></h3>
                <div>
                    <button className="p-2 bg-blue-500 rounded-xs w-10 text-white"  onClick={() => setCount(Count+1)}>
                     
                        +1
                    </button>
                    <button className="p-2 bg-blue-500 rounded-xs w-10 text-white" onClick={() => setCount(Count-1)}>
                      
                        +2
                    </button>
                </div>

            </div>
        </>
    )
}

