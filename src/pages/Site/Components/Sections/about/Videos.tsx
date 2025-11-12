import React, { useEffect, useState } from 'react'
import { usePagination } from '../../../../../hooks/usePagination';
import { fetchItems } from '../../../../../hooks/useCrud';
import LoaderAndError from '../../../../../components/LoaderAndError';
import Pagination from '../../../../../components/Pagination';
interface UiVideo {
    id?: number;
    titre?: string;
    description?: string;
    urlYoutube?: string;
    createdAt?: string;
    updatedAt?: string;
}
export default function Videos() {

    // declaration de variables
    const [listData, setDataList] = useState<UiVideo[]>([]);
    const [formData, setFormData] = useState<Partial<UiVideo>>({});
    const [isEditing, setIsEditing] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(4);
    const [totalPages, setTotalPages] = useState(1);
    //fin declaration



    // declaration de la pagination
    const { paginationRange, isCurrentPage, isFirstPage, isLastPage } = usePagination({
        currentPage,
        totalPages,
    });

    // chargement de la table
    const loadlistData = async () => {
        setLoading(true);
        try {
            const res = await fetchItems<UiVideo>('/fetch_video_data', {
                q: search,
                page: currentPage,
                limit,
            });
            setDataList(res.data);
            setTotalPages(res.totalPages);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        document.title = "Nos vidéos - Swiftride";
        loadlistData();
    }, [search, currentPage, limit]);
    return (
        <section className="py-2" id="videos">

            <div className="text-center mb-4">
                <h2 className="display-5 fw-bold mb-3">
                    Nos <span className="text-success">Vidéos</span>
                </h2>
                <p className="lead text-muted">
                    Découvrez SwiftRide en action à travers nos vidéos officielles
                </p>
            </div>

            {/* 🔍 Barre de recherche */}
            <div className="row justify-content-center mb-4">


                <div className="col-md-12">
                    <div className="input-group mb-3 shadow-sm rounded-pill">
                        <input className="form-control border-0 rounded-pill-start py-3 px-4"
                            placeholder="Rechercher un article..." type="text"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setCurrentPage(1);
                            }}

                        />
                        <button className="btn btn-success rounded-pill-end px-4" type="button" onClick={() => loadlistData()}><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </div>
            <div className="container">


                <div className="row g-3 video-full-width-container">
                    {/* État de chargement et d'erreur */}
                    {listData.length === 0 ? (
                        <LoaderAndError
                            loading={loading}
                            error={error}
                            onClearError={() => setError(null)}
                        />
                    ) : (
                        // Liste des vidéos
                        listData.map((item) => (
                            <div
                                className="col-6 video-full-width-container"
                                key={item.id}
                            >
                                {/* Carte de la vidéo */}
                                <div className="card shadow-sm border-0 video-card">
                                    <div className="card-body p-3">
                                        {/* En-tête de la vidéo */}
                                        <div className="mb-3">
                                            <h5 className="card-title fw-bold text-dark mb-2">
                                                {item.titre}
                                            </h5>
                                        </div>

                                        {/* Conteneur de la vidéo */}
                                        <div className="ratio ratio-16x9 rounded overflow-hidden video-iframe-container">
                                            <iframe
                                                src={item.urlYoutube}
                                                title={`Vidéo : ${item.titre}`}
                                                allowFullScreen
                                                className="bg-light w-100 h-100"
                                                style={{
                                                    border: 0,
                                                    minHeight: '250px'
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="row">
                    <div className="text-center mt-5">
                        {/* pagination */}
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            paginationRange={paginationRange}
                            isCurrentPage={isCurrentPage}
                            isFirstPage={isFirstPage}
                            isLastPage={isLastPage}
                            onPageChange={setCurrentPage}
                            textCounter={true}
                        />
                        {/* fin pagination */}
                    </div>
                </div>
            </div>
        </section>

    )
}
