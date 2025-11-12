import React, { useEffect, useState } from 'react'
import { fetchListItems } from '../../../../../hooks/useCrud';
import { Link } from 'react-router-dom';
import { fileUrl } from '../../../../../api/config';

interface UiCarousel {
    id?: number;
    titre?: string;
    sousTitre?: string;
    description?: string;
    icone?: string;
    logoFile?: File;
    slug?: String;
    createdAt?: string;
    updatedAt?: string;

}

export default function BannerHome() {

    const [listData, setDataList] = useState<UiCarousel[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await fetchListItems<UiCarousel[]>('/fetch_single_carousel_random');
            setDataList(res.data);
            setLoading(false);
            // console.log(res);
        } finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="sportsmagazine-banner">

            {/* Slider */}
            <div className="sportsmagazine-banner-one">

                <div className="sportsmagazine-banner-one-layer">
                    <img src="extra-images/banner-1.jpg" alt="" />
                    <span className="sportsmagazine-banner-pattren"></span>
                    <div className="sportsmagazine-banner-caption">
                        <div className="container">
                            <div className="row">

                                {
                                    listData.length > 0 ? (
                                        listData.map((item, index) => (


                                            <div className="col-md-12" key={index}>
                                                <div className="sportsmagazine-banner-wrap">
                                                    <h1>
                                                        {item.titre ?? ''}
                                                        
                                                    </h1>
                                                    <p>
                                                        {item.description??''}
                                                    </p>
                                                    <Link to="/donation" className="sportsmagazine-banner-btn">
                                                        Faire un don <span></span>
                                                    </Link>
                                                </div>
                                                <div className="sportsmagazine-banner-thumb">
                                                    <img src={fileUrl + "/images/" + item.icone} alt="" />
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="col-md-12">
                                            <p>Aucune donnée disponible</p>
                                        </div>
                                    )
                                }






                            </div>
                        </div>
                    </div>
                </div>



            </div>
            {/* Slider */}

        </div>
    )
}
