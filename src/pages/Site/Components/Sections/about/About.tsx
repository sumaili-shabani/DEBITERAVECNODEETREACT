import React, { useEffect, useState } from 'react'
import { fetchListItems } from '../../../../../hooks/useCrud';
import LoaderAndError from '../../../../../components/LoaderAndError';
import DOMPurify from 'dompurify';
import SEO from './SEO';
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
    fetchListBasic();
    fetchData();
  }, []);
  return (



    <div className='col-md-12 col-lg-12 col-sm-12 col-12'>

      <SEO
        title="À propos - SwiftRide"
        description="Découvrez SwiftRide, notre mission et notre vision pour l'avenir de la mobilité urbaine."
        keywords="À propos, SwiftRide, mobilité, taxi, CDF"
        author="SwiftRide"
      />

      {
        basic.length === 0 ? (
          <LoaderAndError
            loading={loading}
            error={error}
            onClearError={() => setError(null)}
          />
        ) : (
          basic.map((item, index) => (

            <div className="col-md-12" key={index}>
              {/* Hero Section */}
              <div className="row g-0 align-items-center">
                <div className="col-lg-12 p-5 p-lg-12">
                  <h2 className="display-4 fw-bold mb-4">
                    <span className="text-success">Notre Histoire</span> et Notre Ambition
                  </h2>
                  <div className="lead mb-4 text-justify ">
                    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.apropos ?? '') }} />
                  </div>

                </div>
              </div>

              {/* Chiffres Clés */}
              <div className="container py-5 my-4 bg-white rounded-4 shadow-sm">
                <div className="row g-4 text-center">
                  <div className="col-md-3">
                    <div className="display-4 fw-bold text-success">2+</div>
                    <p className="text-muted">Villes couvertes</p>
                  </div>
                  <div className="col-md-3">
                    <div className="display-4 fw-bold text-success">5K+</div>
                    <p className="text-muted">Chauffeurs partenaires</p>
                  </div>
                  <div className="col-md-3">
                    <div className="display-4 fw-bold text-success">1M+</div>
                    <p className="text-muted">Utilisateurs actifs</p>
                  </div>
                  <div className="col-md-3">
                    <div className="display-4 fw-bold text-success">98%</div>
                    <p className="text-muted">Satisfaction clients</p>
                  </div>
                </div>
              </div>

              {/* Objectifs & Missions */}
              <div className="col-md-12 py-6">

                {
                  sites.length === 0 ? (
                    <LoaderAndError
                      loading={loading}
                      error={error}
                      onClearError={() => setError(null)}
                    />
                  ) : (
                    sites.map((site, index2) => (

                      <div className="row g-5" key={index2}>
                        {/* Objectifs */}
                        <div className="col-lg-6">
                          <div className="card border-0 bg-white rounded-4 shadow-sm h-100">
                            <div className="card-body p-5 position-relative">

                              <h2 className="fw-bold mb-4 text-success">
                                <i className="fas fa-crosshairs me-3"></i> Nos Objectifs
                              </h2>
                              <div className="list-unstyled">

                                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(site.objectif ?? '') }} />
                               
                              </div>
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

                                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(site.mission ?? '') }} />
                                
                             
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>




                    ))
                  )
                }






              </div>
            </div >

          ))

        )
      }


    </div>

  )
}
