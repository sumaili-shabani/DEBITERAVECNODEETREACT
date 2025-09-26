import React from 'react'
import { Link } from 'react-router-dom';
import SEO from './Site/Components/Sections/about/SEO';

export default function NotFoundPage() {
  return (

    <div className="container">
      <SEO
        title="Page non trouvée - SwiftRide"
        description="La page que vous recherchez n'existe pas."
        keywords="404, Page non trouvée, SwiftRide"
        author="SwiftRide"
      />
      {/* Outer Row */}
      <div className="row justify-content-center">
        <div className="col-xl-3 col-lg-3 col-md-3"></div>
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              {/* Nested Row within Card Body */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="p-5">
                    {/* 404 Error Text */}
                    <div className="text-center">
                      <div className="error mx-auto" data-text="404" style={{ fontSize: '6rem', fontWeight: 'bold', color: '#e74a3b' }}>404</div>
                      <p className="lead text-gray-800 mb-3">Page Not Found</p>
                      <p className="text-gray-500 mb-4">Il semble que vous ayez trouvé une erreur dans la matrice...</p>

                      {/* Bouton de retour avec historique */}
                      <button
                        onClick={() => window.history.back()}
                        className="btn btn-success btn-icon-split"
                      >
                        <span className="icon text-white-50">
                          <i className="fas fa-arrow-left"></i>
                        </span>
                        <span className="text">Retour à la page précédente</span>
                      </button>

                      {/* Lien vers le dashboard */}
                      <div className="mt-3">
                        <Link to="/" className="text-decoration-none text-success">
                          <i className="fas fa-home"></i> Retour à l'accueil
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3"></div>
      </div>
    </div>

  )
}
