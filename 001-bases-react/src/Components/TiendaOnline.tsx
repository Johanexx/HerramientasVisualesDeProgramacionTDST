import React, { useState, useEffect } from 'react'

export const TiendaOnline = () => {
  let name: string = "Arrocera";
  let precio: string = "$500.000";

 
  const [showDetails, setShowDetails] = useState<boolean>(true);

  useEffect(() => {
    if (showDetails) {
      console.log("Detalles mostrados ");
    } else {
      console.log("Detalles no mostrados ");
    }
  }, [showDetails]);

  return (
    <div>
      <h2>Tienda Online</h2>

      {showDetails ? (
        <ul>
          <li>Nombre: {name}</li>
          <li>Precio: {precio}</li>
        </ul>
      ) : (
        <p>Nada</p>
      )}

      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Ocultar detalles" : "Mostrar detalles"}
      </button>
    </div>
  )
}

