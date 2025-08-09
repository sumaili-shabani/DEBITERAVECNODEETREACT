import React, { useEffect, useState } from 'react'
import car1 from '../../../../../assets/logos/image_app_swift_car.png'; // Chemin relatif depuis le composant
import { fetchListItems } from '../../../../../hooks/useCrud';
import LoaderAndError from '../../../../../components/LoaderAndError';


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
interface UiValeur {
    id?: number;
    titre?: string;
    description?: string;
    icone?: string;
    createdAt?: string;
    updatedAt?: string;
}

export default function Choix() {

    const [sites, setSites] = useState<Site[]>([]);
    const [valeurs, setValeur] = useState<UiValeur[]>([]);
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

    const fetchListCategorie = async () => {
        setLoading(true);
        try {
            const res = await fetchListItems<UiValeur>('/fetch_choix_data');
            setValeur(res.data);

            // console.log(res);
        } finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        
        fetchData();
        fetchListCategorie();
    }, []);

    return (
        <div className="container-fluid bg-success bg-opacity-5 py-6 transition-colors duration-300 mb-2 mt-4">
            <div className="container py-2">
                <div className="row align-items-center g-5">
                    <div className="col-lg-4">
                        <img
                            src={car1}
                            className="img-fluid rounded-3  dark:shadow-gray-900 transition-transform hover:scale-[1.02] duration-300"
                            alt="Équipe SWIFTRIDE"
                            loading="lazy"
                        />
                    </div>
                    <div className="col-lg-8 mb-3">
                        <h2 className="display-5 fw-bold mb-5 dark:text-white text-center">
                            <span className="text-white">Pourquoi SWIFTRIDE</span> domine le marché ?
                        </h2>

                        <div className="col-md-12">
                            <div className="row">

                                {
                                    valeurs.length === 0 ? (
                                        <LoaderAndError
                                            loading={loading}
                                            error={error}
                                            onClearError={() => setError(null)}
                                        />

                                    ) : (

                                        valeurs.map((item, index) => (


                                            <div key={index} className="col-md-6  mb-1 p-3 d-flex align-items-start  bg-white dark:bg-gray-700 rounded-6 shadow-sm hover:shadow-md transition-all"
                                             >
                                                <div className="bg-success bg-opacity-25 text-success rounded-3 p-3 me-4 flex-shrink-0">
                                                    <i className={`${item.icone} fs-4`}></i>
                                                </div>
                                                <div>
                                                    <h4 className="text-success mb-2">{item.titre}</h4>
                                                    <p className="text-muted dark:text-gray-300 mb-0">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>

                                        ))

                                    )
                                }




                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
