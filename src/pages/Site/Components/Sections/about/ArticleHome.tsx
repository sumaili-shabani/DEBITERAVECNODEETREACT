import React, { useEffect, useState } from 'react'
import { fetchListItems } from '../../../../../hooks/useCrud';
import { Link } from 'react-router-dom';
import { fileUrl } from '../../../../../api/config';

interface catBlog {
    id?: number;
    titre?: string;
}
interface UiBlog {
    id?: number;
    titre?: string;
    sousTitre?: string;
    description?: string;
    idCategory?: number;
    status?: number;
    icone?: string;
    logoFile?: File;
    tug?: string;
    slug?: string; // string primitif
    createdAt?: string;
    updatedAt?: string;
    category_blog?: catBlog;
}

export default function ArticleHome() {

     const [dataInfo, setDataInfo] = useState<UiBlog[]>([]);
        const [categories, setCategories] = useState<UiBlog[]>([]);
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState<string | null>(null);
    
    
        const getSigleData = async () => {
            setLoading(true);
            try {
                const res = await fetchListItems<UiBlog>('/fetch_blog_data');
                setDataInfo(res.data);
                // console.log(res);
            } finally {
                setLoading(false);
            }
        }
    
        useEffect(() => {
           
            getSigleData();
    
        }, []);
    
  return (
      <div className="sportsmagazine-blog sportsmagazine-blog-grid">
          <ul className="row">

                {
                    dataInfo.length === 0 ? (
                        <p>No articles available</p>
                    ) : (
                        dataInfo.slice(0, 2).map((article, index) => (
                            <li className="col-md-6" key={index}>
                                <figure>
                                    <Link to={"/blog/" + article.slug}><img src={fileUrl + "/images/" + article.icone} alt="" /></Link>
                                    <figcaption>
                                        <span><small>{article.titre??''}</small></span>
                                        <Link to={"/blog/" + article.slug} className="sportsmagazine-link-btn"><i className="fa fa-link"></i></Link>
                                    </figcaption>
                                </figure>
                                <section>
                                    <h2><Link to={"/blog/" + article.slug}>{article.titre}</Link></h2>
                                    <p>{article.sousTitre}</p>
                                </section>
                                
                            </li>
                        ))
                    )
                }
              
          </ul>
      </div>
  )
}
