import React, { useEffect, useState } from 'react';
import { fetchItems } from '../../../../../hooks/useCrud';
import { usePagination } from '../../../../../hooks/usePagination';
import Pagination from '../../../../../components/Pagination';
import LoaderAndError from '../../../../../components/LoaderAndError';
import { fileUrl } from '../../../../../api/config';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { formatDateFR } from '../../../../../api/callApi';

interface UiPhoto {
    id?: number;
    icone?: string;
    logoFile?: File;
    createdAt?: string;
    updatedAt?: string;
}

export default function GaleryHome() {
    const [listData, setDataList] = useState<UiPhoto[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(9);
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


        <div className="sportsmagazine-gallery sportsmagazine-fixture-gallery">
            <ul>

                {listData.length === 0 ? (
                    <LoaderAndError loading={loading} error={error} onClearError={() => setError(null)} />
                ) : (
                    listData.map((item, index) => (
                        <li  key={item.id}>
                            <figure>
                                <a data-fancybox-group="group" href="#" className="fancybox" onClick={() => handleClickImage(index)}>
                                    <img src={fileUrl + '/images/' + item.icone} alt="" /><i className="icon-signs23"></i>
                                </a>
                                <span></span>
                                <figcaption>

                                    <time dateTime="2008-02-14 20:00">{formatDateFR(item.createdAt ?? '')}</time>
                                </figcaption>
                            </figure>
                        </li>

                    ))
                )}

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


            </ul>


        </div>


    );
}
