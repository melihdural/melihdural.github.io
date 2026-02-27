"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { en } from "../locales/en";
import { tr } from "../locales/tr";

type Language = "en" | "tr";
type Translations = typeof en;

interface LanguageContextProps {
    language: Language;
    t: Translations;
    setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>("en");
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Check local storage for saved preference, else use browser language
        const savedLang = localStorage.getItem("language") as Language;
        if (savedLang && (savedLang === "en" || savedLang === "tr")) {
            setLanguageState(savedLang);
        } else {
            const browserLang = navigator.language.startsWith("tr") ? "tr" : "en";
            setLanguageState(browserLang);
        }

        // Set isClient to true after initial state setup to avoid hydration mismatches
        setIsClient(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("language", lang);
    };

    const t = language === "tr" ? tr : en;

    if (!isClient) {
        // Return a dummy invisible shell or null to prevent hydration mismatch entirely 
        return null;
    }

    return (
        <LanguageContext.Provider value={{ language, t, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
