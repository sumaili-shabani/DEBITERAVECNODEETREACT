import React, { useEffect, useState } from 'react'
import { fetchListItems } from '../../../../../hooks/useCrud';
import LoaderAndError from '../../../../../components/LoaderAndError';
import DOMPurify from 'dompurify';
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
export default function Work() {
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
    document.title = "Ce que nous faisons - Swiftride";
    fetchListBasic();
    fetchData();
  }, []);
  return (



    <div className='col-md-12 col-lg-12 col-sm-12 col-12'>

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

              <div className="container py-5">
                {/* Titre principal */}
                <div className="mb-1">
                  <div className='text-center'>

                    <h2 className="display-4 fw-bold mb-4">
                      <span className="text-success">Ce que</span>  nous faisons
                    </h2>
                    
                  </div>


                </div>



                {/* Section des activités */}
                <div className="row g-4">
                  <div className="col-md-12">
                    <div className="row">
                      <p className="text-center text-muted">
                        Découvrez nos activités, nos services et comment nous apportons un impact positif.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0">
                      <div className="card-body text-center">
                        <div className="mb-3">
                          <i className="bi bi-people fs-1 text-primary"></i>
                        </div>
                        <h5 className="fw-bold">Accompagnement</h5>
                        <p>
                          Nous offrons un accompagnement personnalisé à nos bénéficiaires
                          afin de répondre à leurs besoins spécifiques.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0">
                      <div className="card-body text-center">
                        <div className="mb-3">
                          <i className="bi bi-globe fs-1 text-success"></i>
                        </div>
                        <h5 className="fw-bold">Innovation</h5>
                        <p>
                          Nous mettons la technologie au service de la communauté pour
                          améliorer la qualité de vie.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0">
                      <div className="card-body text-center">
                        <div className="mb-3">
                          <i className="bi bi-lightbulb fs-1 text-warning"></i>
                        </div>
                        <h5 className="fw-bold">Créativité</h5>
                        <p>
                          Nous imaginons des solutions innovantes pour relever les défis
                          sociaux et économiques.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section finale */}
                <div className="col-lg-12 p-lg-12 mt-4 text-justify">

                  <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.travail ?? '') }} />

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
