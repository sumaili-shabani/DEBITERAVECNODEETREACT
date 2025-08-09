import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchItems } from '../../../../../hooks/useCrud';
import { usePagination } from '../../../../../hooks/usePagination';
import LoaderAndError from '../../../../../components/LoaderAndError';
import Pagination from '../../../../../components/Pagination';
import { extractTime, formatDateFR } from '../../../../../api/callApi';

interface UiOffre {
    id?: number;
    titre?: string;
    sousTitre?: string;
    description?: string;
    annee?: string;

    dates?: string;
    lieu?: string;
    organisation?: string;
    lien?: string;

    fichier?: string;
    logoFile?: File;
    slug?: String;
    createdAt?: string;
    updatedAt?: string;

}

export default function Vacancy() {

    // declaration de variables
    const [listData, setDataList] = useState<UiOffre[]>([]);
    const [formData, setFormData] = useState<Partial<UiOffre>>({});
    const [isEditing, setIsEditing] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(2);
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
            const res = await fetchItems<UiOffre>('/fetch_offre_data', {
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
        document.title = "Nos offres d'emploi - Swiftride";
        loadlistData();

    }, [search, currentPage, limit]);
    return (
        <section className="py-5" id="offres-emploi">
            <div className="container">
                <div className="text-center mb-4">
                    <i className="fas fa-briefcase fa-2x text-success mb-2"></i>
                    <h3 className="fw-bold">Rejoignez l’équipe SwiftRide</h3>
                    <p className="text-muted">Découvrez nos opportunités de carrière et postulez directement en ligne.</p>
                </div>

                {/* <!-- Barre de recherche --> */}
                <div className="row justify-content-center mb-4">
                    <div className="col-md-8">

                        <div className="input-group mb-3 shadow-sm rounded-pill">
                            <input className="form-control border-0 rounded-pill-start py-3 px-4"
                                placeholder="Rechercher un poste, une ville..." type="text"
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

                {/* <!-- Liste des offres --> */}
                <div className="row">


                    {
                        listData.length === 0 ? (
                            <LoaderAndError
                                loading={loading}
                                error={error}
                                onClearError={() => setError(null)}
                            />

                        ) : (
                            listData.map((item) => (

                                <div className="col-md-6 mb-4" key={item.id}>
                                    <div className="p-4 bg-white border rounded shadow-sm h-100 hover-shadow transition">
                                        <h5 className="mb-1">{item.titre}</h5>
                                        <div className="text-muted mb-1">
                                            <div className='align-content-between item-content-center'>
                                                <div>
                                                    <i className="fas fa-map-marker-alt me-1 text-success"></i> Lieu d'affectation: {item.lieu}
                                                </div>
                                               <div>
                                                    <i className="fas fa-home fa-sm me-1 text-success"></i>Organisation: {item.organisation}
                                               </div>
                                            </div>
                                        </div>
                                        <p className="text-muted mb-1">
                                            <i className="fas fa-calendar fa-sm me-1 text-success"></i> Date limite de postulation : <br />
                                            {formatDateFR(item.dates ?? '')} {extractTime(item.dates ?? '')}
                                        </p>
                                        <p className="small text-muted">
                                            {item.sousTitre}

                                        </p>
                                        <Link to={`/vacancy-detail/${item.slug}`} className="btn btn-sm btn-outline-success">Voir l’offre</Link>
                                    </div>
                                </div>

                            ))
                        )
                    }



                    {/* <!-- Ajoute d’autres offres ici --> */}
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
