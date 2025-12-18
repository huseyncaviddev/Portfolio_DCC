import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { translations, getNestedTranslation } from '@/i18n/translations';
import type { Language } from '@/i18n/translations';

/**
 * Custom render function that wraps components with necessary providers
 * @param ui - The component to render
 * @param options - Additional render options including language selection
 */
interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  language?: Language;
}

/**
 * Mock localStorage for testing to prevent state leakage
 */
export function setupLocalStorageMock() {
  const localStorageMock = (() => {
    let store: Record<string, string> = {};

    return {
      getItem: (key: string) => store[key] || null,
      setItem: (key: string, value: string) => {
        store[key] = value.toString();
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      },
    };
  })();

  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
    writable: true,
  });

  return localStorageMock;
}

/**
 * Custom render function that includes LanguageProvider
 * Sets up the component with the specified language context
 */
export function renderWithProviders(
  ui: ReactElement,
  { language = 'en', ...renderOptions }: CustomRenderOptions = {}
) {
  // Set the language in localStorage before rendering
  localStorage.setItem('language', language);

  function Wrapper({ children }: { children: React.ReactNode }) {
    return <LanguageProvider>{children}</LanguageProvider>;
  }

  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

/**
 * Get a translator function for a specific language
 * Useful for asserting against translated strings in tests
 * @param language - The language to get translations for
 * @returns A translation function for the specified language
 */
export function getTranslator(language: Language = 'en') {
  return (key: string): string => {
    const result = getNestedTranslation(translations[language], key, key);
    return typeof result === 'string' ? result : String(result);
  };
}

/**
 * Get all translations for a specific language
 * @param language - The language to get translations for
 * @returns The complete translation object for that language
 */
export function getTranslations(language: Language = 'en') {
  return translations[language];
}

// Re-export everything from @testing-library/react
export * from '@testing-library/react';
export { renderWithProviders as render };
