import React, { useEffect, useState } from 'react'
import { fetchListItems } from '../../../../../hooks/useCrud';
import LoaderAndError from '../../../../../components/LoaderAndError';
interface UiVideo {
    id?: number;
    titre?: string;
    description?: string;
    urlYoutube?: string;
    createdAt?: string;
    updatedAt?: string;
}
export default function VideoPub() {

    const [videos, setVideos] = useState<UiVideo[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);


    const fetchListCategorie = async () => {
        setLoading(true);
        try {
            const res = await fetchListItems<UiVideo>('/fetch_video_pub');
            setVideos(res.data);

            // console.log(res);
        } finally {
            setLoading(false);
        }

    }

    useEffect(() => {

        fetchListCategorie();
    }, []);
    return (
        <div className="mega-category mb-1">
            <h5><i className="fas fa-play-circle me-2"></i> Découvrez SwiftRide</h5>


            <div>
                {
                    videos.length === 0 ? (
                        <LoaderAndError
                            loading={loading}
                            error={error}
                            onClearError={() => setError(null)}
                        />

                    ) : (
                        videos.map((item) => (

                            <div className="video-container" key={item.id}>
                                <div className="ratio ratio-16x9">
                                    <iframe
                                        src={item.urlYoutube}
                                        title={item.titre}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                    
                                </div>
                            </div>

                        ))
                    )
                }
            </div>



        </div>
    )
}
