import React, { useState, useEffect } from 'react';

export const Contador = () => {
 
  const [count, setCount] = useState(0);
const [isActive, setIsActive] = useState(true);
useEffect(() => {
    console.log(`Click número: ${count}`);
  }, [count]);
return (
<>
<h2>Ejercicio 1</h2>
<h2>Contador de Clicks</h2>
      {isActive ?
        <ul>
          
          <li>CLICKS {count}</li>
        </ul> :
        <p>Nada</p>
}




<button onClick={
() => {
setCount(count+1);

}


}> Click


</button>


</>
 )  
};

