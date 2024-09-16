'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Locale } from '../../i18n.config';

type LanguageContextType = {
  lang: any;
  setLang: (lang: any) => void;
};

// Crear el contexto
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Hook para usar el contexto
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe ser usado dentro de LanguageProvider');
  }
  return context;
};

// Proveedor del contexto
export const LanguageProvider = ({ children, initialLang }: { children: ReactNode; initialLang: any }) => {
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    // Aquí puedes agregar lógica adicional para cambiar el idioma si es necesario
    setLang(initialLang);
  }, [initialLang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};