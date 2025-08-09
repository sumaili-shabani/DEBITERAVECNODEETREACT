import React, { useEffect } from 'react';

const GoogleTranslate2: React.FC = () => {
    useEffect(() => {
        const interval = setInterval(() => {
            if ((window as any).google?.translate?.TranslateElement) {
                new (window as any).google.translate.TranslateElement(
                    {
                        pageLanguage: 'fr',
                        includedLanguages: 'en,fr,es,sw,ln,pt,de',
                        layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE
                    },
                    'google_translate_element2'
                );
                clearInterval(interval);
            }
        }, 500);
    }, []);

    return <div id="google_translate_element2"></div>;
};

export default GoogleTranslate2;

