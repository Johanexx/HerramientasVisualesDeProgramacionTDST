import React, { useState } from 'react'
import { useCounter } from "../hooks/useCounter";
import { StyledButton } from './StyledButton';

export const Counter = () => {
    
    const {count, increaseBy} = useCounter();

    return (
        <div>
                
            <h3>
                Counter 
                <small>
                     {"  " + count}
                </small></h3>

<div className='flex gap-4'>
    <StyledButton label='+1' color='bg-blue-500' handleClick={()=>increaseBy(+1)}/>
    <StyledButton label='-1' color='bg-red-500' handleClick={()=>increaseBy(-1)}/>
</div>
            {/* <div className='flex gap-4'>
                <button onClick={()=>increaseBy(+1)}>
                    +1
                </button>
                <button  onClick={()=>increaseBy(-1)}>
                    -1
                </button>
            </div> */}
        </div>
    )
}