import React from 'react'
import { useLanguageContext } from './LanguageContext'

export const LanguageDisplay = () => {
  const { language, toggleLanguage } = useLanguageContext()

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>Idioma actual: {language === 'es' ? 'Español 🇪🇸' : 'Inglés 🇺🇸'}</h2>
      <button
        onClick={toggleLanguage}
        style={{
          padding: '10px 20px',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          backgroundColor: '#007bff',
          color: '#fff'
        }}
      >
        Cambiar a {language === 'es' ? 'Inglés' : 'Español'}
      </button>
    </div>
  )
}
