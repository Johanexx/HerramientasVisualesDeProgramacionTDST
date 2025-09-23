import React from 'react'

export const Utiles_Escolares = () => {
     interface Utiles{
  name: string;
    precio: number;
    
   

}

const Utiles_escolares:Utiles[]=[
{
  name: "Cuaderno 100 hojas",
precio: 2500,

},
{
    name: "Lapicero gris",
precio: 1000,

},
{name: "Corrector negro",
precio: 2500,
},
{name: "Borrador en agua",
precio: 5000,
},
{name: "Libro Ciencias del programador",
precio: 25000,
},
{name: "Calculadora",
precio: 50000,
}

]
  return (
    <>
    <div>Utiles_Escolares</div>
    <ul>
  {Utiles_escolares.map(
    (value,index)=><div key ={index}>
<div>{value.name}</div>
<div>{value.precio}</div>


<hr />
    </div>
  )
  }
</ul>
</>
  )
}
