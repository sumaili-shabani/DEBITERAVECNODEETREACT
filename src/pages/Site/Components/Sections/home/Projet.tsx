import React from 'react'
import { Link } from 'react-router-dom'

export default function Projet() {
    return (
        <div className="container py-2">
            <div className="text-center mb-5">
                <h2 className="display-5 fw-bold mb-3">Nos <span className="text-success">Solutions Clés</span></h2>
                <p className="lead text-muted">Des services sur-mesure pour chaque besoin de mobilité</p>
            </div>

            <div className="row g-4">
                {/* Projet 1 */}
                <div className="col-md-6 col-lg-4">
                    <div className="card border-0 shadow-sm h-100 transition-all hover:shadow-lg">
                        <div className="position-relative overflow-hidden" style={{ height: "200px" }}>
                            <img
                                src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&auto=format&fit=crop&q=60"
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
                                    <i className="fas fa-crown me-2"></i> Premium
                                </span>
                            </div>
                            <div className="position-absolute bottom-0 start-0 end-0 p-3 bg-dark bg-opacity-50 text-white">
                                <h3 className="h5 mb-0">SwiftPremium</h3>
                            </div>
                        </div>
                        <div className="card-body">
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <i className="fas fa-check-circle text-success me-2"></i>
                                    Véhicules haut de gamme avec chauffeurs certifiés
                                </li>
                                <li className="mb-2">
                                    <i className="fas fa-check-circle text-success me-2"></i>
                                    Trajets illimités
                                </li>
                                <li>
                                    <i className="fas fa-check-circle text-success me-2"></i>
                                    Wi-Fi et chargeurs intégrés
                                </li>
                            </ul>
                        </div>
                        <div className="card-footer bg-transparent border-0 pt-0">
                            <button className="btn btn-outline-success w-100 rounded-pill py-2">
                                Découvrir <i className="fas fa-arrow-right ms-2"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Projet 2 */}
                <div className="col-md-6 col-lg-4">
                    <div className="card border-0 shadow-sm h-100 transition-all hover:shadow-lg">
                        <div className="position-relative overflow-hidden" style={{ height: "200px" }}>
                            <img
                                src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&auto=format&fit=crop&q=60"
                                className="img-fluid w-100 h-100 object-fit-cover card-img-top h-100 object-cover"
                                alt="Service Moto"
                                style={{
                                    transition: "transform 0.5s ease",
                                    minHeight: "100%",
                                    minWidth: "100%"
                                }}
                            />
                            <div className="position-absolute top-0 end-0 m-3">
                                <span className="badge bg-success bg-opacity-90 text-white">
                                    <i className="fas fa-bolt me-2"></i> Rapidité
                                </span>
                            </div>
                            <div className="position-absolute bottom-0 start-0 end-0 p-3 bg-dark bg-opacity-50 text-white">
                                <h3 className="h5 mb-0">SwiftMoto</h3>
                            </div>
                        </div>
                        <div className="card-body">
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <i className="fas fa-check-circle text-success me-2"></i>
                                    Livraisons et courses express en moins de 15mn
                                </li>
                                <li className="mb-2">
                                    <i className="fas fa-check-circle text-success me-2"></i>
                                    Casques certifiés
                                </li>
                                <li>
                                    <i className="fas fa-check-circle text-success me-2"></i>
                                    50% moins cher qu'un taxi
                                </li>
                            </ul>
                        </div>
                        <div className="card-footer bg-transparent border-0 pt-0">
                            <button className="btn btn-outline-success w-100 rounded-pill py-2">
                                Commander <i className="fas fa-motorcycle ms-2"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Projet 3 */}
                <div className="col-md-6 col-lg-4">
                    <div className="card border-0 shadow-sm h-100 transition-all hover:shadow-lg">
                        <div className="position-relative overflow-hidden" style={{ height: "200px" }}>
                            <img
                                src="https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&auto=format&fit=crop&q=60"
                                className="img-fluid w-100 h-100 object-fit-cover card-img-top h-100 object-cover"
                                alt="Service Entreprise"
                                style={{
                                    transition: "transform 0.5s ease",
                                    minHeight: "100%",
                                    minWidth: "100%"
                                }}
                            />
                            <div className="position-absolute top-0 end-0 m-3">
                                <span className="badge bg-success bg-opacity-90 text-white">
                                    <i className="fas fa-building me-2"></i> Corporate
                                </span>
                            </div>
                            <div className="position-absolute bottom-0 start-0 end-0 p-3 bg-dark bg-opacity-50 text-white">
                                <h3 className="h5 mb-0">SwiftPro</h3>
                            </div>
                        </div>
                        <div className="card-body">
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <i className="fas fa-check-circle text-success me-2"></i>
                                    Solution complète pour les professionnels
                                </li>
                                <li className="mb-2">
                                    <i className="fas fa-check-circle text-success me-2"></i>
                                    Facturation centralisée
                                </li>
                                <li>
                                    <i className="fas fa-check-circle text-success me-2"></i>
                                    Dashboard analytique
                                </li>
                            </ul>
                        </div>
                        <div className="card-footer bg-transparent border-0 pt-0">
                            <button className="btn btn-success w-100 rounded-pill py-2">
                                Demander un devis <i className="fas fa-file-contract ms-2"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="text-center mt-5">
                <Link
                    to="/projects"
                    className="btn btn-lg btn-outline-success rounded-pill px-4 d-inline-flex align-items-center"
                >
                    Voir tous nos projets <i className="fas fa-chevron-down ms-2"></i>
                </Link>
            </div> */}
        </div>
    )
}
