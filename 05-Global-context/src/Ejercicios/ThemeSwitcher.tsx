import React from 'react'
import { useThemeContext } from './ThemeContext'

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useThemeContext()

  return (
    <div
      style={{
        backgroundColor: theme === 'dark' ? '#121212' : '#f5f5f5',
        color: theme === 'dark' ? '#fff' : '#000',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.5s ease-in-out',
      }}
    >
      <h1>{theme === 'dark' ? '🌙 Modo Oscuro' : '☀️ Modo Claro'}</h1>

      <button
        onClick={toggleTheme}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          backgroundColor: theme === 'dark' ? '#fff' : '#222',
          color: theme === 'dark' ? '#000' : '#fff'
        }}
      >
        Cambiar a {theme === 'dark' ? 'modo claro' : 'modo oscuro'}
      </button>
    </div>
  )
}