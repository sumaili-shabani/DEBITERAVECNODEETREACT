import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';

export default function SingleBlog() {
    const { slug } = useParams<{ slug: string }>();
    const copyButtonRef = useRef<HTMLButtonElement>(null);

    const handleCopyLink = async () => {
        if (!copyButtonRef.current) return;

        const button = copyButtonRef.current;
        const originalContent = button.innerHTML;

        try {
            await navigator.clipboard.writeText(window.location.href);
            button.innerHTML = '<i class="fas fa-check me-2"></i> Lien copié';

            setTimeout(() => {
                if (copyButtonRef.current) {
                    copyButtonRef.current.innerHTML = originalContent;
                }
            }, 2000);

        } catch (err) {
            console.error('Échec de la copie : ', err);
            button.innerHTML = '<i class="fas fa-exclamation-triangle me-2"></i> Erreur';
            setTimeout(() => {
                if (copyButtonRef.current) {
                    copyButtonRef.current.innerHTML = originalContent;
                }
            }, 2000);
        }
    };

    return (
        <div className="col-md-12 py-5">
            <div className="row justify-content-center">
                <div className="col-lg-11">
                    {/* En-tête de l'article */}
                    <div className="mb-4">
                        <h1 className="display-5 fw-bold text-success mb-3">
                            SWIFTRIDE révolutionne la mobilité urbaine en Afrique:
                            {slug}
                        </h1>
                        <div className="d-flex align-items-center mb-4">
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&auto=format&fit=crop"
                                className="rounded-circle me-3"
                                width="50"
                                height="50"
                                alt="Auteur"
                            />
                            <div>
                                <p className="mb-0 fw-bold">Jean Koffi</p>
                                <p className="text-muted small mb-0">
                                    Publié le 15 juin 2023 · 5 min de lecture
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Image principale */}
                    <div className="mb-5 rounded-4 overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31e8?w=800&auto=format&fit=crop"
                            className="img-fluid w-100"
                            alt="Mobilité urbaine en Afrique"
                        />
                    </div>

                    {/* Contenu de l'article */}
                    <div className="article-content mb-5">
                        <h2 className="h4 fw-bold text-success mb-3">Une solution adaptée aux réalités locales</h2>
                        <p className="lead">
                            SWIFTRIDE a été conçue spécifiquement pour répondre aux défis uniques des villes africaines :
                            infrastructures, densité de population et besoins de sécurité.
                        </p>

                        <p>
                            Notre technologie brevetée combine plusieurs innovations : système de paiement Mobile Money intégré,
                            algorithme d'optimisation des trajets adapté aux routes africaines, et bouton SOS connecté aux
                            services de sécurité locaux.
                        </p>

                        <blockquote className="blockquote bg-success bg-opacity-10 p-4 rounded-4 border-start border-success border-4">
                            <p className="mb-0">
                                "En 12 mois seulement, nous avons réduit de 40% les incidents rapportés lors des déplacements
                                nocturnes dans nos villes partenaires."
                            </p>
                            <footer className="blockquote-footer mt-2">Amina Diallo, Directrice Technique</footer>
                        </blockquote>

                        <h2 className="h4 fw-bold text-success mt-5 mb-3">Des résultats tangibles</h2>
                        <ul className="mb-4">
                            <li className="mb-2">
                                <strong>2 millions</strong> de trajets sécurisés depuis le lancement
                            </li>
                            <li className="mb-2">
                                <strong>92%</strong> de satisfaction client (enquête Q3 2023)
                            </li>
                            <li>
                                <strong>5,000+</strong> chauffeurs formés et certifiés
                            </li>
                        </ul>
                    </div>

                    {/* Bloc de partage */}
                    <div className="card border-0 shadow-sm rounded-4 mb-5">
                        <div className="card-body p-4">
                            <h3 className="h5 fw-bold mb-3 text-success">
                                <i className="fas fa-share-alt me-2"></i>Partager cet article
                            </h3>
                            <div className="d-flex flex-wrap gap-2">
                                {/* Bouton Facebook */}
                                <button
                                    className="btn btn-outline-primary rounded-pill d-flex align-items-center"
                                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                        e.preventDefault();
                                        window.open(
                                            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
                                            '_blank'
                                        );
                                    }}
                                >
                                    <i className="fab fa-facebook-f me-2"></i> Facebook
                                </button>

                                {/* Bouton Twitter */}
                                <button
                                    className="btn btn-outline-info rounded-pill d-flex align-items-center"
                                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                        e.preventDefault();
                                        window.open(
                                            `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(document.title)}`,
                                            '_blank'
                                        );
                                    }}
                                >
                                    <i className="fab fa-twitter me-2"></i> Twitter
                                </button>

                                {/* Bouton LinkedIn */}
                                <button
                                    className="btn btn-outline-secondary rounded-pill d-flex align-items-center"
                                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                        e.preventDefault();
                                        window.open(
                                            `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
                                            '_blank'
                                        );
                                    }}
                                >
                                    <i className="fab fa-linkedin-in me-2"></i> LinkedIn
                                </button>

                                {/* Bouton Copier le lien - Version TypeScript */}
                                <button
                                    ref={copyButtonRef}
                                    className="btn btn-outline-success rounded-pill d-flex align-items-center"
                                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                        e.preventDefault();
                                        handleCopyLink();
                                    }}
                                >
                                    <i className="fas fa-link me-2"></i> Copier le lien
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Auteur */}
                    <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                        <div className="row g-0">
                            <div className="col-md-3">
                                <img
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop"
                                    className="img-fluid h-100"
                                    style={{ objectFit: "cover" }}
                                    alt="Jean Koffi"
                                />
                            </div>
                            <div className="col-md-9">
                                <div className="card-body">
                                    <h3 className="h5 fw-bold">À propos de l'auteur</h3>
                                    <h4 className="h6 text-success mb-3">Jean Koffi - CEO & Fondateur</h4>
                                    <p className="mb-0">
                                        Entrepreneur sériel avec 15 ans d'expérience dans les technologies mobiles en Afrique.
                                        Ancien directeur régional chez Uber Afrique avant de lancer SWIFTRIDE pour répondre
                                        aux besoins spécifiques du continent.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
