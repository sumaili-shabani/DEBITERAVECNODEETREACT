import React from 'react'

export default function Partagetrajet() {
    return (

        <section className="py-5" id="partage-trajet">
            <div className="container">
                <div className="text-center mb-4">
                    <h2 className="fw-bold text-success">
                        <i className="fas fa-share-square me-2"></i> Partage de Trajet
                    </h2>
                    <p className="lead text-muted">Informez vos proches de votre position et trajet en temps réel pour plus de sécurité.</p>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img src="https://img.icons8.com/color/452/share-rounded.png" className="img-fluid rounded" alt="Partage de Trajet" />
                    </div>
                    <div className="col-md-6">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <i className="fas fa-location-arrow text-success me-2"></i> Partage en direct de votre itinéraire avec vos contacts.
                            </li>
                            <li className="list-group-item">
                                <i className="fas fa-user-friends text-success me-2"></i> Notifiez automatiquement vos proches à chaque étape du trajet.
                            </li>
                            <li className="list-group-item">
                                <i className="fas fa-clock text-success me-2"></i> Suivi en temps réel de votre heure d’arrivée estimée.
                            </li>
                            <li className="list-group-item">
                                <i className="fas fa-lock text-success me-2"></i> Données sécurisées et partagées uniquement avec les personnes autorisées.
                            </li>
                        </ul>
                        <div className="mt-4">
                            <button className="btn btn-success btn-lg">
                                <i className="fas fa-paper-plane me-2"></i> Partager mon trajet
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
