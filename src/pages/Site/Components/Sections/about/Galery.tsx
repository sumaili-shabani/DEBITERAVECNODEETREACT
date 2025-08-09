import React, { useEffect, useState } from 'react';
import { fetchItems } from '../../../../../hooks/useCrud';
import { usePagination } from '../../../../../hooks/usePagination';
import Pagination from '../../../../../components/Pagination';
import LoaderAndError from '../../../../../components/LoaderAndError';
import { fileUrl } from '../../../../../api/config';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

interface UiPhoto {
    id?: number;
    icone?: string;
    logoFile?: File;
    createdAt?: string;
    updatedAt?: string;
}

export default function Galery() {
    const [listData, setDataList] = useState<UiPhoto[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(12);
    const [totalPages, setTotalPages] = useState(1);

    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const { paginationRange, isCurrentPage, isFirstPage, isLastPage } = usePagination({
        currentPage,
        totalPages,
    });

    const loadlistData = async () => {
        setLoading(true);
        try {
            const res = await fetchItems<UiPhoto>('/fetch_galery_data', {
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

    const images = listData.map(item => fileUrl + '/images/' + item.icone);

    // Reset photoIndex quand listData change
    useEffect(() => {
        document.title = "Explorez nos moments forts en images - Swiftride";
        setPhotoIndex(0);
    }, [listData]);

    const handleClickImage = (index: number) => {
        setPhotoIndex(index);
        setIsOpen(true);
    };

    // DEBUG URLs
    // console.log('Images:', images);

    return (
        <section className="py-1" id="galerie">
            <div className="container">
                <div className="text-center mb-2">
                    <h2 className="fw-bold">Galerie <span className="text-success">SwiftRide</span></h2>
                    <p className="text-muted">Explorez nos moments forts en images</p>
                </div>

                <div className="row justify-content-center mb-1">
                    <div className="col-md-8">
                        <div className="input-group mb-3 shadow-sm rounded-pill">
                            <input
                                className="form-control border-0 rounded-pill-start py-3 px-4"
                                placeholder="Rechercher une image..."
                                type="text"
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                    setCurrentPage(1);
                                }}
                            />
                            <button
                                className="btn btn-success rounded-pill-end px-4"
                                type="button"
                                onClick={() => loadlistData()}
                            >
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row g-3">
                    {listData.length === 0 ? (
                        <LoaderAndError loading={loading} error={error} onClearError={() => setError(null)} />
                    ) : (
                        listData.map((item, index) => (
                            <div className="col-md-4" style={{ width: '300px' }} key={item.id}>
                                <div
                                    className="card border-0 shadow-sm img-fluid w-100 h-100 object-fit-cover card-img-top"
                                    style={{ objectFit: "cover", minHeight: "100%", cursor: 'pointer' }}
                                    onClick={() => handleClickImage(index)}
                                >
                                    <img
                                        src={fileUrl + '/images/' + item.icone}
                                        alt={item.icone}
                                        className="img-fluid w-100 h-100"
                                    />
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="row">
                    <div className="text-center mt-1">
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
                    </div>
                </div>

                {isOpen && images.length > 0 && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => setIsOpen(false)}
                        onMovePrevRequest={() =>
                            setPhotoIndex((photoIndex + images.length - 1) % images.length)
                        }
                        onMoveNextRequest={() =>
                            setPhotoIndex((photoIndex + 1) % images.length)
                        }
                    />
                )}
            </div>
        </section>
    );
}
