// Header.js
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Header = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <header style={{ backgroundColor: isDarkMode ? 'black' : 'white', color: isDarkMode ? 'white' : 'black' }}>
              <h1>Welcome to our E-Commerce Site</h1>
                    <button onClick={toggleTheme}>
                            Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
                                  </button>
                                      </header>
                                        );
                                        };

                                        export default Header;