import React from 'react'
import { Link, useParams } from 'react-router-dom';

export default function SigleVacancy() {
    const { slug } = useParams<{ slug: string }>();
    return (
        <section className="py-1" id="detail-offre-emploi">
            <div className="container">
                <div className="mb-4">
                    <Link to="/vacancy" className="btn btn-outline-secondary btn-sm">
                        <i className="fas fa-arrow-left me-2"></i>Retour aux offres
                    </Link>
                </div>

                <div className="bg-white shadow-sm rounded p-4">
                    <h3 className="fw-bold mb-3">Développeur Mobile Flutter : {slug}</h3>
                    <p className="text-muted mb-2"><i className="fas fa-map-marker-alt text-success me-1"></i> Kinshasa, RDC</p>
                    <p className="text-muted mb-4"><i className="fas fa-calendar-alt text-success me-1"></i> Publié le 22 juillet 2025</p>

                    <h5 className="fw-semibold">Description du poste</h5>
                    <p className="text-muted">
                        En tant que développeur Flutter, vous participerez à la conception, au développement et à la maintenance de notre application mobile SwiftRide. Vous collaborerez avec notre équipe produit et design pour livrer des fonctionnalités performantes et innovantes.
                    </p>

                    <h5 className="fw-semibold mt-4">Responsabilités</h5>
                    <ul className="text-muted">
                        <li>Développer des interfaces mobiles performantes avec Flutter</li>
                        <li>Corriger les bugs et améliorer les performances</li>
                        <li>Collaborer avec les designers et les chefs de projet</li>
                        <li>Assurer la qualité du code et la documentation</li>
                    </ul>

                    <h5 className="fw-semibold mt-4">Profil recherché</h5>
                    <ul className="text-muted">
                        <li>Maîtrise de Flutter et Dart</li>
                        <li>Expérience avec Firebase ou API REST</li>
                        <li>Bonne connaissance des bonnes pratiques de développement mobile</li>
                        <li>Esprit d’équipe, autonomie et créativité</li>
                    </ul>

                    <div className="text-center mt-5">
                        <a href="#form-candidature" className="btn btn-outline-primary btn-lg me-2">
                            <i className="fas fa-download ms-2"></i> Télécharger le fichier PDF de l'offre
                        </a>
                        <a href="#form-candidature" className="btn btn-success btn-lg me-2">
                            Postuler à cette offre <i className="fas fa-paper-plane ms-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}
