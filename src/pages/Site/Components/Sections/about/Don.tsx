import React, { useEffect, useState } from 'react'
import { fetchListItems } from '../../../../../hooks/useCrud';
import LoaderAndError from '../../../../../components/LoaderAndError';
import DOMPurify from 'dompurify';
import DonationForm from './DonationForm';
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
export default function Don() {
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
        title="Faites un don - SwiftRide"
        description="Contribuez à SwiftRide et soutenez notre projet pour améliorer la mobilité urbaine."
        keywords="don, SwiftRide, mobilité, taxi, CDF"
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
                      <span className="text-success">Nous faire </span>un don
                    </h2>


                  </div>

                </div>




                {/* Section finale */}
                <div className="col-lg-12 p-lg-12 mt-4 text-justify">

                  <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.don ?? '') }} />

                </div>

                <div className="col-md-12 mt-4">
                  <DonationForm />

                </div>
              </div>



            </div >

          ))

        )
      }


    </div>

  )
}



