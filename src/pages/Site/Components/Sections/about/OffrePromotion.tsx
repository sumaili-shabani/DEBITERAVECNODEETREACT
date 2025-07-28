import React from 'react'

export default function OffrePromotion() {
    return (
        <div className="container-fluid  py-6">
            <div className="container">
                {/* Titre Section */}
                <div className="row align-items-center mb-5">
                    <div className="col-md-8">
                        <h2 className="display-5 fw-bold text-success">
                            <i className="fas fa-gift me-2"></i> Offres & Récompenses Hebdomadaires
                        </h2>
                        <p className="lead text-muted">
                            Chaque semaine, gagnez des bonus selon vos performances !
                        </p>
                    </div>
                    <div className="col-md-4 text-md-end">
                        <button className="btn btn-sm btn-outline-success rounded-pill px-4 me-2">
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        <button className="btn btn-sm btn-outline-success rounded-pill px-4">
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>

                {/* Cartes Offres */}
                <div className="row g-4">

                    {/* Ambassadeur */}
                    <div className="col-md-6 col-lg-4">
                        <div className="card border-0 rounded-4 shadow-sm h-100 hover-shadow transition">
                            <div className="card-body">
                                <h5 className="fw-bold mb-2 text-primary">
                                    <i className="fas fa-bullhorn me-2"></i> Bonus Ambassadeur
                                </h5>
                                <p className="text-muted">
                                    Si vous parrainez 10 nouveaux utilisateurs actifs cette semaine, recevez un bonus spécial directement dans votre portefeuille.
                                </p>
                                <span className="badge bg-primary bg-opacity-10 text-primary">
                                    +10 Nouveaux Parrains
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Chauffeurs */}
                    <div className="col-md-6 col-lg-4">
                        <div className="card border-0 rounded-4 shadow-sm h-100 hover-shadow transition">
                            <div className="card-body">
                                <h5 className="fw-bold mb-2 text-warning">
                                    <i className="fas fa-taxi me-2"></i> Récompense Chauffeur
                                </h5>
                                <p className="text-muted">
                                    Atteignez <strong>50 courses</strong> dans la semaine et bénéficiez d’un bonus + visibilité prioritaire sur la carte.
                                </p>
                                <span className="badge bg-warning bg-opacity-10 text-warning">
                                    +50 Courses Hebdo
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Clients Fidèles */}
                    <div className="col-md-6 col-lg-4">
                        <div className="card border-0 rounded-4 shadow-sm h-100 hover-shadow transition">
                            <div className="card-body">
                                <h5 className="fw-bold mb-2 text-success">
                                    <i className="fas fa-user-check me-2"></i> Offre Client Fidèle
                                </h5>
                                <p className="text-muted">
                                    Après <strong>10 courses en une semaine</strong>, recevez un bon de réduction de 20% à utiliser la semaine suivante.
                                </p>
                                <span className="badge bg-success bg-opacity-10 text-success">
                                    +10 Courses = -20%
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

               
            </div>
        </div>

    )
}
