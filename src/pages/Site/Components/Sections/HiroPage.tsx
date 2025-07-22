import React from 'react'
import { Link } from 'react-router-dom'
import Choix from './home/Choix'
import Service from './home/Service'
import Partenaire from './home/Partenaire'
import Projet from './home/Projet'
import Article from './home/Article'

export default function HiroPage() {
    return (
        <div>
            {/* carousel */}
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

            {/* valeur */}
            <div className="container py-5 my-1">
                <div className="text-center mb-5">
                    <h2 className="fw-bold display-5">Nos <span className="text-success">Valeurs Fondatrices</span></h2>
                    <p className="lead">Ce qui fait de SWIFTRIDE le partenaire de mobilité préféré en Afrique</p>
                </div>

                <div className="row g-4">
                    {/* Valeur 1 - Sécurité */}
                    <div className="col-md-6 col-lg-3">
                        <div className="card h-100 border-0 shadow-sm bg-success bg-opacity-10 hover-transform">
                            <div className="card-body p-4 text-center">
                                <div className="icon-xl bg-success text-white rounded-circle mb-4 mx-auto">
                                    <i className="fas fa-shield-alt fs-4"></i>
                                </div>
                                <h4 className="fw-bold text-success">Sécurité Totale</h4>
                                <p className="text-muted">
                                    <strong>Innovation technologique :</strong> Bouton SOS, traçage GPS et chauffeurs vérifiés réduisent les risques de 80% par rapport aux transports traditionnels.
                                </p>
                               
                            </div>
                        </div>
                    </div>

                    {/* Valeur 2 - Innovation */}
                    <div className="col-md-6 col-lg-3">
                        <div className="card h-100 border-0 shadow-sm bg-white hover-transform">
                            <div className="card-body p-4 text-center">
                                <div className="icon-xl bg-success text-white rounded-circle mb-4 mx-auto">
                                    <i className="fas fa-lightbulb fs-4"></i>
                                </div>
                                <h4 className="fw-bold text-success">Innovation Locale</h4>
                                <p className="text-muted">
                                    <strong>Adaptation unique :</strong> Solution optimisée pour les infrastructures africaines avec mode hors-ligne et paiements Mobile Money. <strong>+300%</strong> d'adoption vs solutions importées.
                                </p>
                                
                            </div>
                        </div>
                    </div>

                    {/* Valeur 3 - Accessibilité */}
                    <div className="col-md-6 col-lg-3">
                        <div className="card h-100 border-0 shadow-sm bg-success bg-opacity-10 hover-transform">
                            <div className="card-body p-4 text-center">
                                <div className="icon-xl bg-success text-white rounded-circle mb-4 mx-auto">
                                    <i className="fas fa-hand-holding-usd fs-4"></i>
                                </div>
                                <h4 className="fw-bold text-success">Accessibilité</h4>
                                <p className="text-muted">
                                    <strong>Modèle économique inclusif :</strong> Tarifs jusqu'à 40% moins chers que la concurrence avec qualité premium. <strong>92%</strong> de satisfaction client.
                                </p>
                              
                            </div>
                        </div>
                    </div>

                    {/* Valeur 4 - Impact */}
                    <div className="col-md-6 col-lg-3">
                        <div className="card h-100 border-0 shadow-sm bg-white hover-transform">
                            <div className="card-body p-4 text-center">
                                <div className="icon-xl bg-success text-white rounded-circle mb-4 mx-auto">
                                    <i className="fas fa-chart-line fs-4"></i>
                                </div>
                                <h4 className="fw-bold text-success">Impact Social</h4>
                                <p className="text-muted">
                                    <strong>Création d'emplois :</strong> <strong>5,000+</strong> chauffeurs partenaires formés. <strong>Solution clé</strong> pour la mobilité urbaine durable en Afrique subsaharienne.
                                </p>
                             
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* fin valeur */}

            {/* pourquoi nous choisir */}
            <Choix />
            {/* fin */}

            {/* Nos Services */}
            <Service />
            {/* fin  Nos Services */}

            {/*  Bloc Fonctionnalités (Cartes Illustrées) */}
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Nos <span className="text-success">Fonctionnalités</span> Clés</h2>
                    <p className="text-muted">Découvrez ce qui fait la différence</p>
                </div>

                <div className="row g-4">
                    <div className="col-md-6 col-lg-3">
                        <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                            <div className="card-body p-4 text-center">
                                <div className="icon-lg bg-success bg-opacity-10 text-success rounded-circle mb-4 mx-auto">
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
                                <div className="icon-lg bg-success bg-opacity-10 text-success rounded-circle mb-4 mx-auto">
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
                                <div className="icon-lg bg-success bg-opacity-10 text-success rounded-circle mb-4 mx-auto">
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
                                <div className="icon-lg bg-success bg-opacity-10 text-success rounded-circle mb-4 mx-auto">
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
            {/* les Projet */}
            <Projet />
            {/* fin les Projet */}
            {/* les articles */}
            <Article />
            {/* fin les articles */}

            {/* les partenaires */}
            <Partenaire />
            {/* fin les partenaires */}

        </div>
    )
}
