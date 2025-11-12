import React, { useEffect, useState } from 'react';
import { fetchItems } from '../../../../../hooks/useCrud';
import { usePagination } from '../../../../../hooks/usePagination';
import Pagination from '../../../../../components/Pagination';
import LoaderAndError from '../../../../../components/LoaderAndError';
import { fileUrl } from '../../../../../api/config';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { formatDateTimeFR, truncateText } from '../../../../../api/callApi';

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
            <div className="text-center mb-4">
                <h2 className="display-5 fw-bold mb-3">
                    Nos <span className="text-success">images</span>
                </h2>
                <p className="lead text-muted">
                    Explorez nos moments forts en images
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
            <div className="sportsmagazine-gallery sportsmagazine-fixture-gallery">
             

                <ul className="row g-3">
                    {listData.length === 0 ? (
                        <LoaderAndError loading={loading} error={error} onClearError={() => setError(null)} />
                    ) : (
                        listData.map((item, index) => (
                           
                            <li key={item.id ?? index}>
                                        <figure>
                                            <a data-fancybox-group="group" href={images[index]} className="fancybox" onClick={(e) => { e.preventDefault(); handleClickImage(index); }}>
                                                <img src={images[index]} alt={item.icone ?? ""} />
                                                <i className="icon-signs23"></i>
                                            </a>
                                            <span>12 Photos</span>
                                            <figcaption>
                                                <h6><a href="#">{/* You can replace this with item title if available */}The Champion Final will be played</a></h6>
                                                <time dateTime="2008-02-14 20:00">{formatDateTimeFR(item.createdAt??'')}</time>
                                            </figcaption>
                                        </figure>
                                    </li>
                        ))
                    )}
                </ul>

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
