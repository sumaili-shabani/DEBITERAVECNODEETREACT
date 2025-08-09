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
export default function VideoDemo() {

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

                        <div className='ratio ratio-16x9' key={item.id}>
                            <iframe
                                src={item.urlYoutube + "?autoplay=1"}
                                title="YouTube video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>

                    ))
                )

            }
        </div>


    )
}
