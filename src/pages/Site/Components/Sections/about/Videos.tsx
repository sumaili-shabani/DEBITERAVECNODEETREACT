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
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Nos <span className="text-success">Vidéos</span></h2>
                    <p className="text-muted">Découvrez SwiftRide en action à travers nos vidéos officielles</p>

                    {/* <!-- Bande de recherche --> */}
                    <div className="col-lg-8 mx-auto">
                        <div className="input-group mb-3 shadow-sm rounded-pill">
                            <input
                                type="text"
                                className="form-control border-0 rounded-pill-start py-3 px-4"
                                placeholder="Rechercher une vidéo..."
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                    setCurrentPage(1);
                                }}
                            />
                            <button className="btn btn-success rounded-pill-end px-4" type="button" onClick={() => loadlistData()}>
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>


                <div className="row g-2">

                    {/* <!-- Vidéo 1 --> */}

                    {
                        listData.length === 0 ? (
                            <LoaderAndError
                                loading={loading}
                                error={error}
                                onClearError={() => setError(null)}
                            />

                        ) : (
                            listData.map((item) => (

                                <div className="col-md-6 mb-4 d-flex" key={item.id}>
                                    <div className="card hover-shadow transition h-100 d-flex flex-column">
                                        <div className="card-body d-flex flex-column flex-grow-1">
                                            <div className="mb-2">
                                                <h5 className="fw-bold mb-1">{item.titre}</h5>
                                                {/* <p className="text-muted small mb-2">{item.description}</p> */}
                                            </div>
                                            <div className="ratio ratio-16x9 shadow-sm rounded flex-grow-1">
                                                <iframe
                                                    src={item.urlYoutube}
                                                    title={item.titre}
                                                    allowFullScreen
                                                    style={{ border: 0 }}
                                                ></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))
                        )
                    }


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
