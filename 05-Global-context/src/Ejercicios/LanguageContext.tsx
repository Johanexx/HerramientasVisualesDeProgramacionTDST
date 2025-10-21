import React, { createContext, useContext, useState, type ReactNode } from 'react'

interface LanguageState {
language: "es" | "en",
toggleLanguage: () =>void;
}

const LanguageContext = createContext<LanguageState>({
  language: 'es',
  toggleLanguage: () => {}
})
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<'es' | 'en'>('es')

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'es' ? 'en' : 'es'))
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguageContext = () => useContext(LanguageContext)