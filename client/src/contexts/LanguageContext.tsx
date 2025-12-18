import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import type { ReactNode } from 'react';
import { translations, getNestedTranslation } from '@/i18n/translations';
import type { Language, TranslationKey } from '@/i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey | string) => string;
  tList: (key: string) => string[];
  tObject: <T = any>(key: string) => T;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Read from localStorage on mount
    const stored = localStorage.getItem('language') as Language | null;
    return stored && ['en', 'az', 'ru'].includes(stored) ? stored : 'en';
  });

  // Persist language changes to localStorage
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Memoized setLanguage to prevent unnecessary re-renders
  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  // Memoized translation function for strings
  const t = useCallback(
    (key: TranslationKey | string): string => {
      const result = getNestedTranslation(translations[language], key, key);
      return typeof result === 'string' ? result : String(result);
    },
    [language]
  );

  // Memoized translation function for arrays
  const tList = useCallback(
    (key: string): string[] => {
      const result = getNestedTranslation(translations[language], key, []);
      return Array.isArray(result) ? result : [];
    },
    [language]
  );

  // Memoized translation function for objects
  const tObject = useCallback(
    <T = any>(key: string): T => {
      const result = getNestedTranslation(translations[language], key, {});
      return result as T;
    },
    [language]
  );

  // Memoize context value to prevent unnecessary re-renders
  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t,
      tList,
      tObject,
    }),
    [language, setLanguage, t, tList, tObject]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}

// Convenience hook for just getting the t function
export function useT() {
  const { t } = useLanguage();
  return t;
}
