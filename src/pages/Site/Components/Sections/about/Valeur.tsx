import React, { useEffect, useState } from 'react'
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
export default function Valeur() {

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
            const res = await fetchListItems<UiValeur>('/fetch_valeur_data');
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
        <section className="container py-5">
            <div className="text-center mb-4">
                <h2 className="fw-bold display-5">Nos <span className="text-success">Valeurs Fondatrices</span></h2>
                <p className="lead">Ce qui fait de SWIFTRIDE le partenaire de mobilité préféré en Afrique</p>
            </div>

            <div className="row text-center g-4">

                {
                    valeurs.length === 0 ? (
                        <LoaderAndError
                            loading={loading}
                            error={error}
                            onClearError={() => setError(null)}
                        />

                    ) : (

                        valeurs.map((item, index) => (


                            <div className="col-md-6 col-lg-3" key={index}>
                                <div className="card h-100 border-0 shadow-sm bg-success bg-opacity-10 hover-transform">
                                    <div className="card-body p-4 text-center">
                                        <div className="icon-xl bg-success text-white rounded-circle mb-4 mx-auto">
                                            <i className={`${item.icone} fs-4`}></i>
                                        </div>
                                        <h4 className="fw-bold text-success">{item.titre}</h4>
                                        <p className="text-muted">
                                            {item.description}
                                        </p>
                                    
                                    </div>
                                </div>
                            </div>

                        ))

                    )
                }


            </div>
        </section>


    )
}
