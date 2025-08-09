import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchListItems } from '../../../../../hooks/useCrud';
import LoaderAndError from '../../../../../components/LoaderAndError';
import { fileUrl } from '../../../../../api/config';
import DOMPurify from 'dompurify';
interface UiSecteur {
    id?: number;
    nomSecteur?: string;
}


interface UiBlog {
    id?: number;
    titre?: string;
    soustitre?: string;
    description?: string;
    idSecteur?: number;
    icone?: string;
    logoFile?: File;
    slug?: String;

    annee?: string;
    budget?: string;
    organisation?: string;

    createdAt?: string;
    updatedAt?: string;
    // jointire
    secteur_projet?: UiSecteur;

}

export default function SigleProject() {
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

    const [dataInfo, setDataInfo] = useState<UiBlog[]>([]);
    const [categories, setCategories] = useState<UiBlog[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);


    const getSigleData = async () => {
        setLoading(true);
        try {
            const res = await fetchListItems<UiBlog>('/fetch_single_projet_by_slug/' + slug);
            setDataInfo(res.data);
            // console.log(res);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        document.title = `Détail de projet:${slug} - Swiftride`;
        getSigleData();

    }, [slug]);


    return (
        <div className="col-md-12 py-5">
            <div className="row justify-content-center">

                {
                    dataInfo.length === 0 ? (
                        <LoaderAndError
                            loading={loading}
                            error={error}
                            onClearError={() => setError(null)}
                        />

                    ) : (

                        dataInfo.map((item, index) => (

                            <div className="col-lg-11" key={index}>
                                {/* En-tête de l'article */}
                                <h1 className="display-5 fw-bold text-success mb-3">

                                    {item.titre}
                                </h1>

                                <div className="position-relative overflow-hidden" style={{ height: "500px" }}>
                                    <img
                                        src={fileUrl + '/images/' + item.icone}
                                        className="img-fluid w-100 h-100 object-fit-cover card-img-top h-100 object-cover"
                                        alt="Service Taxi Premium"
                                        style={{
                                            transition: "transform 0.5s ease",
                                            minHeight: "100%",
                                            minWidth: "100%"
                                        }}
                                    />
                                    <div className="position-absolute top-0 end-0 m-3">
                                        <span className="badge bg-success bg-opacity-90 text-white">
                                            <i className="fas fa-crown me-2"></i> {item.secteur_projet?.nomSecteur}
                                        </span>
                                    </div>
                                    
                                </div>



                                {/* Contenu de l'article */}
                                <div className="article-content mb-5">

                                    <div className="lead">
                                        {item.soustitre}
                                    </div>

                                    <div className="text-justify col-md-12">
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
