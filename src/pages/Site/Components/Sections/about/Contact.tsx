import React, { useEffect, useState } from 'react'
import ContactFormulaire from './ContactForm';
import { Link } from 'react-router-dom';
import { fetchItems, fetchListItems } from '../../../../../hooks/useCrud';


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
    document.title = "Contactactez-nous pour information - Swiftride";
    fetchData();
  }, []);



  return (
    <div className="">
      {/* HERO */}
      <section className="contact-hero">
        <h1>
          Contactez <span>EuBabu</span>
        </h1>
        <p>
          Nous sommes à votre écoute 24h/24 pour toute question, suggestion ou partenariat.
        </p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <button className="btn btn-success">
            <i className="fas fa-headset me-2"></i> Support 24/7
          </button>
          <Link to="/faq" className="btn btn-outline-success">
            <i className="fas fa-file-alt me-2"></i> FAQ
          </Link>
        </div>
      </section>

      {/* FORMULAIRE + COORDONNÉES */}
      <section className="contact-grid">
        <div className="contact-form-card">
          <h2>
            <i className="fas fa-paper-plane me-2"></i> Envoyez-nous un message
          </h2>
          <ContactFormulaire />
        </div>

        {sites.map((item, index) => (
          <div className="contact-info-card" key={index}>
            <h2>
              <i className="fas fa-map-marker-alt me-2"></i> Nos coordonnées
            </h2>

            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-building"></i>
              </div>
              <div className="info-text">
                <h4>Siège social</h4>
                <p>{item.adresse}</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="info-text">
                <h4>Téléphone</h4>
                <p>
                  <a href={`tel:${item.tel1}`}>{item.tel1} (Support)</a> <br />
                  <a href={`tel:${item.tel2}`}>{item.tel2} (Commercial)</a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="info-text">
                <h4>Email</h4>
                <a href={`mailto:${item.email}`}>{item.email}</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="info-text">
                <h4>Horaires</h4>
                <p>
                  <strong>Lun-Ven :</strong> 8h-18h <br />
                  <strong>Sam :</strong> 9h-13h <br />
                  <strong>Support 24/7 :</strong> Disponible via l’application
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CARTE GOOGLE MAP */}
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.0667769646507!2d29.242180274485666!3d-1.6978034362133148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dd059cc8aaf625%3A0xe83cf3ef837fc417!2sGrande%20Barri%C3%A8re%20de%20Goma!5e0!3m2!1sfr!2scd!4v1753290413282!5m2!1sfr!2scd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
