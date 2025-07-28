import React from 'react'

export default function About() {
  return (
    <div className="col-md-12">
      {/* Hero Section */}
      <div className="row g-0 align-items-center">
        <div className="col-lg-12 p-5 p-lg-12">
          <h2 className="display-4 fw-bold mb-4">
            <span className="text-success">Notre Histoire</span> et Notre Ambition
          </h2>
          <div className="lead mb-4">
            SWIFTRIDE est née d'une vision simple : révolutionner la mobilité urbaine en Afrique grâce à la technologie.
          </div>

        </div>
      </div>

      {/* Chiffres Clés */}
      <div className="container py-5 my-4 bg-white rounded-4 shadow-sm">
        <div className="row g-4 text-center">
          <div className="col-md-3">
            <div className="display-4 fw-bold text-success">15+</div>
            <p className="text-muted">Villes couvertes</p>
          </div>
          <div className="col-md-3">
            <div className="display-4 fw-bold text-success">5K+</div>
            <p className="text-muted">Chauffeurs partenaires</p>
          </div>
          <div className="col-md-3">
            <div className="display-4 fw-bold text-success">2M+</div>
            <p className="text-muted">Utilisateurs actifs</p>
          </div>
          <div className="col-md-3">
            <div className="display-4 fw-bold text-success">98%</div>
            <p className="text-muted">Satisfaction clients</p>
          </div>
        </div>
      </div>

      {/* Objectifs & Missions */}
      <div className="container py-6">
        <div className="row g-5">
          {/* Objectifs */}
          <div className="col-lg-6">
            <div className="card border-0 bg-success text-white rounded-4 overflow-hidden h-100">
              <div className="card-body p-5 position-relative">
                
                <h2 className="fw-bold mb-4 text-success">
                  <i className="fas fa-crosshairs me-3"></i> Nos Objectifs
                </h2>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex">
                    <div className="me-3">
                      <div className="bg-white text-success rounded-circle p-2">
                        <i className="fas fa-1"></i>
                      </div>
                    </div>
                    <div>
                      <h4 className="h5 fw-bold">Leader continental</h4>
                      <p>Devenir la référence de la mobilité intelligente en Afrique d'ici 2026</p>
                    </div>
                  </li>
                  <li className="mb-3 d-flex">
                    <div className="me-3">
                      <div className="bg-white text-success rounded-circle p-2">
                        <i className="fas fa-2"></i>
                      </div>
                    </div>
                    <div>
                      <h4 className="h5 fw-bold">Innovation permanente</h4>
                      <p>Lancer 3 nouvelles fonctionnalités disruptives par an</p>
                    </div>
                  </li>
                  <li className="d-flex">
                    <div className="me-3">
                      <div className="bg-white text-success rounded-circle p-2">
                        <i className="fas fa-3"></i>
                      </div>
                    </div>
                    <div>
                      <h4 className="h5 fw-bold">Impact social</h4>
                      <p>Créer 50,000 emplois directs d'ici 2025</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Missions */}
          <div className="col-lg-6">
            <div className="card border-0 bg-white rounded-4 shadow-sm h-100">
              <div className="card-body p-5">
                <h2 className="fw-bold mb-4 text-success">
                  <i className="fas fa-hand-holding-heart me-3"></i> Notre Mission
                </h2>
                <div className="d-flex mb-4">
                  <div className="me-4">
                    <div className="bg-success bg-opacity-10 text-success rounded-circle p-3">
                      <i className="fas fa-shield-alt"></i>
                    </div>
                  </div>
                  <div>
                    <h4 className="h5 fw-bold">Sécuriser les déplacements</h4>
                    <p className="text-muted">
                      Offrir une alternative fiable aux transports traditionnels grâce à notre technologie brevetée
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <div className="me-4">
                    <div className="bg-success bg-opacity-10 text-success rounded-circle p-3">
                      <i className="fas fa-lightbulb"></i>
                    </div>
                  </div>
                  <div>
                    <h4 className="h5 fw-bold">Démocratiser la mobilité</h4>
                    <p className="text-muted">
                      Rendre accessible des services premium à des prix compétitifs
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="me-4">
                    <div className="bg-success bg-opacity-10 text-success rounded-circle p-3">
                      <i className="fas fa-chart-line"></i>
                    </div>
                  </div>
                  <div>
                    <h4 className="h5 fw-bold">Moderniser les villes</h4>
                    <p className="text-muted">
                      Collaborer avec les municipalités pour optimiser les flux urbains
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
