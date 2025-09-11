import React from 'react'

export const Products = () => {

    interface Tienda{
  name: string;
    precio: number;
    Descipcion: string;
   

}
const tienda:Tienda[]=[
{
  name: "Chocolate",
precio: 2500,
Descipcion:"es black"
},
{
    name: "Chocorramo gris",
precio: 5000,
Descipcion:"es delicioso"
},
{name: "Agua en polvo",
precio: 25000,
Descipcion:"es blue"
}

]
  return (
    <>
    <div>Products</div>
    <img src="/Recursos/yo.png" alt="Descripción de la imagen" />
    <h2>Temu</h2>
<ul>
  {tienda.map(
    (value,index)=><div key ={index}>
<div>{value.name}</div>
<div>{value.precio}</div>
<div>{value.Descipcion}</div>

<hr />
    </div>
  )
  }
</ul>
</>
  )
}
