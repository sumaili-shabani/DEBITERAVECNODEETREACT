
import React, { useEffect, useState } from 'react'
import { fetchListItems } from '../../../../../hooks/useCrud';
import LoaderAndError from '../../../../../components/LoaderAndError';
import DOMPurify from 'dompurify';
import Partenaire from '../home/Partenaire';
import { Link } from 'react-router-dom';
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
export default function PartenariatShip() {
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
        title="Partenariat - SwiftRide"
        description="Découvrez nos opportunités de partenariat avec SwiftRide."
        keywords="Partenariat, SwiftRide, collaboration, taxi, CDF"
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
                      <span className="text-success">Partenariat</span>  et gestion
                    </h2>

                  </div>


                </div>


                <p className="lead text-center mb-5">
                  Nous croyons en la force de la collaboration pour atteindre des objectifs communs.
                  Grâce à nos partenaires, nous apportons plus de valeur, d'innovation et de solutions à nos clients.
                </p>

                {/* Section types de partenariat */}
                <div className="row g-4 mb-5">
                  <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0">
                      <div className="card-body text-center">
                        <h5 className="card-title">Partenariat Technologique</h5>
                        <p className="card-text">
                          Collaboration avec des entreprises innovantes pour intégrer
                          des solutions techniques performantes et modernes.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0">
                      <div className="card-body text-center">
                        <h5 className="card-title">Partenariat Commercial</h5>
                        <p className="card-text">
                          Coopération pour élargir nos marchés, développer notre
                          clientèle et créer des opportunités gagnant-gagnant.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0">
                      <div className="card-body text-center">
                        <h5 className="card-title">Partenariat Institutionnel</h5>
                        <p className="card-text">
                          Collaboration avec des ONG, institutions et gouvernements
                          pour mener des projets à fort impact social.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section finale */}
                <div className="col-lg-12 p-lg-12 mt-4 text-justify">

                  <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.partenariat ?? '') }} />

                </div>


                {/* Section appel à action */}
                <div className="bg-light p-4 rounded shadow-sm text-center">
                  <h4>Devenez partenaire</h4>
                  <p>
                    Vous souhaitez collaborer avec nous ? Remplissez notre formulaire et
                    notre équipe vous contactera rapidement.
                  </p>
                  <Link to="/contact" className="btn btn-primary">
                    📩 Nous contacter
                  </Link>
                </div>




                <Partenaire />



              </div>



            </div >

          ))

        )
      }


    </div>

  )
}

