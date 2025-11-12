import React from 'react'

export default function Chiffre() {
    return (
        <div className="counter-section">
            <div className="row">
                <div className="col-md-3 col-6">
                    <div className="counter-item">
                        <div className="counter-number" data-count="500">500+</div>
                        <div className="counter-label">Jeunes bénéficiaires</div>
                    </div>
                </div>
                <div className="col-md-3 col-6">
                    <div className="counter-item">
                        <div className="counter-number" data-count="25">20+</div>
                        <div className="counter-label">Équipes soutenues</div>
                    </div>
                </div>
                <div className="col-md-3 col-6">
                    <div className="counter-item">
                        <div className="counter-number" data-count="15">10+</div>
                        <div className="counter-label">Compétitions organisées</div>
                    </div>
                </div>

                <div className="col-md-3 col-6">
                    <div className="counter-item">
                        <div className="counter-number" data-count="1">3+</div>
                        <div className="counter-label">Terrain en construction</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
