import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchListItems } from '../../../../../hooks/useCrud';
import LoaderAndError from '../../../../../components/LoaderAndError';
import DOMPurify from 'dompurify';
import SEO from './SEO';
interface UiService {
    id?: number;
    nom?: string;
    titre?: string;
    icone?: string;
    description?: string;
    slug?: string;

    createdAt?: string;
    updatedAt?: string;
}
export default function SingleService() {
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

    const [dataInfo, setDataInfo] = useState<UiService[]>([]);
    const [categories, setCategories] = useState<UiService[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);


    const getSigleData = async () => {
        setLoading(true);
        try {
            const res = await fetchListItems<UiService>('/fetch_service_sigle/' + slug);
            setDataInfo(res.data);
            // console.log(res);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        // document.title = `Détail de service:${slug} - Swiftride`;
        getSigleData();

    }, [slug]);

    return (
        <div className="col-md-12 py-5">
            <SEO
                title={`Détail de service:${slug} - Swiftride`}
                description={`Découvrez le détail du service ${slug} sur SwiftRide.`}
                keywords={`Service, ${slug}, SwiftRide`}
                author="SwiftRide"
            />
            <div className="row justify-content-center">

                {
                    dataInfo.length == 0 ? (
                        <LoaderAndError
                            loading={loading}
                            error={error}
                            onClearError={() => setError(null)}
                        />


                    ) : (
                        dataInfo.map((item, index) => (

                            <div className="col-lg-11">
                                {/* En-tête de l'article */}
                                <h1 className="display-5 fw-bold text-success mb-3">
                                    Détail: {item.nom}

                                </h1>


                                {/* Contenu de l'article */}
                                <div className="article-content mb-5">
                                    <h2 className="h4 fw-bold mb-3">{item.titre}</h2>
                                    <div className="lead">
                                        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.description ?? '') }} />
                                    </div>




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


                            </div>

                        ))
                    )
                }



            </div>
        </div>
    );
}
