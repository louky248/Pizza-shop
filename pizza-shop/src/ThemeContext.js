// ThemeContext.js
import React, { createContext, useState } from 'react';

// Create the context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode((prevTheme) => !prevTheme);
          };

            return (
                <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
                      {children}
                          </ThemeContext.Provider>
                            );
                            };

                            export default ThemeContext;