import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchItems } from '../../../../../hooks/useCrud';
import { fileUrl } from '../../../../../api/config';
import { extractTime, formatDateFR, getRelativeTime } from '../../../../../api/callApi';
import Pagination from '../../../../../components/Pagination';
import LoaderAndError from '../../../../../components/LoaderAndError';
import { usePagination } from '../../../../../hooks/usePagination';
import BlogCard from './BlogCard';
import { UiBlog } from '../../../../../api/types';
import SEO from '../about/SEO';



export default function BlogList() {
    // declaration de variables
    const [listData, setDataList] = useState<UiBlog[]>([]);
    const [formData, setFormData] = useState<Partial<UiBlog>>({});
    const [isEditing, setIsEditing] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(6);
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
            const res = await fetchItems<UiBlog>('/fetch_blog_data', {
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
        <div className="container py-5">
            <SEO
                title="Découvrez nos conseils et actualités sur la mobilité urbaine - Swiftride"
                description="Restez informé sur les dernières tendances et conseils en matière de mobilité urbaine."
                keywords="mobilité urbaine, conseils, actualités, Swiftride"
                author="SwiftRide"
            />
            <div className="text-center mb-4">
                <h2 className="display-5 fw-bold mb-3">
                    Nos <span className="text-success">Articles Récents</span>
                </h2>
                <p className="lead text-muted">
                    Découvrez nos conseils et actualités sur la mobilité urbaine
                </p>
            </div>

            {/* 🔍 Barre de recherche */}
            <div className="row justify-content-center mb-4">


                <div className="col-md-6">
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

            <div className="row g-4">
                {
                    listData.length === 0 ? (
                        <LoaderAndError
                            loading={loading}
                            error={error}
                            onClearError={() => setError(null)}
                        />

                    ) : (
                        listData.map((article) => (
                            <BlogCard key={article.id} article={article} />
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

    )
}
