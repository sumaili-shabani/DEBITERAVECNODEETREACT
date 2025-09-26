import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { fetchListItems } from '../../../../../hooks/useCrud';
import LoaderAndError from '../../../../../components/LoaderAndError';
import { extractTime, formatDateFR } from '../../../../../api/callApi';
import DOMPurify from 'dompurify';
import { fileUrl } from '../../../../../api/config';
import SEO from './SEO';

interface UiOffre {
    id?: number;
    titre?: string;
    sousTitre?: string;
    description?: string;
    annee?: string;
    dates?: string;  // date limite postulation au format ISO string (ex: "2025-08-10")
    lieu?: string;
    organisation?: string;
    lien?: string;
    fichier?: string;
    logoFile?: File;
    slug?: string;
    createdAt?: string;
    updatedAt?: string;
}

export default function SigleVacancy() {
    const { slug } = useParams<{ slug: string }>();
    const [dataInfo, setDataInfo] = useState<UiOffre[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const getSigleData = async () => {
        setLoading(true);
        try {
            const res = await fetchListItems<UiOffre>('/fetch_single_offre_by_slug/' + slug);
            setDataInfo(res.data);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // document.title = `Détail de l'offre:${slug} - Swiftride`;
        getSigleData();
    }, [slug]);

    // Fonction pour vérifier si la date limite est dépassée
    const isExpired = (dateStr?: string): boolean => {
        if (!dateStr) return false;
        const deadline = new Date(dateStr);
        const today = new Date();
        // On met la date actuelle à minuit pour comparer seulement la date
        today.setHours(0, 0, 0, 0);
        return deadline < today;
    };

    return (
        <section className="py-1" id="detail-offre-emploi">
            <SEO
                title={`Détail de l'offre:${slug} - Swiftride`}
                description={`Découvrez le détail de l'offre ${slug} sur SwiftRide.`}
                keywords={`Offre, ${slug}, SwiftRide`}
                author="SwiftRide"
            />
            <div className="container">
                <div className="mb-2">
                    <Link to="/vacancy" className="btn btn-outline-secondary btn-sm">
                        <i className="fas fa-arrow-left me-2"></i>Retour aux offres
                    </Link>
                </div>

                {
                    dataInfo.length === 0 ? (
                        <LoaderAndError
                            loading={loading}
                            error={error}
                            onClearError={() => setError(null)}
                        />
                    ) : (
                        dataInfo.map((item, index) => (
                            <div className="bg-white shadow-sm rounded p-4" key={index}>
                                <h3 className="fw-bold mb-3">{item.titre}</h3>
                                <div className="text-muted mb-1">
                                    <i className="fas fa-map-marker-alt text-success me-1"></i> {item.lieu}
                                </div>
                                <div className="text-muted mb-1">
                                    <i className="fas fa-calendar-alt text-success me-1"></i> Publié le: {formatDateFR(item.createdAt ?? '')} {extractTime(item.createdAt ?? '')}
                                </div>
                                <div className="text-muted mb-2">
                                    <i className="fas fa-calendar-alt text-success me-1"></i> Date limite de postulation : {formatDateFR(item.dates ?? '')}
                                </div>

                                <div className="text-justify col-md-12">
                                    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.description ?? '') }} />
                                </div>

                                <div className="text-center mt-3">
                                    <a
                                        href={fileUrl + '/images/' + item.fichier}
                                        download={true}
                                        className="btn btn-outline-primary btn-lg me-2"
                                    >
                                        <i className="fas fa-download ms-2"></i> Télécharger le fichier PDF de l'offre
                                    </a>

                                    {/* Condition sur la date limite */}
                                    {isExpired(item.dates) ? (
                                        <div className="alert alert-warning mt-3" role="alert">
                                            La date limite de postulation est dépassée. Les candidatures ne sont plus acceptées.
                                        </div>
                                    ) : (
                                        <a
                                            href={item.lien}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-success btn-lg me-2"
                                        >
                                            Postuler à cette offre <i className="fas fa-paper-plane ms-2"></i>
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
        </section>
    );
}

