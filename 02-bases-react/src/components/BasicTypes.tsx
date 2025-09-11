import React, { useState } from 'react'

export const BasicTypes = () => {
  const name: string = 'Temu';
  const age: number = 30;

  const [isActive, setIsActive] = useState(true)
  const names = [

    "Armando Casas1",
    "Armando Casas2",
    "Dolores Fuertes",
    "Armando Casas4",
    "Armando Casas5",];

  const namesMascotas = [

    "Armando el lion",
    "pepe el toro",
    "Dolores sociales",
    "JUano choclo",
    "cULEBRA",];

    const user ={
      name: "JUanA",
      email: "j.ne@gmail.com",
      age: "20",
      role: "administrador",
      MaritalStatus: "casado",
      isActive: true

    }
    const users = [
{
  name: "JUanA",
      email: "j.ne@gmail.com",
      age: "20",
      role: "administrador",
      MaritalStatus: "casado",
      isActive: true
},
{name: "JUanA",
      email: "j.ne@gmail.com",
      age: "20",
      role: "administrador",
      MaritalStatus: "casado",
      isActive: true
},
{name: "JUanA",
      email: "j.ne@gmail.com",
      age: "20",
      role: "administrador",
      MaritalStatus: "casado",
      isActive: true}
    ]
interface User{
  name: string;
    age: number;
    email: string;
    role: string;
    MaritalStatus: string;
    isActive: boolean;

}
const users1:User[]=[
{
  name: "JUanA",
      email: "j.ne@gmail.com",
      age: 20,
      role: "administrador",
      MaritalStatus: "casado",
      isActive: true
},
{name: "JUanA",
      email: "j.ne@gmail.com",
      age: 20,
      role: "administrador",
      MaritalStatus: "casado",
      isActive: true
},
{name: "JUanA",
      email: "j.ne@gmail.com",
      age: 20,
      role: "administrador",
      MaritalStatus: "casado",
      isActive: true}

]
    
  return (
    <>
      <div>Pagina para come queso XD</div>
      <h2>Constantes</h2>
      <ul>
        <li><b>name </b><span>{name}</span></li>
        <li><b>age </b><span>{age}</span></li>
        <li><b>isActive </b><span>{isActive ? "usuario activo:" : "usuario inactivo"}</span></li>
      </ul>

      <button onClick={() => setIsActive(!isActive)}>click Temu{isActive ? "usuario activo:" : "usuario inactivo"}</button>


      <ul>
        {names.map(
          (name, index) => <li key={index}>
            {name}
          </li>
        )}
      </ul>

      <div>
        {namesMascotas.map(
          (name, index) => <div key={index}>
            {name}
          </div>
        )}
{namesMascotas.join( ", ")}

<h2>Objetos Literales</h2>
{user.name}

<h2>Lista Objetos Literales</h2>
<ul>
  {users.map(
    (value,index)=><div key ={index}>
<div>{value.email}</div>
<div>{value.age}</div>
<div>{value.role}</div>
<div>{value.MaritalStatus}</div>
<div>{value.isActive}</div>

<hr />
    </div>
  )
  }
</ul>

      </div>

    </>
  )
}
