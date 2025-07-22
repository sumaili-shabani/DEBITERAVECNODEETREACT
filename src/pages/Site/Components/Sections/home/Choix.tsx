import React from 'react'
import car1 from '../../../../../assets/logos/image_app_swift_car.png'; // Chemin relatif depuis le composant

export default function Choix() {
    return (
        <div className="container-fluid bg-success bg-opacity-5 py-6 transition-colors duration-300 mb-2 mt-4">
            <div className="container py-2">
                <div className="row align-items-center g-5">
                    <div className="col-lg-6">
                        <img
                            src={car1}
                            className="img-fluid rounded-3  dark:shadow-gray-900 transition-transform hover:scale-[1.02] duration-300"
                            alt="Équipe SWIFTRIDE"
                            loading="lazy"
                        />
                    </div>
                    <div className="col-lg-6 mb-3">
                        <h2 className="display-5 fw-bold mb-5 dark:text-white">
                            <span className="text-white">Pourquoi SWIFTRIDE</span> domine le marché ?
                        </h2>

                        <div className="vstack gap-4">
                            <div className="d-flex align-items-start p-4 bg-white dark:bg-gray-700 rounded-3 shadow-sm hover:shadow-md transition-all">
                                <div className="bg-success bg-opacity-25 text-success rounded-3 p-3 me-4 flex-shrink-0">
                                    <i className="fas fa-trophy fs-4"></i>
                                </div>
                                <div>
                                    <h4 className="text-success mb-2">Leader technologique</h4>
                                    <p className="text-muted dark:text-gray-300 mb-0">
                                        <strong className="text-muted">Seule application</strong> avec système anti-agression breveté et
                                        <strong className="text-muted"> reconnaissance faciale</strong> des chauffeurs. <span className="text-success fw-semibold">● 0 incident</span> en 2023.
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex align-items-start p-4 bg-white dark:bg-gray-700 rounded-3 shadow-sm hover:shadow-md transition-all">
                                <div className="bg-success bg-opacity-25 text-success rounded-3 p-3 me-4 flex-shrink-0">
                                    <i className="fas fa-chart-line fs-4"></i>
                                </div>
                                <div>
                                    <h4 className="text-success mb-2">Croissance exponentielle</h4>
                                    <p className="text-muted dark:text-gray-300 mb-0">
                                        <strong className="text-muted">+450%</strong> d'utilisateurs en 1 an. <strong className="text-muted">Couverture 8x</strong> plus étendue que nos concurrents directs.
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex align-items-start p-4 bg-white dark:bg-gray-700 rounded-3 shadow-sm hover:shadow-md transition-all">
                                <div className="bg-success bg-opacity-25 text-success rounded-3 p-3 me-4 flex-shrink-0">
                                    <i className="fas fa-cogs fs-4"></i>
                                </div>
                                <div>
                                    <h4 className="text-success mb-2">Optimisation intelligente</h4>
                                    <p className="text-muted dark:text-gray-300 mb-0">
                                        <strong className="text-muted">IA propriétaire</strong> réduisant les temps d'attente de <strong className="text-muted">68%</strong> et les coûts opérationnels de <strong className="text-muted">40%</strong>.
                                    </p>
                                </div>
                            </div>
                        </div>

                      
                    </div>
                </div>
            </div>
        </div>
    )
}
