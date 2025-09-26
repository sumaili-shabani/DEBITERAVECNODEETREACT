import React, { useEffect } from "react";

interface SEOProps {
    title: string;
    description?: string;
    keywords?: string;
    author?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, author }) => {
    useEffect(() => {
        // Mettre à jour le titre
        document.title = title;

        // Mettre à jour la description
        if (description) {
            let descTag = document.querySelector('meta[name="description"]');
            if (!descTag) {
                descTag = document.createElement("meta");
                descTag.setAttribute("name", "description");
                document.head.appendChild(descTag);
            }
            descTag.setAttribute("content", description);
        }

        // Mettre à jour les mots-clés
        if (keywords) {
            let keywordsTag = document.querySelector('meta[name="keywords"]');
            if (!keywordsTag) {
                keywordsTag = document.createElement("meta");
                keywordsTag.setAttribute("name", "keywords");
                document.head.appendChild(keywordsTag);
            }
            keywordsTag.setAttribute("content", keywords);
        }

        // Mettre à jour l'auteur
        if (author) {
            let authorTag = document.querySelector('meta[name="author"]');
            if (!authorTag) {
                authorTag = document.createElement("meta");
                authorTag.setAttribute("name", "author");
                document.head.appendChild(authorTag);
            }
            authorTag.setAttribute("content", author);
        }

    }, [title, description, keywords, author]);

    return null; // Ce composant ne rend rien visuellement
};

export default SEO;
