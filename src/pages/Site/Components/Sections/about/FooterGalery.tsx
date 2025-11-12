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

export default function FooterGalery() {
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
        // document.title = "Explorez nos moments forts en images - Swiftride";
        setPhotoIndex(0);
    }, [listData]);

    const handleClickImage = (index: number) => {
        setPhotoIndex(index);
        setIsOpen(true);
    };

    // DEBUG URLs
    // console.log('Images:', images);

    return (

        <div className="row">

            {listData.length === 0 ? (
                <LoaderAndError loading={loading} error={error} onClearError={() => setError(null)} />
            ) : (
                listData.map((item, index) => (
                    <div className="col-4 col-md-4 mb-2" key={item.id}>
                        <a href="#" className="gallery-thumb" onClick={() => handleClickImage(index)}>
                            <img src={fileUrl + '/images/' + item.icone}
                                alt={item.icone} className="img-fluid" />
                        </a>
                    </div>
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


        </div>



    );
}
