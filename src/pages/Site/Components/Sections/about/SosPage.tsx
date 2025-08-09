import React, { useEffect } from 'react'

export default function SosPage() {
    useEffect(() => {
        document.title = "Assistance d'Urgence (SOS) - Swiftride";

    }, []);
    return (
        // < !--Bloc Interface SOS-- >
        <section className="py-5 bg-opacity-10" id="sos">
            <div className="container">
                <div className="text-center mb-4">
                    <h2 className="fw-bold text-danger">
                        <i className="fas fa-exclamation-triangle me-2"></i> Assistance d'Urgence (SOS)
                    </h2>
                    <p className="lead text-muted">Restez en sécurité à tout moment avec notre bouton SOS intelligent.</p>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img src="https://media.istockphoto.com/id/2200888742/fr/photo/bouton-poussoir-rouge-m%C3%A9tallis%C3%A9-soign%C3%A9-avec-une-ic%C3%B4ne-de-message-d%C3%A9tiquette-sos.webp?a=1&b=1&s=612x612&w=0&k=20&c=vW9oz_y5PrNFOrlONQaHvi2lHd6MR75HagRT5V4b6pc=" className="img-fluid rounded" alt="SOS App Image" />
                    </div>
                    <div className="col-md-6">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <i className="fas fa-bell text-danger me-2"></i> Alertez automatiquement vos contacts d’urgence.
                            </li>
                            <li className="list-group-item">
                                <i className="fas fa-map-marker-alt text-danger me-2"></i> Partagez votre localisation en temps réel.
                            </li>
                            <li className="list-group-item">
                                <i className="fas fa-shield-alt text-danger me-2"></i> Assistance prioritaire par notre équipe de sécurité.
                            </li>
                            <li className="list-group-item">
                                <i className="fas fa-phone-volume text-danger me-2"></i> Appel rapide aux services d’urgence à proximité.
                            </li>
                        </ul>
                        <div className="mt-4">
                            <button className="btn btn-danger btn-lg">
                                <i className="fas fa-exclamation-circle me-2"></i> Activer le SOS
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
