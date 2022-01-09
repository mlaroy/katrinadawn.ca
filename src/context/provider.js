import React, { useState, createContext } from 'react';

const defaultContext = {
    isNewsletterHidden: false,
    setIsNewsletterHidden: () => { console.log('set theme')},
}

export const ThemeContext = createContext( defaultContext );

export const ThemeProvider = ({ children }) => {
  const [isNewsletterHidden, setIsNewsletterHidden] = useState(false);

  return (
    <ThemeContext.Provider value={{
        isNewsletterHidden,
        changeNewsletterState: () => setIsNewsletterHidden(!isNewsletterHidden)
    }}>
      {children}
    </ThemeContext.Provider>
  )
};
