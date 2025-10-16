

import './App.css'
import { LanguageProvider } from './Ejercicio_1/LanguageContext'
import { LanguageDisplay } from './Ejercicio_1/LanguageDisplay'
import { ThemeProvider} from './Ejercicio_1/ThemeContext'
import { ThemeSwitcher } from './Ejercicio_1/ThemeSwitcher'

function App() {
 

  return (
   
    
   
<ThemeProvider>
 <ThemeSwitcher />
 <LanguageProvider>
  <LanguageDisplay />
 </LanguageProvider>
</ThemeProvider>
   
  )
}

export default App
