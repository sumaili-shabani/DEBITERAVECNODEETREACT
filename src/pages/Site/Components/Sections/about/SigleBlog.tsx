import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UiBlog } from '../../../../../api/types';
import { fetchListItems } from '../../../../../hooks/useCrud';
import LoaderAndError from '../../../../../components/LoaderAndError';
import { fileUrl } from '../../../../../api/config';
import { getRelativeTime } from '../../../../../api/callApi';
import SEO from './SEO';

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

    const [dataInfo, setDataInfo] = useState<UiBlog[]>([]);
    const [categories, setCategories] = useState<UiBlog[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);


    const getSigleData = async () => {
        setLoading(true);
        try {
            const res = await fetchListItems<UiBlog>('/fetch_single_blog_by_slug/' + slug);
            setDataInfo(res.data);
            // console.log(res);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        // document.title = `Détail de l'article:${slug} - Swiftride`;
        getSigleData();

    }, [slug]);




    return (
        <div className="col-md-12 py-5">
            <SEO
                title={`Détail de l'article:${slug} - Swiftride`}
                description={`Découvrez le détail de l'article ${slug} sur SwiftRide.`}
                keywords={`Article, ${slug}, SwiftRide`}
                author="SwiftRide"
            />

            {
                dataInfo.length === 0 ? (
                    <LoaderAndError
                        loading={loading}
                        error={error}
                        onClearError={() => setError(null)}
                    />

                ) : (

                    dataInfo.map((article, index) => (
                        <div className="container py-5" key={index}>

                            <h1 className="display-5 fw-bold text-success mb-3">

                                {article.titre}
                            </h1>

                            <p className="text-muted mb-2">
                                Publié {getRelativeTime(article.createdAt ?? "")}
                                {article.category_blog && (
                                    <>
                                        {" "}dans <strong>{article.category_blog.titre}</strong>
                                    </>
                                )}
                            </p>

                            {article.icone && (
                                <div className="position-relative overflow-hidden" style={{ height: "500px" }} key={index}>
                                    <img
                                        src={fileUrl + '/images/' + article.icone}
                                        className="img-fluid w-100 h-100 object-fit-cover card-img-top h-100 object-cover"
                                        alt="Service Taxi Premium"
                                        style={{
                                            transition: "transform 0.5s ease",
                                            minHeight: "100%",
                                            minWidth: "100%"
                                        }}
                                    />


                                </div>
                            )}

                            {article.sousTitre && <h4 className="mb-3 text-secondary">{article.sousTitre}</h4>}

                            {article.description && (
                                <div
                                    className="article-description text-justify"
                                    dangerouslySetInnerHTML={{ __html: article.description }}
                                />
                            )}

                            {/* Tags */}
                            <div className="mt-4">
                                {article.tug
                                    ?.split(",")
                                    .map((tag) => tag.trim())
                                    .filter((tag) => tag.length > 0)
                                    .map((tag, idx) => (
                                        <span key={idx} className="badge rounded-pill bg-secondary me-2 mb-2">
                                            {tag}
                                        </span>
                                    ))}
                            </div>


                        </div>
                    ))

                )
            }

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
    );
}
