import React, { useEffect, useState } from 'react'
import { fetchListItems } from '../../../../../hooks/useCrud';
import LoaderAndError from '../../../../../components/LoaderAndError';
import DOMPurify from 'dompurify';
import Chiffre from '../../../Pages/Chiffre';
interface UiBasic {
  id?: number;
  apropos?: string;
  travail?: string;
  don?: string;
  structuregestion?: string;
  financement?: string;
  carriere?: string;
  partenariat?: string;
  createdAt?: string;
  updatedAt?: string;
}


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
export default function About() {
  const [sites, setSites] = useState<Site[]>([]);
  const [basic, setBasic] = useState<UiBasic[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const fetchListBasic = async () => {
    setLoading(true);
    try {
      const res = await fetchListItems<UiBasic>('/fetch_info_basic_data');
      setBasic(res.data);

      // console.log(res);
    } finally {
      setLoading(false);
    }

  }



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
    document.title = "À propos - Swiftride";
    fetchListBasic();
    fetchData();
  }, []);
  return (

    <div className="about-page-wrapper">
      {basic.length === 0 ? (
        <LoaderAndError
          loading={loading}
          error={error}
          onClearError={() => setError(null)}
        />
      ) : (
        basic.map((item, index) => (
          <div key={index}>
            {/* Hero Section */}
            <section className="about-hero">
              <h2 className="about-hero-title">
                <span className="text-success">Notre Histoire</span> et Notre Ambition
              </h2>
              <div className="about-hero-text">
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(item.apropos ?? ""),
                  }}
                />
              </div>
            </section>

            {/* Chiffres Clés */}
            <Chiffre />

            {/* Objectifs & Missions */}
            {sites.length === 0 ? (
              <LoaderAndError
                loading={loading}
                error={error}
                onClearError={() => setError(null)}
              />
            ) : (
              sites.map((site, index2) => (
                <section className="about-section mt-4" key={index2}>
                  <div className="about-grid">
                    {/* Nos Objectifs */}
                    <div className="about-card">
                      <div className="about-card-icon">
                        <i className="fas fa-crosshairs"></i>
                      </div>
                      <h3 className="about-card-title">Nos Objectifs</h3>
                      <div
                        className="about-card-content"
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(site.objectif ?? ""),
                        }}
                      />
                    </div>

                    {/* Notre Mission */}
                    <div className="about-card">
                      <div className="about-card-icon">
                        <i className="fas fa-hand-holding-heart"></i>
                      </div>
                      <h3 className="about-card-title">Notre Mission</h3>
                      <div
                        className="about-card-content"
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(site.mission ?? ""),
                        }}
                      />
                    </div>
                  </div>
                </section>
              ))
            )}
          </div>
        ))
      )}
    </div>

  )
}
