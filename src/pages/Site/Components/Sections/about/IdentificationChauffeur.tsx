import React, { useEffect } from 'react'
import SEO from './SEO';

export default function IdentificationChauffeur() {
    
    return (

        <section className="py-5" id="identification-chauffeurs">
            <SEO
                title="Identification des Chauffeurs - SwiftRide"
                description="Découvrez comment nous identifions et vérifions nos chauffeurs chez SwiftRide."
                keywords="Identification, Chauffeurs, SwiftRide, sécurité"
                author="SwiftRide"
            />
            <div className="container">
                <div className="text-center mb-4">
                    <h2 className="fw-bold text-success">
                        <i className="fas fa-id-badge me-2"></i> Identification des Chauffeurs
                    </h2>
                    <p className="lead text-muted">Chaque chauffeur est vérifié, formé et suivi pour garantir votre sécurité à chaque trajet.</p>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <i className='fas fa-taxi text-center text-success' style={{ fontSize: '250px' }}></i>
                    </div>
                    <div className="col-md-6">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <i className="fas fa-check-circle text-success me-2"></i> Vérification d’identité (nom, photo, permis de conduire).
                            </li>
                            <li className="list-group-item">
                                <i className="fas fa-car text-success me-2"></i> Contrôle régulier du véhicule et des papiers.
                            </li>
                            <li className="list-group-item">
                                <i className="fas fa-star text-success me-2"></i> Système d’évaluation : les utilisateurs peuvent noter et commenter.
                            </li>
                            <li className="list-group-item">
                                <i className="fas fa-user-shield text-success me-2"></i> Suivi de comportement et suspensions en cas de non-conformité.
                            </li>
                        </ul>
                        <div className="mt-4">
                            <button className="btn btn-success btn-lg">
                                <i className="fas fa-eye me-2"></i> Voir le profil du chauffeur
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
