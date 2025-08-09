import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchItems } from '../../../../../hooks/useCrud';
import { UiBlog } from '../../../../../api/types';
import { usePagination } from '../../../../../hooks/usePagination';
import LoaderAndError from '../../../../../components/LoaderAndError';
import BlogCard from './BlogCard';

export default function Article() {
    // declaration de variables
    const [listData, setDataList] = useState<UiBlog[]>([]);
    const [formData, setFormData] = useState<Partial<UiBlog>>({});
    const [isEditing, setIsEditing] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(3);
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
            <div className="text-center mb-5">
                <h2 className="display-5 fw-bold mb-3">Nos <span className="text-success">Articles Récents</span></h2>
                <p className="lead text-muted">Découvrez nos conseils et actualités sur la mobilité urbaine</p>
            </div>

            <div className="row g-4">
                {/* Article 1 */}

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
                <Link to="/blogs" className="btn btn-lg btn-outline-success rounded-pill px-4">
                    Voir tous les articles <i className="fas fa-newspaper ms-2"></i>
                </Link>
            </div>
        </div>
    )
}
