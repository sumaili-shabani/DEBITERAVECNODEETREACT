
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
export default function StructureGestion() {
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
        title="Structure de gestion - Swiftride"
        description="Découvrez comment notre organisation est structurée pour garantir une gestion efficace et transparente."
        keywords="Structure, gestion, Swiftride"
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

              <div className="container py-5">
                {/* Titre principal */}
                <div className="mb-1">
                  <div className='text-center'>

                    <h2 className="display-4 fw-bold mb-4">
                      <span className="text-success">Structure</span>  de gestion
                    </h2>

                    {/* Intro */}
                    <p className="text-muted text-center mb-5">
                      Découvrez comment notre organisation est structurée pour garantir une
                      gestion efficace et transparente.
                    </p>

                  </div>


                  {/* Organigramme / Structure */}
                  <div className="row justify-content-center">
                    {/* Exemple de card */}
                    <div className="col-md-4 mb-4">
                      <div className="card shadow-sm h-100 text-center">
                        <div className="card-body">
                          <h5 className="card-title fw-bold">Direction Générale</h5>
                          <p className="card-text">
                            Supervise l’ensemble des activités et assure la vision globale
                            de l’organisation.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4 mb-4">
                      <div className="card shadow-sm h-100 text-center">
                        <div className="card-body">
                          <h5 className="card-title fw-bold">Département Technique</h5>
                          <p className="card-text">
                            Responsable des opérations, de la maintenance et de
                            l’innovation technique.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4 mb-4">
                      <div className="card shadow-sm h-100 text-center">
                        <div className="card-body">
                          <h5 className="card-title fw-bold">Département Administratif</h5>
                          <p className="card-text">
                            Assure la gestion administrative, financière et le support aux
                            autres départements.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>




                </div>


                {/* Section finale */}
                <div className="col-lg-12 p-lg-12 mt-4 text-justify">

                  <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.structuregestion ?? '') }} />

                </div>
              </div>



            </div >

          ))

        )
      }


    </div>

  )
}

