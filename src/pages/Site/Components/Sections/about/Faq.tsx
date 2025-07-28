import React from 'react'

export default function Faq() {
  return (
      <div className="container-fluid">
          {/* Hero Section */}
          <div className="row g-0 align-items-center bg-success bg-opacity-10 py-5">
              <div className="container py-5 text-center">
                  <h1 className="display-4 fw-bold mb-3 text-success">
                      <i className="fas fa-question-circle me-3"></i> Foire Aux Questions
                  </h1>
                  <p className="lead mb-4">
                      Trouvez rapidement des réponses à vos questions les plus fréquentes
                  </p>
                  <div className="col-lg-8 mx-auto">
                      <div className="input-group mb-3 shadow-sm rounded-pill">
                          <input
                              type="text"
                              className="form-control border-0 rounded-pill-start py-3 px-4"
                              placeholder="Rechercher une question..."
                          />
                          <button className="btn btn-success rounded-pill-end px-4" type="button">
                              <i className="fas fa-search"></i>
                          </button>
                      </div>
                  </div>
              </div>
          </div>

          {/* Contenu FAQ */}
          <div className="container py-6 mt-2">
              <div className="row g-4">
                  {/* Catégorie 1 */}
                  <div className="col-lg-12">
                      <div className="card border-0 shadow-sm rounded-4 mb-4">
                          <div className="card-header bg-success text-white rounded-top-4 py-3">
                              <h3 className="h5 mb-0">
                                  <i className="fas fa-user-circle me-2"></i> Questions et préocupations
                              </h3>
                          </div>
                          <div className="accordion accordion-flush" id="accordionCompte">
                              {/* Question 1 */}
                              <div className="accordion-item border-0">
                                  <h4 className="accordion-header">
                                      <button
                                          className="accordion-button collapsed py-3"
                                          type="button"
                                          data-bs-toggle="collapse"
                                          data-bs-target="#collapseOne"
                                      >
                                          <i className="fas fa-question-circle text-success me-3"></i>
                                          Comment créer un compte SWIFTRIDE ?
                                      </button>
                                  </h4>
                                  <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionCompte">
                                      <div className="accordion-body">
                                          <p>Téléchargez l'application sur l'App Store ou Google Play, puis :</p>
                                          <ol>
                                              <li>Cliquez sur "Créer un compte"</li>
                                              <li>Entrez votre numéro de téléphone</li>
                                              <li>Validez le code SMS reçu</li>
                                              <li>Complétez votre profil</li>
                                          </ol>
                                          <p className="text-success mb-0">
                                              <i className="fas fa-info-circle me-2"></i>
                                              Aucun mot de passe requis - connexion sécurisée par SMS
                                          </p>
                                      </div>
                                  </div>
                              </div>

                              {/* Question 2 */}
                              <div className="accordion-item border-0">
                                  <h4 className="accordion-header">
                                      <button
                                          className="accordion-button collapsed py-3"
                                          type="button"
                                          data-bs-toggle="collapse"
                                          data-bs-target="#collapseTwo"
                                      >
                                          <i className="fas fa-question-circle text-success me-3"></i>
                                          Comment modifier mes informations personnelles ?
                                      </button>
                                  </h4>
                                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionCompte">
                                      <div className="accordion-body">
                                          <p>Accédez à votre profil via l'application :</p>
                                          <ul className="mb-3">
                                              <li>Onglet "Mon Compte"</li>
                                              <li>Menu "Paramètres du profil"</li>
                                              <li>Modifiez les champs nécessaires</li>
                                          </ul>
                                          <div className="alert alert-success bg-success bg-opacity-10 border-0">
                                              <i className="fas fa-shield-alt me-2"></i>
                                              Pour des raisons de sécurité, certaines modifications nécessitent une vérification par SMS.
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                
              </div>

              {/* Section d'aide supplémentaire */}
              <div className="row mt-5">
                  <div className="col-lg-8 mx-auto text-center">
                      <div className="card border-success border-2 rounded-4 bg-success bg-opacity-5">
                          <div className="card-body p-5">
                              <i className="fab fa-headset display-1 text-success mb-4"></i>
                              <h3 className="fw-bold mb-3">Besoin d'aide supplémentaire ?</h3>
                              <p className="lead mb-4">
                                  Notre équipe support est disponible 24h/24 pour répondre à vos questions.
                              </p>
                              <div className="d-flex justify-content-center gap-3 flex-wrap">
                                  <a href='tel:+243817883541' className="btn btn-success btn-lg rounded-pill px-4">
                                      <i className="fas fa-comment-dots me-2"></i> Chat en direct
                                  </a>
                                  <a href='tel:+243817883541' className="btn btn-outline-success btn-lg rounded-pill px-4">
                                      <i className="fas fa-phone-alt me-2"></i> +243817883541
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}
