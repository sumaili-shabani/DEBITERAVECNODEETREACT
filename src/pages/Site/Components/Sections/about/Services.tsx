import React from 'react'

export default function Services() {
  return (
      <div className="container py-6">
          {/* Titre Section */}
          <div className="text-center mb-6">
              <h2 className="display-5 fw-bold text-success">
                  <i className="fas fa-star me-3"></i>Nos Solutions Mobilité
              </h2>
              <p className="lead text-muted">
                  Découvrez une gamme complète adaptée à tous vos besoins de déplacement
              </p>
          </div>

          {/* Grille de Services */}
          <div className="row g-4">
              {/* Service 1 - Taxi Classique */}
              <div className="col-md-6 col-lg-3">
                  <div className="card h-100 border-0 shadow-sm hover-lift bg-success bg-opacity-5">
                      <div className="card-body p-4 text-center">
                          <div className="icon-xl bg-success text-white rounded-circle mb-4 mx-auto">
                              <i className="fas fa-taxi fs-3"></i>
                          </div>
                          <h3 className="h4 fw-bold mb-3">SwiftClassic</h3>
                          <ul className="list-unstyled text-start mb-4">
                              <li className="mb-2 d-flex">
                                  <i className="fas fa-check-circle text-success mt-1 me-2"></i>
                                  <span>Véhicules climatisés récents</span>
                              </li>
                              <li className="mb-2 d-flex">
                                  <i className="fas fa-check-circle text-success mt-1 me-2"></i>
                                  <span>Prix fixé à l'avance</span>
                              </li>
                              <li className="d-flex">
                                  <i className="fas fa-check-circle text-success mt-1 me-2"></i>
                                  <span>Disponible 24h/24</span>
                              </li>
                          </ul>
                          <div className="mt-auto">
                              <span className="badge bg-success bg-opacity-10 text-success py-2 px-3">
                                  À partir de <span className="fw-bold">1,500 FCFA</span>
                              </span>
                          </div>
                      </div>
                      <div className="card-footer bg-transparent border-0 pt-0">
                          <button className="btn btn-success w-100 rounded-pill">
                              Commander <i className="fas fa-arrow-right ms-2"></i>
                          </button>
                      </div>
                  </div>
              </div>

              {/* Service 2 - Moto Express */}
              <div className="col-md-6 col-lg-3">
                  <div className="card h-100 border-0 shadow-sm hover-lift">
                      <div className="card-body p-4 text-center">
                          <div className="icon-xl bg-success text-white rounded-circle mb-4 mx-auto">
                              <i className="fas fa-motorcycle fs-3"></i>
                          </div>
                          <h3 className="h4 fw-bold mb-3">SwiftMoto</h3>
                          <ul className="list-unstyled text-start mb-4">
                              <li className="mb-2 d-flex">
                                  <i className="fas fa-check-circle text-success mt-1 me-2"></i>
                                  <span>Livraison express en 15min</span>
                              </li>
                              <li className="mb-2 d-flex">
                                  <i className="fas fa-check-circle text-success mt-1 me-2"></i>
                                  <span>Casques fournis et désinfectés</span>
                              </li>
                              <li className="d-flex">
                                  <i className="fas fa-check-circle text-success mt-1 me-2"></i>
                                  <span>50% moins cher qu'un taxi</span>
                              </li>
                          </ul>
                          <div className="mt-auto">
                              <span className="badge bg-success bg-opacity-10 text-success py-2 px-3">
                                  À partir de <span className="fw-bold">800 FCFA</span>
                              </span>
                          </div>
                      </div>
                      <div className="card-footer bg-transparent border-0 pt-0">
                          <button className="btn btn-outline-success w-100 rounded-pill">
                              Commander <i className="fas fa-bolt ms-2"></i>
                          </button>
                      </div>
                  </div>
              </div>

              {/* Service 3 - Premium */}
              <div className="col-md-6 col-lg-3">
                  <div className="card h-100 border-0 shadow-sm hover-lift bg-success bg-opacity-5">
                      <div className="card-body p-4 text-center">
                          <div className="icon-xl bg-success text-white rounded-circle mb-4 mx-auto">
                              <i className="fas fa-crown fs-3"></i>
                          </div>
                          <h3 className="h4 fw-bold mb-3">SwiftPremium</h3>
                          <ul className="list-unstyled text-start mb-4">
                              <li className="mb-2 d-flex">
                                  <i className="fas fa-check-circle text-success mt-1 me-2"></i>
                                  <span>Véhicules haut de gamme</span>
                              </li>
                              <li className="mb-2 d-flex">
                                  <i className="fas fa-check-circle text-success mt-1 me-2"></i>
                                  <span>Chauffeurs triés sur le volet</span>
                              </li>
                              <li className="d-flex">
                                  <i className="fas fa-check-circle text-success mt-1 me-2"></i>
                                  <span>Service VIP 24/7</span>
                              </li>
                          </ul>
                          <div className="mt-auto">
                              <span className="badge bg-success bg-opacity-10 text-success py-2 px-3">
                                  À partir de <span className="fw-bold">3,500 FCFA</span>
                              </span>
                          </div>
                      </div>
                      <div className="card-footer bg-transparent border-0 pt-0">
                          <button className="btn btn-success w-100 rounded-pill">
                              Réserver <i className="fas fa-gem ms-2"></i>
                          </button>
                      </div>
                  </div>
              </div>

              {/* Service 4 - Entreprise */}
              <div className="col-md-6 col-lg-3">
                  <div className="card h-100 border-0 shadow-sm hover-lift">
                      <div className="card-body p-4 text-center">
                          <div className="icon-xl bg-success text-white rounded-circle mb-4 mx-auto">
                              <i className="fas fa-briefcase fs-3"></i>
                          </div>
                          <h3 className="h4 fw-bold mb-3">SwiftPro</h3>
                          <ul className="list-unstyled text-start mb-4">
                              <li className="mb-2 d-flex">
                                  <i className="fas fa-check-circle text-success mt-1 me-2"></i>
                                  <span>Compte entreprise centralisé</span>
                              </li>
                              <li className="mb-2 d-flex">
                                  <i className="fas fa-check-circle text-success mt-1 me-2"></i>
                                  <span>Facturation mensuelle</span>
                              </li>
                              <li className="d-flex">
                                  <i className="fas fa-check-circle text-success mt-1 me-2"></i>
                                  <span>Dashboard analytique</span>
                              </li>
                          </ul>
                          <div className="mt-auto">
                              <span className="badge bg-success bg-opacity-10 text-success py-2 px-3">
                                  Tarifs <span className="fw-bold">sur mesure</span>
                              </span>
                          </div>
                      </div>
                      <div className="card-footer bg-transparent border-0 pt-0">
                          <button className="btn btn-outline-success w-100 rounded-pill">
                              Contact commercial <i className="fas fa-headset ms-2"></i>
                          </button>
                      </div>
                  </div>
              </div>
          </div>

          {/* CTA Bas de Page */}
          <div className="text-center mt-6">
              <div className="bg-success bg-opacity-10 rounded-4 p-4 p-lg-5">
                  <h3 className="fw-bold mb-3">Un besoin spécifique ?</h3>
                  <p className="mb-4">Notre équipe vous propose des solutions personnalisées</p>
                  <button className="btn btn-success rounded-pill px-4">
                      <i className="fas fa-comment-alt me-2"></i> Discuter avec un expert
                  </button>
              </div>
          </div>
      </div>
  )
}
