// Content.js
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Content = () => {
  const { isDarkMode } = useContext(ThemeContext);

    return (
        <main style={{ backgroundColor: isDarkMode ? '#333' : '#f9f9f9', color: isDarkMode ? 'white' : 'black' }}>
              <p>This is the content of the website.</p>
                  </main>
                    );
                    };

                    export default Content;