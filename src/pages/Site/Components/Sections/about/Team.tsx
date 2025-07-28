import React from 'react'
import { Link } from 'react-router-dom'

export default function Team() {
    return (
        <div className="container py-6">
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
                <div className="col-md-6 col-lg-4">
                    <div className="card border-0 shadow-sm h-100 hover-lift-team">
                        <div className="card-img-top overflow-hidden" style={{ height: "250px" }}>
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop"
                                className="img-fluid w-100 h-100"
                                style={{ objectFit: "cover" }}
                                alt="Directeur Général"
                            />
                            <div className="position-absolute bottom-0 start-0 end-0 p-3 bg-success bg-opacity-90 text-white">
                                <h4 className="mb-0">Jean Koffi</h4>
                                <p className="mb-0">CEO & Fondateur</p>
                            </div>
                        </div>
                        <div className="card-body text-center">
                            <p className="text-muted">
                                Ancien de Google Afrique, visionnaire de la mobilité urbaine avec 15 ans d'expérience.
                            </p>
                            <div className="d-flex justify-content-center gap-3">
                                <a href="#" className="text-success">
                                    <i className="fab fa-linkedin-in fa-lg"></i>
                                </a>
                                <a href="#" className="text-success">
                                    <i className="fab fa-twitter fa-lg"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Membre 2 - CTO */}
                <div className="col-md-6 col-lg-4">
                    <div className="card border-0 shadow-sm h-100 hover-lift-team">
                        <div className="card-img-top overflow-hidden" style={{ height: "250px" }}>
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop"
                                className="img-fluid w-100 h-100"
                                style={{ objectFit: "cover" }}
                                alt="Directeur Technique"
                            />
                            <div className="position-absolute bottom-0 start-0 end-0 p-3 bg-success bg-opacity-90 text-white">
                                <h4 className="mb-0">Amina Diallo</h4>
                                <p className="mb-0">Directrice Technique</p>
                            </div>
                        </div>
                        <div className="card-body text-center">
                            <p className="text-muted">
                                Architecte système primée, spécialiste en IA et sécurité des applications mobiles.
                            </p>
                            <div className="d-flex justify-content-center gap-3">
                                <a href="#" className="text-success">
                                    <i className="fab fa-github fa-lg"></i>
                                </a>
                                <a href="#" className="text-success">
                                    <i className="fab fa-medium fa-lg"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Membre 3 - Responsable Sécurité */}
                <div className="col-md-6 col-lg-4">
                    <div className="card border-0 shadow-sm h-100 hover-lift-team">
                        <div className="card-img-top overflow-hidden" style={{ height: "250px" }}>
                            <img
                                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop"
                                className="img-fluid w-100 h-100"
                                style={{ objectFit: "cover" }}
                                alt="Responsable Sécurité"
                            />
                            <div className="position-absolute bottom-0 start-0 end-0 p-3 bg-success bg-opacity-90 text-white">
                                <h4 className="mb-0">Marc Kouamé</h4>
                                <p className="mb-0">Responsable Sécurité</p>
                            </div>
                        </div>
                        <div className="card-body text-center">
                            <p className="text-muted">
                                Ancien officier de police, expert en systèmes de protection des utilisateurs.
                            </p>
                            <div className="d-flex justify-content-center gap-3">
                                <a href="#" className="text-success">
                                    <i className="fas fa-shield-alt fa-lg"></i>
                                </a>
                                <a href="#" className="text-success">
                                    <i className="fab fa-twitter fa-lg"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Membre 4 - Directrice Expérience Client */}
                <div className="col-md-6 col-lg-4">
                    <div className="card border-0 shadow-sm h-100 hover-lift-team">
                        <div className="card-img-top overflow-hidden" style={{ height: "250px" }}>
                            <img
                                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop"
                                className="img-fluid w-100 h-100"
                                style={{ objectFit: "cover" }}
                                alt="Directrice Expérience Client"
                            />
                            <div className="position-absolute bottom-0 start-0 end-0 p-3 bg-success bg-opacity-90 text-white">
                                <h4 className="mb-0">Élodie N'Guessan</h4>
                                <p className="mb-0">Expérience Client</p>
                            </div>
                        </div>
                        <div className="card-body text-center">
                            <p className="text-muted">
                                Spécialiste UX/UI, elle conçoit l'expérience utilisateur la plus intuitive d'Afrique.
                            </p>
                            <div className="d-flex justify-content-center gap-3">
                                <a href="#" className="text-success">
                                    <i className="fab fa-behance fa-lg"></i>
                                </a>
                                <a href="#" className="text-success">
                                    <i className="fab fa-dribbble fa-lg"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bloc Recrutement */}
            <div className="row mt-6">
                <div className="col-lg-10 mx-auto mt-4">
                    <div className="bg-success text-white rounded-4 overflow-hidden">
                        <div className="row g-0 align-items-center">
                            <div className="col-md-6 p-5">
                                <h3 className="fw-bold mb-3">Rejoignez Notre Aventure</h3>
                                <p className="mb-4">
                                    Nous recrutons les meilleurs talents pour révolutionner la mobilité africaine.
                                </p>
                                <Link to="/offers" className="btn btn-light rounded-pill px-4 text-success">
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
