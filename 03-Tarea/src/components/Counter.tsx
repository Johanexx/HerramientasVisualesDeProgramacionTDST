import React, { useState } from 'react'

export const Counter = () => {
    const [count, setCount] = useState(10)
    return (
        <div>
                
            <h3>
                Counter 
                <small>
                     {"  " + count}
                </small></h3>

            <div className='flex gap-4'>
                <button className="p-2 bg-blue-500 rounded-xs w-10 text-white" onClick={()=>setCount(count+1)}>
                    +1
                </button>
                <button className="p-2 bg-blue-500 rounded-xs w-10 text-red" onClick={()=>setCount(count-1)}>
                    -1
                </button>
            </div>
        </div>
    )
}