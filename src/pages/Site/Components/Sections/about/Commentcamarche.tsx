import React, { useEffect, useState } from 'react'
import { fetchListItems } from '../../../../../hooks/useCrud';
import LoaderAndError from '../../../../../components/LoaderAndError';
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
interface UiValeur {
    id?: number;
    titre?: string;
    description?: string;
    icone?: string;
    createdAt?: string;
    updatedAt?: string;
}
export default function Commentcamarche() {

    const [sites, setSites] = useState<Site[]>([]);
    const [fonctionalite, setFonctionalite] = useState<UiValeur[]>([]);
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
            const res = await fetchListItems<UiValeur>('/fetch_fonctionalite_data');
            setFonctionalite(res.data);

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
            <SEO
                title="Simplifiez vos déplacements en toute sécurité. Commandez votre taxi ou moto en un clic, à tout moment. - Swiftride"
                description="Contactez-nous pour toute question ou information sur SwiftRide."
                keywords="Swiftride kwetu, kwetu, Contact, SwiftRide, support, taxi, CDF, swiftride, mobilité urbaine, transport, réservation en ligne, application mobile, sécurité, confort"
                author="SwiftRide"
            />
            <div className="text-center mb-4">
                <h2 className="fw-bold text-success">Comment ça marche ?</h2>
                <p className="text-muted">Découvrez toutes les étapes pour utiliser <strong>SwiftRide</strong> facilement.</p>
            </div>

            <div className="row text-center g-4">

                {
                    fonctionalite.length === 0 ? (
                        <LoaderAndError
                            loading={loading}
                            error={error}
                            onClearError={() => setError(null)}
                        />

                    ) : (

                        fonctionalite.map((item, index) => (

                            <div className="col-md-4" key={index}>
                                <div className="p-4 border rounded shadow-sm h-100 hover-shadow transition">
                                    <i className={`${item.icone} fa-2x text-success mb-3`}></i>
                                    <h5 className="fw-bold">{item.titre}</h5>
                                    <p className="text-muted">{item.description}</p>
                                </div>
                            </div>

                        ))

                    )
                }


            </div>
        </section>


    )
}
