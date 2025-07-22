import React from 'react'
import { Link } from 'react-router-dom'

export default function Service() {
    return (

        <div className="container-fluid py-2">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold mb-3">Nos <span className="text-success">Solutions Clés</span></h2>
                    <p className="lead">Des services sur-mesure pour chaque besoin de mobilité</p>
                </div>

                <div className="row g-4">
                    {/* <!-- Service 1 --> */}
                    <div className="col-md-6 col-lg-4">
                        <div className="card h-100 border-0 shadow-sm hover-shadow transition">
                            <div className="card-body p-4 text-center">
                                <div className="bg-success bg-opacity-10 text-success rounded-circle p-3 d-inline-flex mb-4">
                                    <i className="fas fa-taxi fs-4"></i>
                                </div>
                                <h4 className="fw-bold mb-3">Course rapide</h4>
                                <p className="text-muted mb-4">Arrivée en moins de 5 minutes dans toute la ville</p>
                                <a href="#" className="btn btn-link text-success text-decoration-none p-0">
                                    Lire plus <i className="fas fa-arrow-right ms-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Service 2 --> */}
                    <div className="col-md-6 col-lg-4">
                        <div className="card h-100 border-0 shadow-sm hover-shadow transition">
                            <div className="card-body p-4 text-center">
                                <div className="bg-success bg-opacity-10 text-success rounded-circle p-3 d-inline-flex mb-4">
                                    <i className="fas fa-shield-alt fs-4"></i>
                                </div>
                                <h4 className="fw-bold mb-3">Sécurité</h4>
                                <p className="text-muted mb-4">Chauffeurs vérifiés et trajet suivi en direct</p>
                                <a href="#" className="btn btn-link text-success text-decoration-none p-0">
                                    Lire plus <i className="fas fa-arrow-right ms-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Service 3 --> */}
                    <div className="col-md-6 col-lg-4">
                        <div className="card h-100 border-0 shadow-sm hover-shadow transition">
                            <div className="card-body p-4 text-center">
                                <div className="bg-success bg-opacity-10 text-success rounded-circle p-3 d-inline-flex mb-4">
                                    <i className="fas fa-clock fs-4"></i>
                                </div>
                                <h4 className="fw-bold mb-3">24/7</h4>
                                <p className="text-muted mb-4">Service disponible jour et nuit, 7j/7</p>
                                <a href="#" className="btn btn-link text-success text-decoration-none p-0">
                                    Lire plus <i className="fas fa-arrow-right ms-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Service 4 --> */}
                    <div className="col-md-6 col-lg-4">
                        <div className="card h-100 border-0 shadow-sm hover-shadow transition">
                            <div className="card-body p-4 text-center">
                                <div className="bg-success bg-opacity-10 text-success rounded-circle p-3 d-inline-flex mb-4">
                                    <i className="fas fa-money-bill-wave fs-4"></i>
                                </div>
                                <h4 className="fw-bold mb-3">Tarif fixe</h4>
                                <p className="text-muted mb-4">Prix connu à l'avance, pas de mauvaise surprise</p>
                                <a href="#" className="btn btn-link text-success text-decoration-none p-0">
                                    Lire plus <i className="fas fa-arrow-right ms-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Service 5 --> */}
                    <div className="col-md-6 col-lg-4">
                        <div className="card h-100 border-0 shadow-sm hover-shadow transition">
                            <div className="card-body p-4 text-center">
                                <div className="bg-success bg-opacity-10 text-success rounded-circle p-3 d-inline-flex mb-4">
                                    <i className="fas fa-wheelchair fs-4"></i>
                                </div>
                                <h4 className="fw-bold mb-3">Accessibilité</h4>
                                <p className="text-muted mb-4">Véhicules adaptés aux personnes à mobilité réduite</p>
                                <a href="#" className="btn btn-link text-success text-decoration-none p-0">
                                    Lire plus <i className="fas fa-arrow-right ms-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Service 6 --> */}
                    <div className="col-md-6 col-lg-4">
                        <div className="card h-100 border-0 shadow-sm hover-shadow transition">
                            <div className="card-body p-4 text-center">
                                <div className="bg-success bg-opacity-10 text-success rounded-circle p-3 d-inline-flex mb-4">
                                    <i className="fas fa-briefcase fs-4"></i>
                                </div>
                                <h4 className="fw-bold mb-3">Business</h4>
                                <p className="text-muted mb-4">Service premium pour vos déplacements professionnels</p>
                                <a href="#" className="btn btn-link text-success text-decoration-none p-0">
                                    Lire plus <i className="fas fa-arrow-right ms-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-5">
                    <Link to="/services" className="btn btn-lg btn-outline-success rounded-pill px-4">
                        Voir tous nos services <i className="fas fa-chevron-down ms-2"></i>
                    </Link>
                </div>
            </div>
        </div>

    )
}
