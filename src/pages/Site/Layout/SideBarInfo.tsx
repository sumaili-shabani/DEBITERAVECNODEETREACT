import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchListItems } from '../../../hooks/useCrud';

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
interface UiCatBlog {
    id?: number;
    titre?: string;
    slug?: string;
    createdAt?: string;
    updatedAt?: string;
}
export default function SideBarInfo() {
    const [sites, setSites] = useState<Site[]>([]);
    const [categories, setCategories] = useState<UiCatBlog[]>([]);
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
            const res = await fetchListItems<UiCatBlog>('/fetch_category_blog_data');
            setCategories(res.data);

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
        <div className='col-md-12'>
            {/* Section Réseaux Sociaux */}
            <div className="mb-2 p-4 rounded-3 shadow-sm card card-body border-0">
                <h3 className="h4 mb-4 text-center fw-bold">Suivez-nous</h3>
                <hr className='text-muted' />

                {sites.map((item, index) => (


                    <div className="d-flex justify-content-center gap-3 flex-wrap" key={index}>

                        <a href={item.facebook ?? '#'} target='_blank' className="btn btn-primary rounded-circle p-3" style={{ width: '50px', height: '50px' }}>
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href={item.twitter ?? '#'} target='_blank' className="btn btn-info text-white rounded-circle p-3" style={{ width: '50px', height: '50px' }}>
                            <i className="fab fa-twitter"></i>
                        </a>

                        <a href={item.linkedin ?? '#'} target='_blank' className="btn btn-primary rounded-circle p-3" style={{ width: '50px', height: '50px' }}>
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href={'https://wa.me/' + item.tel1} target='_blank' className="btn btn-success rounded-circle p-3" style={{ width: '50px', height: '50px' }}>
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </div>
                ))}

            </div>

            {/* Embedded Facebook */}
            <div className="mb-2 card border-0 shadow-sm overflow-hidden">
                <div className="card-header bg-primary text-white">
                    <i className="fab fa-facebook me-2"></i> Dernière publication Facebook
                </div>
                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2Fprofile.php%3Fid%3D61578260812608&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1153717905395954" 
                    width="340" height="500" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </div>



            {/* Catégories Blog */}
            <div className="col-md-12 mt-1">
                <div className="row card border-0">
                    <div className="mega-category card-body">
                        <h5><i className="fas fa-folder-open me-2 swift-text-green"></i> Catégories d’articles</h5>
                        <div className="chip-list d-flex flex-wrap gap-2">

                            {categories.map((item, index) => (

                                <div key={index}>
                                    <Link to={'/category/' + item.slug} className="chip">
                                        <i className="fas fa-newspaper me-1 swift-text-green"></i> {item.titre}
                                    </Link>
                                </div>
                            ))}


                        </div>

                    </div>
                </div>


            </div>

        </div>
    )
}
