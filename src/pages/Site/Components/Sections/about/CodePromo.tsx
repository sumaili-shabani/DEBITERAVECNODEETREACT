import React, { useEffect } from 'react'
import SEO from './SEO';

export default function CodePromo() {
    
    return (

        <section className="py-5" id="promo">
            <SEO
                title="Code promo - SwiftRide"
                description="Découvrez nos codes promotionnels et économisez sur vos trajets avec SwiftRide."
                keywords="code promo, SwiftRide, réduction, taxi, CDF"
                author="SwiftRide"
            />
            <div className="container">
                <div className="text-center mb-4">
                    <h2 className="fw-bold"><i className="fas fa-gift text-success me-2"></i>Codes Promo</h2>
                    <p className="text-muted">Profitez de réductions exclusives sur vos trajets grâce à nos codes promotionnels</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-6 mb-4">
                        <div className="card border-0 shadow rounded-4 h-100 hover-shadow transition">
                            <div className="card-body text-center">
                                <i className="fas fa-percentage fa-3x text-primary mb-3"></i>
                                <h5 className="card-title fw-semibold">Économisez sur vos premiers trajets</h5>
                                <p className="card-text">Utilisez le code <strong>Nos codes promo</strong> pour bénéficier de pourcentage de réduction sur vos 3 premiers trajets.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 mb-4">
                        <div className="card border-0 shadow rounded-4 h-100 hover-shadow transition">
                            <div className="card-body text-center">
                                <i className="fas fa-ticket-alt fa-3x text-success mb-3"></i>
                                <h5 className="card-title fw-semibold">Partagez et gagnez</h5>
                                <p className="card-text">Parrainez vos amis avec votre code unique et recevez chacun un crédit de <strong>$2</strong> sur votre prochain trajet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
