import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchListItems } from '../../../../../hooks/useCrud';
import LoaderAndError from '../../../../../components/LoaderAndError';
import { fileUrl } from '../../../../../api/config';

interface UiSecteur {
    id?: number;
    nomSecteur?: string;
}


interface UiBlog {
    id?: number;
    titre?: string;
    soustitre?: string;
    description?: string;
    idSecteur?: number;
    icone?: string;
    logoFile?: File;
    slug?: String;

    annee?: string;
    budget?: string;
    organisation?: string;

    createdAt?: string;
    updatedAt?: string;
    // jointire
    secteur_projet?: UiSecteur;

}

export default function Projet() {

    const [projects, setProject] = useState<UiBlog[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);



    const fetchListCategorie = async () => {
        setLoading(true);
        try {
            const res = await fetchListItems<UiBlog>('/fetch_projet_data');
            setProject(res.data);

            // console.log(res);
        } finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        fetchListCategorie();
    }, []);
    return (
        <div className="container py-2">
            <div className="text-center mb-5">
                <h2 className="display-5 fw-bold mb-3">Nos <span className="text-success">Solutions Clés</span></h2>
                <p className="lead text-muted">Des services sur-mesure pour chaque besoin de mobilité</p>
            </div>

            <div className="row g-4">
                {/* Projet 1 */}

                {
                    projects.length === 0 ? (
                        <LoaderAndError
                            loading={loading}
                            error={error}
                            onClearError={() => setError(null)}
                        />

                    ) : (

                        projects.map((item, index) => (


                            <div className="col-md-6 col-lg-4" key={index}>
                                <div className="card border-0 shadow-sm h-100 transition-all hover:shadow-lg">
                                    <div className="position-relative overflow-hidden" style={{ height: "250px" }}>
                                        <img
                                            src={fileUrl + '/images/' + item.icone}
                                            className="img-fluid w-100 h-100 object-fit-cover card-img-top h-100 object-cover"
                                            alt="Service Taxi Premium"
                                            style={{
                                                transition: "transform 0.5s ease",
                                                minHeight: "100%",
                                                minWidth: "100%"
                                            }}
                                        />
                                        <div className="position-absolute top-0 end-0 m-3">
                                            <span className="badge bg-success bg-opacity-90 text-white">
                                                <i className="fas fa-crown me-2"></i> {item.secteur_projet?.nomSecteur}
                                            </span>
                                        </div>
                                        <div className="position-absolute bottom-0 start-0 end-0 p-3 bg-dark bg-opacity-50 text-white">
                                            <h3 className="h5 mb-0">{item.titre}</h3>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="list-unstyled">
                                            {item.soustitre}
                                        </div>
                                    </div>
                                    <div className="card-footer bg-transparent border-0 pt-0">
                                        <Link to={`/project/${item.slug}`} className="btn btn-outline-success w-100 rounded-pill py-2">
                                            Découvrir <i className="fas fa-arrow-right ms-2"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        ))

                    )
                }


               
            </div>

          
        </div>
    )
}
