import React, { useEffect, useState } from 'react'
import { usePagination } from '../../../../../hooks/usePagination';
import { useTranslation } from 'react-i18next';
import { fetchItems, fetchListItems } from '../../../../../hooks/useCrud';
import LoaderAndError from '../../../../../components/LoaderAndError';
import DOMPurify from 'dompurify';

interface Site {
    id?: number;
    nom?: string;
    description?: string;
    email?: string;
    adresse?: string;
    tel1?: string;
    tel2?: string;
    tel3?: string;
    token?: string;
    about?: string;
    mission?: string;
    objectif?: string;
    politique?: string;
    condition?: string;
    logo?: string;
    logoFile?: File;
    facebook?: string;
    linkedin?: string;
    twitter?: string;
    youtube?: string;
    whatsapp?: string;
    createdAt?: string;
    updatedAt?: string;
}


interface UiData {
    id?: number;
    question?: string;
    reponse?: string;

    createdAt?: string;
    updatedAt?: string;
}
export default function Faq() {
    const [listData, setDataList] = useState<UiData[]>([]);
    const [formData, setFormData] = useState<Partial<UiData>>({});
    const [isEditing, setIsEditing] = useState(false);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(10);
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
            const res = await fetchItems<UiData>('/fetch_faq_data', {
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

    const [sites, setSites] = useState<Site[]>([]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await fetchListItems<Site>('/fetch_data_site');
            setSites(res.data);

            // console.log(res);
        } finally {
            setLoading(false);
        }

    }


    useEffect(() => {
        document.title = "Foire Aux Questions - Swiftride";
        loadlistData();
        fetchData();
    }, [search, currentPage, limit]);

    return (
        <div className="container-fluid">
            {/* Hero Section */}
            <div className="row g-0 align-items-center bg-success bg-opacity-10 py-5 rounded-4">
                <div className="container py-5 text-center">
                    <h1 className="display-4 fw-bold mb-3 text-success">
                        <i className="fas fa-question-circle me-3"></i> Foire Aux Questions
                    </h1>
                    <p className="lead mb-4">
                        Trouvez rapidement des réponses à vos questions les plus fréquentes
                    </p>
                    <div className="col-lg-8 mx-auto">
                        <div className="input-group mb-3 shadow-sm rounded-pill">
                            <input
                                type="text"
                                className="form-control border-0 rounded-pill-start py-3 px-4"
                                placeholder="Rechercher une question..."
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
            </div>

            {/* Contenu FAQ */}
            <div className="container py-6 mt-2">
                <div className="row g-4">
                    {/* Catégorie 1 */}
                    <div className="col-lg-12">
                        <div className="card border-0 shadow-sm rounded-4 mb-4">
                            <div className="card-header bg-success text-white rounded-top-4 py-3">
                                <h3 className="h5 mb-0">
                                    <i className="fas fa-user-circle me-2"></i> Questions et préocupations
                                </h3>
                            </div>
                            <div className="accordion accordion-flush" id="accordionCompte">

                               <div className="col-md-12">
                                <div className="row">
                                        {
                                            listData.length === 0 ? (
                                                <LoaderAndError
                                                    loading={loading}
                                                    error={error}
                                                    onClearError={() => setError(null)}
                                                />

                                            ) :
                                                (
                                                    listData.map((item) => (

                                                        <div className="col-md-6 accordion-item border-0" key={item.id}>
                                                            <h4 className="accordion-header">
                                                                <button
                                                                    className="accordion-button collapsed py-3"
                                                                    type="button"
                                                                    data-bs-toggle="collapse"
                                                                    data-bs-target={'#collapseOne_' + item.id}
                                                                >
                                                                    <i className="fas fa-question-circle text-success me-3"></i>
                                                                    {item.question}
                                                                </button>
                                                            </h4>
                                                            <div id={'collapseOne_' + item.id} className="accordion-collapse collapse" data-bs-parent="#accordionCompte">
                                                                <div className="accordion-body">
                                                                    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.reponse ?? '') }} />
                                                                </div>
                                                            </div>
                                                        </div>


                                                    ))
                                                )
                                        }
                                </div>
                               </div>


                            </div>
                        </div>
                    </div>


                </div>

                {/* Section d'aide supplémentaire */}
                <div className="row mt-5">
                    <div className="col-lg-8 mx-auto text-center">
                        <div className="card border-success border-2 rounded-4 bg-success bg-opacity-5">
                            <div className="card-body p-5">
                                <i className="fas fa-envelope display-1 text-success mb-4"></i>
                                <h3 className="fw-bold mb-3">Besoin d'aide supplémentaire ?</h3>
                                <p className="lead mb-4">
                                    Notre équipe support est disponible 24h/24 pour répondre à vos questions.
                                </p>
                                {
                                    sites.map((item, index) => (
                                        <div className="d-flex justify-content-center gap-3 flex-wrap" key={index}>
                                            <a href={'https://wa.me/' + item.tel1} target='_blank' className="btn btn-success btn-lg rounded-pill px-4">
                                                <i className="fas fa-comment-dots me-2"></i> Chat en direct
                                            </a>
                                            <a href={'tel:' + item.tel2} className="btn btn-outline-success btn-lg rounded-pill px-4">
                                                <i className="fas fa-phone-alt me-2"></i> {item.tel2}
                                            </a>
                                        </div>

                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
