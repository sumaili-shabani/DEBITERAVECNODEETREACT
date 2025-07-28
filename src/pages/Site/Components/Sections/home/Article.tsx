import React from 'react'
import { Link } from 'react-router-dom'

export default function Article() {
  return (
      <div className="container py-5">
          <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">Nos <span className="text-success">Articles Récents</span></h2>
              <p className="lead text-muted">Découvrez nos conseils et actualités sur la mobilité urbaine</p>
          </div>

          <div className="row g-4">
              {/* Article 1 */}
              <div className="col-md-6 col-lg-4">
                  <div className="card border-0 shadow-sm h-100 hover-shadow transition-all">
                      <div className="position-relative" style={{ height: "200px" }}>
                          <img
                              src="https://media.istockphoto.com/id/1025484722/photo/business-man-on-casual-business-trip.jpg?s=2048x2048&w=is&k=20&c=bHviFmpiFmBhh7gFDwYr9dFrYIQEEk0g7_Wlv-rH1kQ="
                              className="img-fluid w-100 h-100 object-fit-cover card-img-top h-100 object-cover"
                              alt="Nouveautés de l'application"
                              style={{
                                  transition: "transform 0.5s ease",
                                  minHeight: "100%",
                                  minWidth: "100%"
                              }}
                          />
                          <div className="position-absolute top-0 start-0 m-3">
                              <span className="badge bg-success">Nouveauté</span>
                          </div>
                      </div>
                      <div className="card-body">
                          <div className="d-flex mb-3">
                              <span className="text-muted small me-3">
                                  <i className="fas fa-calendar-alt me-2"></i> 15 Juin 2023
                              </span>
                              <span className="text-muted small">
                                  <i className="fas fa-comments me-2"></i> 24 commentaires
                              </span>
                          </div>
                          <h3 className="h5 fw-bold">Nouvelle fonctionnalité : Partage de trajet</h3>
                          <p className="card-text">
                              Découvrez comment économiser jusqu'à 60% sur vos trajets avec notre nouveau système de covoiturage intégré...
                          </p>
                      </div>
                      <div className="card-footer bg-transparent border-0">
                          <Link to={`/blog/article-cool-slug`} className="btn btn-link text-success text-decoration-none p-0">
                              Lire l'article <i className="fas fa-arrow-right ms-2"></i>
                          </Link>
                      </div>
                  </div>
              </div>

              {/* Article 2 */}
              <div className="col-md-6 col-lg-4">
                  <div className="card border-0 shadow-sm h-100 hover-shadow transition-all">
                      <div className="position-relative" style={{ height: "200px" }}>
                          <img
                              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=60"
                              className="img-fluid w-100 h-100 object-fit-cover card-img-top h-100 object-cover"
                              alt="Conseils sécurité"
                              style={{
                                  transition: "transform 0.5s ease",
                                  minHeight: "100%",
                                  minWidth: "100%"
                              }}
                          />
                          <div className="position-absolute top-0 start-0 m-3">
                              <span className="badge bg-warning text-dark">Conseil</span>
                          </div>
                      </div>
                      <div className="card-body">
                          <div className="d-flex mb-3">
                              <span className="text-muted small me-3">
                                  <i className="fas fa-calendar-alt me-2"></i> 2 Juin 2023
                              </span>
                              <span className="text-muted small">
                                  <i className="fas fa-comments me-2"></i> 18 commentaires
                              </span>
                          </div>
                          <h3 className="h5 fw-bold">5 conseils pour des trajets plus sûrs la nuit</h3>
                          <p className="card-text">
                              Nos recommandations pour voyager en toute sécurité pendant les heures nocturnes...
                          </p>
                      </div>
                      <div className="card-footer bg-transparent border-0">
                          <Link to={`/blog/article-cool-slug`} className="btn btn-link text-success text-decoration-none p-0">
                              Lire l'article <i className="fas fa-arrow-right ms-2"></i>
                          </Link>
                      </div>
                  </div>
              </div>

              {/* Article 3 */}
              <div className="col-md-6 col-lg-4">
                  <div className="card border-0 shadow-sm h-100 hover-shadow transition-all">
                      <div className="position-relative" style={{ height: "200px" }}>
                          <img
                              src="https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&auto=format&fit=crop&q=60"
                              className="img-fluid w-100 h-100 object-fit-cover card-img-top h-100 object-cover"
                              alt="Interview chauffeur"
                              style={{
                                  transition: "transform 0.5s ease",
                                  minHeight: "100%",
                                  minWidth: "100%"
                              }}
                          />
                          <div className="position-absolute top-0 start-0 m-3">
                              <span className="badge bg-info">Portrait</span>
                          </div>
                      </div>
                      <div className="card-body">
                          <div className="d-flex mb-3">
                              <span className="text-muted small me-3">
                                  <i className="fas fa-calendar-alt me-2"></i> 20 Mai 2023
                              </span>
                              <span className="text-muted small">
                                  <i className="fas fa-comments me-2"></i> 32 commentaires
                              </span>
                          </div>
                          <h3 className="h5 fw-bold">Interview : Jean, chauffeur SWIFTRIDE depuis 5 ans</h3>
                          <p className="card-text">
                              Rencontre avec un de nos chauffeurs les plus expérimentés et ses anecdotes...
                          </p>
                      </div>
                      <div className="card-footer bg-transparent border-0">
                          <Link to={`/blog/article-cool-slug`} className="btn btn-link text-success text-decoration-none p-0">
                              Lire l'article <i className="fas fa-arrow-right ms-2"></i>
                          </Link>
                      </div>
                  </div>
              </div>
          </div>

          <div className="text-center mt-5">
              <Link to="/blogs" className="btn btn-lg btn-outline-success rounded-pill px-4">
                  Voir tous les articles <i className="fas fa-newspaper ms-2"></i>
              </Link>
          </div>
      </div>
  )
}
