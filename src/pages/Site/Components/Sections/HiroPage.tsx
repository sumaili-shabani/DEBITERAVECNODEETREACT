import React from 'react'
import { Link } from 'react-router-dom'

export default function HiroPage() {
    return (
        <div>
           
            {/* carousel */}
            <div className="container-fluid px-0 mb-5">
                <div className="row g-0 align-items-center">
                    <div className="col-lg-6 px-4 px-md-5 py-5">
                        <h1 className="display-4 fw-bold mb-4">
                            <span className="text-primary">SWIFTRIDE</span> - Mobilité intelligente, sécurité absolue
                        </h1>
                        <p className="lead mb-4">
                            L'application de transport qui révolutionne vos déplacements urbains avec des fonctionnalités pensées pour l'Afrique.
                        </p>

                        <div className="col-md-12 mb-2">
                            <span> <i className="fas fa-download me-1 text-primary"></i> <b>Téléchargez l'application SwiftRide </b></span>
                            Disponible sur:
                        </div>
                        <div className="d-flex gap-3 flex-wrap">
                            <a href='https://play.google.com/store/apps/details?id=com.dreamofdrc.liftiapp' target='_blank' className="btn btn-success btn-lg rounded-pill px-4">
                                <i className="fab fa-google-play me-2"></i> Android
                            </a>
                            <button className="btn btn-success btn-lg rounded-pill px-4">
                                <i className="fab fa-apple me-2"></i> iOS
                            </button>
                            <Link to="/videos" className="btn btn-outline-success btn-lg rounded-pill px-4">
                                <i className="fas fa-play-circle me-2"></i> Voir la démo
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button
                                    type="button"
                                    data-bs-target="#heroCarousel"
                                    data-bs-slide-to="0"
                                    className="active bg-success"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#heroCarousel"
                                    data-bs-slide-to="1"
                                    className="bg-success"
                                ></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img
                                        src="https://images.unsplash.com/photo-1610886125084-91ddf82d3828?w=800&auto=format&fit=crop"
                                        className="d-block w-100"
                                        style={{ height: "600px", objectFit: "cover" }}
                                        alt="Interface SWIFTRIDE"
                                    />
                                    <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                                        <h5>Interface intuitive</h5>
                                        <p>Commandez en quelques clics seulement</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="https://plus.unsplash.com/premium_photo-1744345196336-0646f713321c?w=800&auto=format&fit=crop"
                                        className="d-block w-100"
                                        style={{ height: "600px", objectFit: "cover" }}
                                        alt="Fonctionnalités"
                                    />
                                    <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                                        <h5>Suivi en temps réel</h5>
                                        <p>Visualisez l'arrivée de votre chauffeur</p>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon bg-success rounded-circle p-3" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon bg-success rounded-circle p-3" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* fin carousel */}

            {/*  Bloc Fonctionnalités (Cartes Illustrées) */}
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Nos <span className="text-primary">Fonctionnalités</span> Clés</h2>
                    <p className="text-muted">Découvrez ce qui fait la différence</p>
                </div>

                <div className="row g-4">
                    <div className="col-md-6 col-lg-3">
                        <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                            <div className="card-body p-4 text-center">
                                <div className="icon-lg bg-primary bg-opacity-10 text-primary rounded-circle mb-4 mx-auto">
                                    <i className="fas fa-shield-alt fs-4"></i>
                                </div>
                                <h5 className="fw-bold">Sécurité renforcée</h5>
                                <p className="text-muted">
                                    Bouton SOS, partage de trajet en temps réel et chauffeurs vérifiés
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                            <div className="card-body p-4 text-center">
                                <div className="icon-lg bg-primary bg-opacity-10 text-primary rounded-circle mb-4 mx-auto">
                                    <i className="fas fa-money-bill-wave fs-4"></i>
                                </div>
                                <h5 className="fw-bold">Paiements flexibles</h5>
                                <p className="text-muted">
                                    Mobile Money, carte bancaire ou portefeuille électronique
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                            <div className="card-body p-4 text-center">
                                <div className="icon-lg bg-primary bg-opacity-10 text-primary rounded-circle mb-4 mx-auto">
                                    <i className="fas fa-bolt fs-4"></i>
                                </div>
                                <h5 className="fw-bold">Rapidité</h5>
                                <p className="text-muted">
                                    Temps d'attente moyen de moins de 5 minutes en zone couverte
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                            <div className="card-body p-4 text-center">
                                <div className="icon-lg bg-primary bg-opacity-10 text-primary rounded-circle mb-4 mx-auto">
                                    <i className="fas fa-user-friends fs-4"></i>
                                </div>
                                <h5 className="fw-bold">Support 24/7</h5>
                                <p className="text-muted">
                                    Assistance en français et langues locales par chat ou appel
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* fin  Bloc Fonctionnalités (Cartes Illustrées) */}
        </div>
    )
}
