import React, { useState } from 'react'

export const ListaFiltro = () => {
const BASE = ["Manzana", "Banana", "Pera", "Mango", "Fresa", "Sandia"];
const [query, setQuery] = useState("");

const list = BASE.filter((n) => {
    return n.toLowerCase().includes(query.toLowerCase());
  });
  return (
    <>
    <div>ListaFiltro</div>
    <div className="flex flex-col items-center gap-4 p-6">
     
      <input
        type="text"
        placeholder="Filtrar..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border rounded-md px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />


      {list.length > 0 ? (
        <ul className="divide-y divide-gray-200 border rounded-md w-64">
          {list.map((item, i) => (
            <li
              key={i}
              className="px-3 py-2 hover:bg-gray-50 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No se encontraron coincidencias.</p>
      )}
    </div>

    </>
  )
}
