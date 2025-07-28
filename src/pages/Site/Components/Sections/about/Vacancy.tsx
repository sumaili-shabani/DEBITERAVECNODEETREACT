import React from 'react'
import { Link } from 'react-router-dom'

export default function Vacancy() {
  return (
      <section className="py-5" id="offres-emploi">
          <div className="container">
              <div className="text-center mb-4">
                  <i className="fas fa-briefcase fa-2x text-success mb-2"></i>
                  <h3 className="fw-bold">Rejoignez l’équipe SwiftRide</h3>
                  <p className="text-muted">Découvrez nos opportunités de carrière et postulez directement en ligne.</p>
              </div>

              {/* <!-- Barre de recherche --> */}
              <div className="row justify-content-center mb-4">
                  <div className="col-md-8">
                      <form>
                          <div className="input-group shadow-sm">
                              <input type="text" className="form-control" placeholder="Rechercher un poste, une ville..." aria-label="Recherche emploi" />
                                  <button className="btn btn-success" type="submit">
                                      <i className="fas fa-search"></i>
                                  </button>
                          </div>
                      </form>
                  </div>
              </div>

              {/* <!-- Liste des offres --> */}
              <div className="row">
                  <div className="col-md-6 mb-4">
                      <div className="p-4 bg-white border rounded shadow-sm h-100 hover-shadow transition">
                          <h5 className="mb-1">Développeur Mobile Flutter</h5>
                          <p className="text-muted mb-1"><i className="fas fa-map-marker-alt me-1 text-success"></i> Kinshasa, RDC</p>
                          <p className="small text-muted">Contribuez à la création d’une mobilité intelligente en intégrant notre équipe tech.</p>
                          <Link to={`/vacancy-detail/sulg-vacancy`} className="btn btn-sm btn-outline-success">Voir l’offre</Link>
                      </div>
                  </div>

                  <div className="col-md-6 mb-4">
                      <div className="p-4 bg-white border rounded shadow-sm h-100 hover-shadow transition">
                          <h5 className="mb-1">Chargé·e clientèle</h5>
                          <p className="text-muted mb-1"><i className="fas fa-map-marker-alt me-1 text-success"></i> Goma, RDC</p>
                          <p className="small text-muted">Assurez une excellente expérience client pour les passagers et les chauffeurs.</p>
                          <Link to={`/vacancy-detail/sulg-vacancy`} className="btn btn-sm btn-outline-success">Voir l’offre</Link>
                      </div>
                  </div>

                  {/* <!-- Ajoute d’autres offres ici --> */}
              </div>
          </div>
      </section>

  )
}
