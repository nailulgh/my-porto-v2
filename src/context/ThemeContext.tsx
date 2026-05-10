import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../styles/theme';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isDark: true,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('cyberpunk-theme');
    if (saved) return saved === 'dark';
    return true; // default to dark
  });

  const toggleTheme = () => {
    setIsDark(prev => {
      const next = !prev;
      localStorage.setItem('cyberpunk-theme', next ? 'dark' : 'light');
      // Update HTML class for any CSS relying on it (like global.ts)
      const html = document.getElementsByTagName('html')[0];
      if (next) {
        html.classList.remove('light');
      } else {
        html.classList.add('light');
      }
      return next;
    });
  };

  useEffect(() => {
    // Sync initial HTML class
    const html = document.getElementsByTagName('html')[0];
    if (isDark) {
      html.classList.remove('light');
    } else {
      html.classList.add('light');
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
