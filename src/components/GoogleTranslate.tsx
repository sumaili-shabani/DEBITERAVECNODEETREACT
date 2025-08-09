import React, { useEffect } from 'react';

const GoogleTranslate: React.FC = () => {
    useEffect(() => {
        const interval = setInterval(() => {
            if ((window as any).google?.translate?.TranslateElement) {
                new (window as any).google.translate.TranslateElement(
                    {
                        pageLanguage: 'fr',
                        includedLanguages: 'en,fr,es,sw,ln,pt,de',
                        layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE
                    },
                    'google_translate_element'
                );
                clearInterval(interval);
            }
        }, 500);
    }, []);

    return <div className='btn btn-sm btn-outline-secondary' id="google_translate_element"></div>;
};

export default GoogleTranslate;

