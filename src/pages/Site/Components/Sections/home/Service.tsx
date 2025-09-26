import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchItems, fetchListItems } from '../../../../../hooks/useCrud';
import LoaderAndError from '../../../../../components/LoaderAndError';
import { useTranslation } from 'react-i18next';
import { usePagination } from '../../../../../hooks/usePagination';
import Pagination from '../../../../../components/Pagination';
import SEO from '../about/SEO';

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

export default function Service() {

    const [listData, setDataList] = useState<UiService[]>([]);
    const [formData, setFormData] = useState<Partial<UiService>>({});
    const [isEditing, setIsEditing] = useState(false);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(6);
    const [totalPages, setTotalPages] = useState(1);
    //fin declaration

    // pour la langue
    const { t, i18n } = useTranslation();
    // fin langue

    // declaration de la pagination
    const { paginationRange, isCurrentPage, isFirstPage, isLastPage } = usePagination({
        currentPage,
        totalPages,
    });

    // chargement de la table
    const loadlistData = async () => {
        setLoading(true);
        try {
            const res = await fetchItems<UiService>('/fetch_service_data', {
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
        loadlistData();
    }, [search, currentPage, limit]);
    return (

        <div className="container-fluid py-2">
            <SEO
                title="Nos services - Swiftride"
                description="Découvrez nos services de mobilité urbaine sur-mesure."
                keywords="services, mobilité urbaine, Swiftride"
                author="SwiftRide"
            />
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold mb-3">Nos <span className="text-success">Solutions Clés</span></h2>
                    <p className="lead">Des services sur-mesure pour chaque besoin de mobilité</p>
                    <div className="col-lg-8 mx-auto">
                        <div className="input-group mb-3 shadow-sm rounded-pill">
                            <input
                                type="text"
                                className="form-control border-0 rounded-pill-start py-3 px-4"
                                placeholder="Rechercher un service..."
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                    setCurrentPage(1);
                                }}
                            />
                            <button className="btn btn-success rounded-pill-end px-4" type="button"
                                onClick={() => loadlistData()}
                            >
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row g-4">
                    {/* <!-- Service 1 --> */}

                    {
                        listData.length === 0 ? (
                            <LoaderAndError
                                loading={loading}
                                error={error}
                                onClearError={() => setError(null)}
                            />



                        ) : (
                            listData.map((item) => (
                                <div className="col-md-6 col-lg-4" key={item.id}>
                                    <div className="card h-100 border-0 shadow-sm hover-shadow transition">
                                        <div className="card-body p-4 text-center">
                                            <div className="bg-success bg-opacity-10 text-success rounded-circle p-3 d-inline-flex mb-4">
                                                <i className={item.icone + ' fs-4'}></i>
                                            </div>
                                            <h4 className="fw-bold mb-3">{item.nom}</h4>
                                            <p className="text-muted mb-4">{item.titre}</p>
                                            <Link to={`/service/${item.slug}`} className="btn btn-link text-success text-decoration-none p-0">
                                                Lire plus <i className="fas fa-arrow-right ms-2"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            ))
                        )
                    }

                </div>

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

    )
}
