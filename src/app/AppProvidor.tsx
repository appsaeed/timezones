import React, { createContext, useContext, useState } from 'react';

// Define the type for the context value
interface ApplicationContext {
    locale: string;
    setLocale: (lang: string) => void;
}

// Create the context with initial values
const AppContext = createContext<ApplicationContext>({
    locale: localStorage.getItem('tz_locale') || 'en_US',
    setLocale: () => { }
});

// Custom hook to access the context
export const useApp = () => useContext(AppContext);

// Define the provider component
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    // State to manage the locale
    const [locale, setLang] = useState<string>(
        localStorage.getItem('tz_locale') || 'en_US'
    );

    // Function to set the locale
    const setLocale = (lang: string) => {
        localStorage.setItem('tz_locale', lang);
        setLang(lang);
    };

    // Define the context value
    const contextValue: ApplicationContext = {
        locale,
        setLocale
    };

    // Return the context provider with its children
    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};
