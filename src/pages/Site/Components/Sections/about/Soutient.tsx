import React, { useEffect, useState } from 'react'
import { fetchListItems } from '../../../../../hooks/useCrud';
interface UiValeur {
    id?: number;
    titre?: string;
    description?: string;
    icone?: string;
    createdAt?: string;
    updatedAt?: string;
}
export default function Soutient() {
    const [listData, setDataList] = useState<UiValeur[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchListData = async () => {
        setLoading(true);
        try {
            const res = await fetchListItems<UiValeur>('/fetch_choix_data');
            setDataList(res.data);

        } finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        fetchListData();
    }, []);

    return (
        <div className="row">

            {
                listData.length > 0 ? (
                    listData.map(item => (
                        <div key={item.id} className="col-md-6">
                            <div className="value-card">
                                <div className="value-icon">
                                    <i className={`fas fa-${item.icone}`}></i>
                                </div>
                                <h3>{item.titre}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Aucun choix disponible</p>
                )
            }

        </div>
    )
}
