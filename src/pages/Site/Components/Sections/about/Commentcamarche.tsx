import React from 'react'

export default function Commentcamarche() {
    return (
        <section className="container py-5">
            <div className="text-center mb-4">
                <h2 className="fw-bold text-success">Comment ça marche ?</h2>
                <p className="text-muted">Découvrez toutes les étapes pour utiliser <strong>SwiftRide</strong> facilement.</p>
            </div>

            <div className="row text-center g-4">
                <div className="col-md-4">
                    <div className="p-4 border rounded shadow-sm h-100 hover-shadow transition">
                        <i className="fas fa-mobile-alt fa-2x text-success mb-3"></i>
                        <h5 className="fw-bold">1. Téléchargez l'application</h5>
                        <p className="text-muted">Disponible sur Google Play. Installation simple et rapide.</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="p-4 border rounded shadow-sm h-100 hover-shadow transition">
                        <i className="fas fa-map-marker-alt fa-2x text-success mb-3"></i>
                        <h5 className="fw-bold">2. Activez la localisation</h5>
                        <p className="text-muted">Grâce à notre GPS précis, nous vous localisons rapidement.</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="p-4 border rounded shadow-sm h-100 hover-shadow transition">
                        <i className="fas fa-search-location fa-2x text-success mb-3"></i>
                        <h5 className="fw-bold">3. Recherche intelligente</h5>
                        <p className="text-muted">Utilisation de Google Places API pour vous suggérer des lieux pertinents.</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="p-4 border rounded shadow-sm h-100 hover-shadow transition">
                        <i className="fas fa-fire fa-2x text-success mb-3"></i>
                        <h5 className="fw-bold">4. Zone à forte demande</h5>
                        <p className="text-muted">Accès rapide aux zones où la demande de taxis est élevée.</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="p-4 border rounded shadow-sm h-100 hover-shadow transition">
                        <i className="fas fa-car-side fa-2x text-success mb-3"></i>
                        <h5 className="fw-bold">5. Commandez un taxi</h5>
                        <p className="text-muted">Choisissez votre point de départ et votre destination.</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="p-4 border rounded shadow-sm h-100 hover-shadow transition">
                        <i className="fas fa-money-bill-wave fa-2x text-success mb-3"></i>
                        <h5 className="fw-bold">6. Paiement sécurisé</h5>
                        <p className="text-muted">Réglez votre course via Mobile Money ou en espèces.</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="p-4 border rounded shadow-sm h-100 hover-shadow transition">
                        <i className="fas fa-star fa-2x text-success mb-3"></i>
                        <h5 className="fw-bold">7. Évaluez votre course</h5>
                        <p className="text-muted">Laissez un avis pour améliorer le service SwiftRide.</p>
                    </div>
                </div>
            </div>
        </section>


    )
}
