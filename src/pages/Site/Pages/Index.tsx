import React from 'react'
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../context/ThemeContext';
import { Link } from 'react-router-dom';
import HiroPage from '../Components/Sections/HiroPage';



export default function Index() {

    // pour la langue
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang: 'fr' | 'en') => {
        i18n.changeLanguage(lang);
    };
    // fin langue

    const { theme, toggleTheme } = useTheme();
    return (
        <div>
            {/* HiroPage  */}
            <HiroPage />
        </div>
    )
}
