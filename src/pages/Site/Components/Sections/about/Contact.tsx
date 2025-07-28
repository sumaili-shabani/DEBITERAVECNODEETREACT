import React from 'react'

export default function Contact() {
  return (
    <div className="col-md-12">
      {/* Hero Section */}
      <div className="row g-0 align-items-center bg-success bg-opacity-10 mb-4">
        <div className="col-lg-12 p-5 p-lg-12">
          <h1 className="display-4 fw-bold mb-4 text-success">
            Contactez <span className="text-dark">SWIFTRIDE</span>
          </h1>
          <p className="lead mb-4">
            Nous sommes à votre écoute 24h/24 pour toute question, suggestion ou partenariat.
          </p>
          <div className="d-flex gap-3 flex-wrap">
            <button className="btn btn-success btn-lg rounded-pill px-4">
              <i className="fas fa-headset me-2"></i> Support 24/7
            </button>
            <button className="btn btn-outline-success btn-lg rounded-pill px-4">
              <i className="fas fa-file-alt me-2"></i> FAQ
            </button>
          </div>
        </div>
        {/* <div className="col-lg-6 d-none d-lg-block">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop"
            alt="Service client SWIFTRIDE"
            className="img-fluid h-100"
            style={{ objectFit: "cover", minHeight: "400px" }}
          />
        </div> */}
      </div>

      {/* Formulaire + Infos */}
      <div className="col-md-12 py-2">
        <div className="row g-5">
          {/* Formulaire */}
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
              <div className="card-body p-5">
                <h2 className="fw-bold mb-4 text-success">
                  <i className="fas fa-paper-plane me-3"></i> Envoyez-nous un message
                </h2>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label">Nom complet</label>
                      <input
                        type="text"
                        className="form-control py-3"
                        id="name"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control py-3"
                        id="email"
                        placeholder="exemple@email.com"
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="subject" className="form-label">Sujet</label>
                      <select className="form-select py-3" id="subject">
                        <option value="">Sélectionnez un sujet</option>
                        <option>Support technique</option>
                        <option>Partenariat commercial</option>
                        <option>Presse/Médias</option>
                        <option>Recrutement</option>
                        <option>Autre demande</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea
                        className="form-control py-3"
                        id="message"
                        rows={5}
                        placeholder="Décrivez votre demande en détails..."
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-success btn-lg w-100 rounded-pill py-3">
                        Envoyer le message <i className="fas fa-paper-plane ms-2"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Informations de contact */}
          <div className="col-lg-5">
            <div className="card border-0 bg-white rounded-4 shadow-sm h-100">
              <div className="card-body p-5">
                <h2 className="fw-bold mb-4 text-success">
                  <i className="fas fa-map-marker-alt me-3"></i> Nos coordonnées
                </h2>

                <div className="d-flex mb-4">
                  <div className="me-4">
                    <div className="bg-success text-white rounded-circle p-3">
                      <i className="fas fa-building"></i>
                    </div>
                  </div>
                  <div>
                    <h4 className="h5 fw-bold">Siège social</h4>
                    <p className="text-muted mb-0">
                      Immeuble Le Savoyard, 3ème étage<br />
                      Avenue Joseph Anoma, Plateau<br />
                      Abidjan, Côte d'Ivoire
                    </p>
                  </div>
                </div>

                <div className="d-flex mb-4">
                  <div className="me-4">
                    <div className="bg-success text-white rounded-circle p-3">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                  </div>
                  <div>
                    <h4 className="h5 fw-bold">Téléphone</h4>
                    <p className="text-muted mb-0">
                      <a href="tel:+2250700000000" className="text-decoration-none text-dark">
                        +225 07 00 00 0000 (Support)<br />
                      </a>
                      <a href="tel:+2250100000000" className="text-decoration-none text-dark">
                        +225 01 00 00 0000 (Commercial)
                      </a>
                    </p>
                  </div>
                </div>

                <div className="d-flex mb-4">
                  <div className="me-4">
                    <div className="bg-success text-white rounded-circle p-3">
                      <i className="fas fa-envelope"></i>
                    </div>
                  </div>
                  <div>
                    <h4 className="h5 fw-bold">Email</h4>
                    <p className="text-muted mb-0">
                      <a href="mailto:contact@swiftride.ci" className="text-decoration-none text-dark">
                        contact@swiftride.ci<br />
                      </a>
                      <a href="mailto:partenariats@swiftride.ci" className="text-decoration-none text-dark">
                        partenariats@swiftride.ci
                      </a>
                    </p>
                  </div>
                </div>

                <div className="d-flex">
                  <div className="me-4">
                    <div className="bg-success text-white rounded-circle p-3">
                      <i className="fas fa-clock"></i>
                    </div>
                  </div>
                  <div>
                    <h4 className="h5 fw-bold">Horaires</h4>
                    <p className="text-muted mb-0">
                      <strong>Lun-Ven:</strong> 8h-18h<br />
                      <strong>Sam:</strong> 9h-13h<br />
                      <strong>Support 24/7:</strong> Disponible via l'application
                    </p>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carte Google Maps */}
      <div className="container-fluid px-0 mt-2" style={{ height: "400px" }}>
        
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.0667769646507!2d29.242180274485666!3d-1.6978034362133148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dd059cc8aaf625%3A0xe83cf3ef837fc417!2sGrande%20Barri%C3%A8re%20de%20goma!5e0!3m2!1sfr!2scd!4v1753290413282!5m2!1sfr!2scd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">

        </iframe>
      </div>
    </div>
  )
}
