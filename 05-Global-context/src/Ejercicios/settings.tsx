import React from 'react'
import { useThemeContext } from '../Ejercicios/ThemeContext'
import { useLanguageContext } from '../Ejercicios/LanguageContext'

export const Settings = () => {
  const { theme, toggleTheme } = useThemeContext()
  const { language, toggleLanguage } = useLanguageContext()

  const texts = {
    es: {
      title: 'Configuración',
      theme: 'Tema actual',
      lang: 'Idioma actual',
      changeTheme: 'Cambiar tema',
      changeLang: 'Cambiar idioma'
    },
    en: {
      title: 'Settings',
      theme: 'Current theme',
      lang: 'Current language',
      changeTheme: 'Change theme',
      changeLang: 'Change language'
    }
  }

  const t = texts[language]

  return (
    <div
      style={{
        minHeight:'100vh',
        minWidth: '100vw',
        textAlign: 'center',
        padding: '20px',
        
        backgroundColor: theme === 'light' ? '#f0f0f0' : '#222',
        color: theme === 'light' ? '#000' : '#fff',
        borderRadius: '10px',
        width: '300px',
        margin: '50px auto'
      }}
    >
      <h1>{t.title}</h1>
      <p>{t.theme}: {theme}</p>
      <p>{t.lang}: {language}</p>
      <button onClick={toggleTheme}>{t.changeTheme}</button>
      <button onClick={toggleLanguage} style={{ marginLeft: '10px' }}>
        {t.changeLang}
      </button>
    </div>
  )
}
