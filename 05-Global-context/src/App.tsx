

import './App.css'
import { LanguageProvider } from './Ejercicios/LanguageContext'
import { LanguageDisplay } from './Ejercicios/LanguageDisplay'
import { Settings } from './Ejercicios/settings'
import { ThemeProvider} from './Ejercicios/ThemeContext'
import { ThemeSwitcher } from './Ejercicios/ThemeSwitcher'

function App() {
 

  return (
   
    
   
<ThemeProvider>

 <LanguageProvider>
  <Settings />
 </LanguageProvider>
</ThemeProvider>
   
  )
}

export default App
