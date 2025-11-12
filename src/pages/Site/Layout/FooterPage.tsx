import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchListItems } from '../../../hooks/useCrud';
import DOMPurify from 'dompurify';
import GoogleTranslate from '../../../components/GoogleTranslate';
import GoogleTranslate2 from '../../../components/GoogleTranslate2';
import logoApp from '../../../assets/logos/logo_swift_ride_green.png';
import FooterGalery from '../Components/Sections/about/FooterGalery';

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


export default function FooterPage() {
    const [sites, setSites] = useState<Site[]>([]);
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

    useEffect(() => {
        fetchData();
    }, []);

    return (

        <footer id="sportsmagazine-footer" className="sportsmagazine-footer-one">

            {/*// Footer Widget \\*/}
            <div className="sportsmagazine-footer-widget">
                <div className="container">
                    <div className="row">
                        {/*// Widget Contact Info \\*/}


                        {sites.map((item, index) => (

                            <aside className="col-md-4 widget widget_contact_info" key={index}>


                                <Link to="/" className="footer-logo"><img src={logoApp} alt="" /></Link>

                                {sites.map((item, index) => (
                                    <div key={index} className='text-justify'>
                                        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.about ?? '') }} />
                                    </div>
                                ))}



                                <ul className="sportsmagazine-social-network">
                                    <li><a href={item.facebook ?? '#'} target='_blank' className="sportsmagazine-colorhover fab fa-facebook" title="Facebook"></a></li>
                                    <li><a href={item.twitter ?? '#'} target='_blank' className="sportsmagazine-colorhover fab fa-twitter" title="Twitter"></a></li>
                                    <li><a href={item.linkedin ?? '#'} target='_blank' className="sportsmagazine-colorhover fab fa-linkedin" title="linkedin"></a></li>
                                    <li><a href={item.youtube ?? '#'} target='_blank' className="sportsmagazine-colorhover fab fa-youtube" title="YouTube"></a></li>
                                </ul>
                                <ul className="sportsmagazine-info-list">
                                    <li><i className="fa fa-map-marker"></i> <span>{item.adresse ?? 'Adresse non spécifiée'}</span></li>
                                    <li><i className="fa fa-phone"></i> <span>{item.tel1 ?? '+243 817883541'}</span></li>
                                    <li><i className="fa fa-envelope"></i> <span><a href={`mailto:${item.email ?? 'info@eubabu.org'}`}>{item.email ?? 'info@eubabu.org'}</a></span></li>
                                </ul>
                            </aside>


                        ))}

                        {/*// Widget Contact Info \\*/}

                        {/*// Widget Liens Rapides \\*/}
                        <aside className="col-md-4 widget widget_quick_links">
                            <div className="footer-widget-title"><h2>Liens Rapides</h2></div>
                            <ul className="sportsmagazine-megalist">
                                <li><Link to="/" style={{ color: '#ffffff' }}>Accueil</Link></li>
                                <li><Link to="/about" style={{ color: '#ffffff' }}>À propos</Link></li>
                                <li><Link to="/team" style={{ color: '#ffffff' }}>Notre Équipe</Link></li>
                                <li><Link to="/realisations" style={{ color: '#ffffff' }}>Réalisation</Link></li>
                                <li><Link to="/blogs" style={{ color: '#ffffff' }}>Actualités</Link></li>
                                <li><Link to="/contact" style={{ color: '#ffffff' }}>Contact</Link></li>
                                <li><Link to="/don" style={{ color: '#ffffff' }}>Faire un don</Link></li>
                            </ul>
                        </aside>
                        {/*// Widget Liens Rapides \\*/}

                        {/*// Widget Gallery \\*/}
                        <aside className="col-md-4 widget widget_gallery">
                            <div className="footer-widget-title"><h2>Galerie Photos</h2></div>

                            <FooterGalery />
                            <div className="text-center mt-4" style={{ marginTop: '10px' }}>
                                <Link to="/galery" className="sportsmagazine-banner-btn">Voir toute la galerie</Link>
                            </div>
                        </aside>
                        {/*// Widget Gallery \\*/}
                    </div>
                </div>
                <a href="#" className="sportsmagazine-back-top"><i className="fa fa-angle-up"></i></a>
            </div>
            {/*// Footer Widget \\*/}

            {/*// CopyRight \\*/}
            <div className="sportsmagazine-copyright">
                <div className="container">
                    <div className="row">
                        <aside className="col-md-6 sportsmagazine-copyright-left">
                            <p>© {new Date().getFullYear()} EUBABU. Tous droits réservés.</p>
                        </aside>
                        <aside className="col-md-6 sportsmagazine-copyright-right">
                            <ul className="sportsmagazine-copyright-link">

                                <li><Link to="/politique-confidentialite" className="sportsmagazine-colorhover">Politique de confidentialité</Link></li>
                                <li><Link to="/conditions-utilisation" className="sportsmagazine-colorhover">Conditions d'utilisation</Link></li>
                            </ul>
                        </aside>
                    </div>
                </div>
            </div>
            {/*// CopyRight \\*/}

        </footer>

    )
}
