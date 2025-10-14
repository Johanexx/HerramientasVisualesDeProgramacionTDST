import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider, useThemeContext} from './Ejercicio_1/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeContext();
  
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
          color: theme === 'dark' ? '#000' : '#fff',
        }}
      >
        Cambiar a {theme === 'dark' ? 'modo claro' : 'modo oscuro'}
      </button>
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
   
<ThemeProvider>
 <ThemeToggle />
</ThemeProvider>
    </>
  )
}

export default App
