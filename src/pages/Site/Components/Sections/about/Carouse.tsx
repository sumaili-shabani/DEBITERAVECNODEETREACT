import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchItems } from '../../../../../hooks/useCrud';
import { usePagination } from '../../../../../hooks/usePagination';
import { fileUrl } from '../../../../../api/config';
import LoaderAndError from '../../../../../components/LoaderAndError';
import VideoDemo from './VideoDemo';
interface UiCarousel {
    id?: number;
    titre?: string;
    sousTitre?: string;
    description?: string;
    icone?: string;
    logoFile?: File;
    slug?: String;
    createdAt?: string;
    updatedAt?: string;

}

export default function Carousel() {

    // declaration de variables
    const [listData, setDataList] = useState<UiCarousel[]>([]);
    const [formData, setFormData] = useState<Partial<UiCarousel>>({});
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
            const res = await fetchItems<UiCarousel>('/fetch_carousel_data', {
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

    const [show, setShow] = useState(false);

    // URL de ta vidéo YouTube
    const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Remplace par ton lien

    // Pour stopper la vidéo en fermant le modal
    const handleClose = () => {
        setShow(false);
    };

    return (
        <div className="container-fluid px-0 mb-2">
            <div className="row g-0 align-items-center">
                <div className="col-lg-6 px-4 px-md-5 py-5">
                    <h1 className="display-4 fw-bold mb-4">
                        <span className="text-success">SWIFTRIDE</span> - Mobilité intelligente, sécurité absolue
                    </h1>
                    <p className="lead mb-4">
                        L'application de transport qui révolutionne vos déplacements urbains avec des fonctionnalités pensées pour l'Afrique.
                    </p>

                    <div className="col-md-12 mb-2">
                        <span> <i className="fas fa-download me-1 text-success"></i> <b>Téléchargez l'application SwiftRide </b></span>
                        Disponible sur:
                    </div>
                    <div className="d-flex gap-3 flex-wrap">
                        <a href='https://play.google.com/store/apps/details?id=com.dreamofdrc.liftiapp' target='_blank' className="btn btn-success btn-lg rounded-pill px-4">
                            <i className="fab fa-google-play me-2"></i> Android
                        </a>
                        <button className="btn btn-success btn-lg rounded-pill px-4">
                            <i className="fab fa-apple me-2"></i> iOS
                        </button>
                        <button type='button' onClick={() => setShow(true)} className="btn btn-outline-success btn-lg rounded-pill px-4">
                            <i className="fas fa-play-circle me-2"></i> Voir la démo
                        </button>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">

                        {/* Indicateurs dynamiques */}
                        <div className="carousel-indicators">
                            {listData.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    data-bs-target="#heroCarousel"
                                    data-bs-slide-to={index}
                                    className={index === 0 ? "active bg-success" : "bg-success"}
                                    aria-current={index === 0 ? "true" : undefined}
                                ></button>
                            ))}
                        </div>

                        {/* Slides dynamiques */}
                        <div className="carousel-inner">
                            {listData.length === 0 ? (
                                <LoaderAndError
                                    loading={loading}
                                    error={error}
                                    onClearError={() => setError(null)}
                                />
                            ) : (
                                listData.map((item, index) => (
                                    <div
                                        className={`carousel-item ${index === 0 ? "active" : ""}`}
                                        key={item.id}
                                    >
                                        <img
                                            src={fileUrl + "/images/" + item.icone}
                                            className="d-block w-100"
                                            style={{ height: "600px", objectFit: "cover" }}
                                            alt={item.titre || "Image"}
                                        />
                                        <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                                            <h5>{item.titre}</h5>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Contrôles */}
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#heroCarousel"
                            data-bs-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon bg-success rounded-circle p-3"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#heroCarousel"
                            data-bs-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon bg-success rounded-circle p-3"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
            </div>

            <div className="row">
                {/* Modal Bootstrap */}
                {show && (
                    <div
                        className="modal fade show"
                        style={{ display: "block", background: "rgba(0,0,0,0.5)" }}
                        tabIndex={-1}
                    >
                        <div className="modal-dialog modal-lg modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Vidéo de présentation</h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={handleClose}
                                    ></button>
                                </div>
                                <div className="modal-body p-0">
                                    <VideoDemo />

                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
