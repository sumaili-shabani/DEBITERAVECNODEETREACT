import React from 'react'

export default function FooterPage() {
  return (
    <div className='col-lg-12 col-md-12 col-12 col-sm-12 mt-4'>

          <footer className="footer bg-dark text-light pt-5 mt-4 pb-4 mt-auto">
              <div className="container">
                  <div className="row">
                      {/* <!-- Bloc 1 : Logo et slogan --> */}
                      <div className="col-lg-4 mb-4 mb-lg-0">
                          <h4 className="mb-3">
                              <i className="fas fa-taxi me-2"></i> SwiftRide
                          </h4>
                          <p>
                              Simplifiez vos déplacements en toute sécurité. Commandez votre taxi ou moto en un clic, à tout moment.
                          </p>
                      </div>

                      {/* <!-- Bloc 2 : Navigation --> */}
                      <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
                          <h6 className="mb-4">Navigation</h6>
                          <ul className="list-unstyled footer-links">
                              <li className="mb-2"><a href="#" className="text-light text-decoration-none"><i className="fas fa-angle-right me-2"></i>Accueil</a></li>
                              <li className="mb-2"><a href="#services" className="text-light text-decoration-none"><i className="fas fa-angle-right me-2"></i>Nos services</a></li>
                              <li className="mb-2"><a href="#faq" className="text-light text-decoration-none"><i className="fas fa-angle-right me-2"></i>FAQ</a></li>
                              <li className="mb-2"><a href="#contact" className="text-light text-decoration-none"><i className="fas fa-angle-right me-2"></i>Contact</a></li>
                          </ul>
                      </div>

                      {/* <!-- Bloc 3 : Sécurité --> */}
                      <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
                          <h6 className="mb-4">Sécurité</h6>
                          <ul className="list-unstyled footer-links">
                              <li className="mb-2"><a href="#sos" className="text-light text-decoration-none"><i className="fas fa-angle-right me-2"></i>Bouton SOS</a></li>
                              <li className="mb-2"><a href="#partage" className="text-light text-decoration-none"><i className="fas fa-angle-right me-2"></i>Partage trajet</a></li>
                              <li className="mb-2"><a href="#chauffeurs" className="text-light text-decoration-none"><i className="fas fa-angle-right me-2"></i>Nos chauffeurs</a></li>
                          </ul>
                      </div>

                      {/* <!-- Bloc 4 : Téléchargement --> */}
                      <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
                          <h6 className="mb-4">Télécharger</h6>
                          <ul className="list-unstyled footer-links">
                              <li className="mb-2"><a href="#" className="text-light text-decoration-none"><i className="fab fa-google-play me-2"></i>Android</a></li>
                              <li className="mb-2"><a href="#" className="text-light text-decoration-none"><i className="fab fa-apple me-2"></i>iOS</a></li>
                          </ul>
                      </div>

                      {/* <!-- Bloc 5 : Réseaux sociaux --> */}
                      <div className="col-lg-2">
                          <h6 className="mb-4">Suivez-nous</h6>
                          <div className="d-flex gap-3">
                              <a href="#" aria-label="Facebook" className="text-light"><i className="fab fa-facebook-f"></i></a>
                              <a href="#" aria-label="Twitter" className="text-light"><i className="fab fa-x-twitter"></i></a>
                              <a href="#" aria-label="Instagram" className="text-light"><i className="fab fa-instagram"></i></a>
                              <a href="#" aria-label="LinkedIn" className="text-light"><i className="fab fa-linkedin-in"></i></a>
                          </div>
                      </div>
                  </div>

                  <hr className="my-4 border-light" />

                  {/* <!-- Bas de page --> */}
                  <div className="row">
                      <div className="col-md-6 text-center text-md-start">
                          <p className="mb-0">&copy; <script>document.write(new Date().getFullYear())</script> SwiftRide. Tous droits réservés.</p>
                      </div>
                      <div className="col-md-6 text-center text-md-end">
                          <p className="mb-0">Conçu avec ❤️ pour une mobilité plus sûre.</p>
                      </div>
                  </div>
              </div>
          </footer>

    </div>
  )
}
