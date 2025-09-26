import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchItems } from '../../../../../hooks/useCrud';
import { usePagination } from '../../../../../hooks/usePagination';
import LoaderAndError from '../../../../../components/LoaderAndError';
import Pagination from '../../../../../components/Pagination';
import { fileUrl } from '../../../../../api/config';
import SEO from './SEO';

interface UiTeam {
    id?: number;
    nom?: string;
    fonction?: string;
    email?: string;
    logo?: string;
    telephone?: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    logoFile?: File;

    createdAt?: string;
    updatedAt?: string;

}




export default function Team() {

    // declaration de variables
    const [listData, setDataList] = useState<UiTeam[]>([]);
    const [formData, setFormData] = useState<Partial<UiTeam>>({});
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
            const res = await fetchItems<UiTeam>('/fetch_team_data', {
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
        <div className="container py-6">
            <SEO
                title="Les talents derrière la révolution - Swiftride"
                description="Découvrez notre équipe de professionnels dédiés à la transformation de l'industrie du transport."
                keywords="équipe, talents, Swiftride, transport, innovation"
                author="SwiftRide"
            />
            {/* Titre Section */}
            <div className="text-center mb-6">
                <h2 className="display-5 fw-bold text-success">
                    <i className="fas fa-users me-3"></i>Rencontrez Notre Équipe
                </h2>
                <p className="lead text-muted">
                    Les talents derrière la révolution SWIFTRIDE
                </p>
            </div>

            {/* Grille des Membres */}
            <div className="row g-4 justify-content-center">
                {/* Membre 1 - CEO */}


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
                                <div className="card border-0 shadow-sm h-100 hover-lift-team">
                                    <div className="card-img-top overflow-hidden" style={{ height: "250px" }}>
                                        <img
                                            src={fileUrl + '/images/' + item.logo!}
                                            className="img-fluid w-100 h-100"
                                            style={{ objectFit: "cover" }}
                                            alt="Directeur Général"
                                        />
                                        <div className="position-absolute bottom-0 start-0 end-0 p-3 bg-success bg-opacity-90 text-white">
                                            <h4 className="mb-0">{item.nom}</h4>
                                            {/* <p className="mb-0">{item.fonction}</p> */}
                                        </div>
                                    </div>
                                    <div className="card-body text-center">
                                        <p className="text-muted">
                                            {item.fonction}
                                        </p>
                                        <div className="d-flex justify-content-center gap-3">
                                            {item.telephone && item.telephone.trim() !== '' && (
                                                <a href={'tel:' + item.telephone} className="text-success">
                                                    <i className="fas fa-phone fa-lg"></i>
                                                </a>
                                            )}

                                            {item.email && item.email.trim() !== '' && (
                                                <a href={'mailto:' + item.email} className="text-success">
                                                    <i className="fas fa-envelope fa-lg"></i>
                                                </a>
                                            )}

                                            {item.facebook && item.facebook.trim() !== '' && (
                                                <a href={item.facebook} target="_blank" rel="noopener noreferrer" className="text-success">
                                                    <i className="fab fa-facebook fa-lg"></i>
                                                </a>
                                            )}

                                            {item.twitter && item.twitter.trim() !== '' && (
                                                <a href={item.twitter} target="_blank" rel="noopener noreferrer" className="text-success">
                                                    <i className="fab fa-twitter fa-lg"></i>
                                                </a>
                                            )}

                                            {item.linkedin && item.linkedin.trim() !== '' && (
                                                <a href={item.linkedin} target="_blank" rel="noopener noreferrer" className="text-success">
                                                    <i className="fab fa-linkedin fa-lg"></i>
                                                </a>
                                            )}

                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))
                    )
                }


            </div>

            <div className="row mb-1">
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

            <hr className='text-muted' />

            {/* Bloc Recrutement */}
            <div className="row mt-1">
                <div className="col-lg-10 mx-auto mt-4">
                    <div className="bg-success text-white rounded-4 overflow-hidden">
                        <div className="row g-0 align-items-center">
                            <div className="col-md-6 p-5">
                                <h3 className="fw-bold mb-3">Rejoignez Notre Aventure</h3>
                                <p className="mb-4">
                                    Nous recrutons les meilleurs talents pour révolutionner la mobilité africaine.
                                </p>
                                <Link to="/vacancy" className="btn btn-light rounded-pill px-4 text-success">
                                    Voir les offres <i className="fas fa-arrow-right ms-2"></i>
                                </Link>
                            </div>
                            <div className="col-md-6 d-none d-md-block">
                                <img
                                    src="https://images.unsplash.com/photo-1521791055366-0d553872125f?w=800&auto=format&fit=crop"
                                    className="img-fluid h-100"
                                    style={{ objectFit: "cover", minHeight: "200px" }}
                                    alt="Carrière SWIFTRIDE"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
