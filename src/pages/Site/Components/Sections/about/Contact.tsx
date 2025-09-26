import React, { useEffect, useState } from 'react'
import ContactFormulaire from './ContactForm';
import { Link } from 'react-router-dom';
import { fetchItems, fetchListItems } from '../../../../../hooks/useCrud';
import SEO from './SEO';


interface Site {
  id?: number;
  nom?: string;
  description?: string;
  email?: string;
  adresse?: string;
  tel1?: string;
  tel2?: string;
  tel3?: string;
  token?: string;
  about?: string;
  mission?: string;
  objectif?: string;
  politique?: string;
  condition?: string;
  logo?: string;
  logoFile?: File;
  facebook?: string;
  linkedin?: string;
  twitter?: string;
  youtube?: string;
  whatsapp?: string;
  createdAt?: string;
  updatedAt?: string;
}



export default function Contact() {
  const [sites, setSites] = useState<Site[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetchListItems<Site>('/fetch_data_site');
      setSites(res.data);

      // console.log(res);
    } finally {
      setLoading(false);
    }

  }

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <div className="col-md-12">
      <SEO
        title="Contact - SwiftRide"
        description="Contactez-nous pour toute question ou information sur SwiftRide."
        keywords="Contact, SwiftRide, support, taxi, CDF"
        author="SwiftRide"
      />
      {/* Hero Section */}
      <div className="row g-0 align-items-center bg-success bg-opacity-10 mb-4">
        <div className="col-lg-12 p-5 p-lg-12">
          <h1 className="display-4 fw-bold mb-4 text-success">
            Contactez <span>SWIFTRIDE</span>
          </h1>
          <p className="lead mb-4">
            Nous sommes à votre écoute 24h/24 pour toute question, suggestion ou partenariat.
          </p>
          <div className="d-flex gap-3 flex-wrap">
            <button className="btn btn-success btn-lg rounded-pill px-4">
              <i className="fas fa-headset me-2"></i> Support 24/7
            </button>
            <Link to="/faq" className="btn btn-outline-success btn-lg rounded-pill px-4">
              <i className="fas fa-file-alt me-2"></i> FAQ
            </Link>
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
                <ContactFormulaire />

              </div>
            </div>
          </div>

          {
            sites.map((item, index) => (
              <div className="col-lg-5" key={index}>
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
                          {item.adresse ?? ''}
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
                            {item.tel1} (Support)<br />
                          </a>
                          <a href="tel:+2250100000000" className="text-decoration-none text-dark">
                            {item.tel2} (Commercial)
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
                          <a href={'mailto:'+item.email} className="text-decoration-none text-dark">
                            {item.email}<br />
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
            ))
           
          }

          {/* Informations de contact */}

        </div>
      </div>

      {/* Carte Google Maps */}
      <div className="container-fluid px-0 mt-2" style={{ height: "400px" }}>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63656.410197798046!2d15.226670005503715!3d-4.311834928301815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a317b816515b9%3A0x7eeb5b3e73ad44aa!2sGombe%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1758886182746!5m2!1sfr!2scd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">

        </iframe>

       
      </div>
    </div>
  );
}
