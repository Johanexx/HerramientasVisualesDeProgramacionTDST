import React, { useState } from 'react'

export const BotonEstados = () => {
    const [isDesactivado, setIsDesactivado] = useState(false);
    return (
      <>
      <div>BotonEstados</div>
      <button
        disabled={isDesactivado}
        className="
          bg-blue-600 text-white px-4 py-2 rounded-lg 
          hover:opacity-80 
          focus:outline-none focus:ring-2 focus:ring-blue-400 
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-all
        "
      >
        Click aquí
      </button>
      <div className="flex flex-col items-center gap-4 p-6">
    
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={isDesactivado}
          onChange={(e) => setIsDesactivado(e.target.checked)}
          className="cursor-pointer"
        />
        Deshabilitar botón
      </label>

      
      
    </div>

      </>
    )
}
