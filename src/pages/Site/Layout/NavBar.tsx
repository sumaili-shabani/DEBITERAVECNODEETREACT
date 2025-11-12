import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import { useTheme } from '../../../context/ThemeContext';
import logoApp from '../../../assets/logos/logo_swift_ride_green.png';
import { fetchListItems } from '../../../hooks/useCrud';
import GoogleTranslate from '../../../components/GoogleTranslate';
import VideoPub from '../Components/Sections/about/VideoPub';


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

export default function NavBar() {

    // pour la langue
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang: 'fr' | 'en') => {
        i18n.changeLanguage(lang);
    };
    // fin langue
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

    const { theme, toggleTheme } = useTheme();
    return (
        <header id="sportsmagazine-header" className="sportsmagazine-header-one">

            {/*// TopStrip \\*/}
            <div className="sportsmagazine-topstrip">
                <div className="container">

                    {
                        sites.map((item, index) => (

                            <div key={index}>

                                <div className="row">

                                    <aside className="col-md-6">
                                        <ul className="sportsmagazine-social-network">
                                            <li><a href={item.facebook} target='_blank' className="sportsmagazine-colorhover fab fa-facebook" title="Facebook"></a></li>
                                            <li><a href={item.twitter} target='_blank' className="sportsmagazine-colorhover fab fa-twitter" title="Twitter"></a></li>
                                            <li><a href={item.linkedin} target='_blank' className="sportsmagazine-colorhover fab fa-linkedin" title="Instagram"></a></li>
                                            <li><a href={item.youtube} target='_blank' className="sportsmagazine-colorhover fab fa-youtube me-4" title="YouTube"></a></li>
                                            {/* <li><Link to="/donation">Nous faire un don</Link></li> */}
                                        </ul>
                                    </aside>
                                    <aside className="col-md-6">
                                        <ul className="sportsmagazine-user-section">
                                            
                                            <li><i className="fa fa-phone"></i> <a href={`tel:${item.tel1}`}>{item.tel1}</a></li>
                                            <li><i className="fa fa-envelope"></i> <a href={`mailto:${item.email}`}>{item.email}</a></li>
                                            <li><i className="fas fa-sign-in-alt"></i> <a href="https://app.eubabutrdc.com" target='_blank'>Connexion</a></li>
                                        </ul>
                                    </aside>
                                </div>

                            </div>

                        ))
                    }


                </div>
            </div>
            {/*// TopStrip \\*/}

            {/*// MainSection \\*/}
            <div className="sportsmagazine-main-header">
                <div className="container">
                    <div className="row">
                        <aside className="col-md-3">
                            <Link to="/" className="sportsmagazine-logo">
                                <img src={logoApp} alt="Eubabu Logo" />
                                <span className="logo-text">EUBABU</span>
                            </Link>
                        </aside>
                        <div className="col-md-9">
                            <div className="sportsmagazine-right-section">
                                <nav className="navbar navbar-default">
                                    <div className="navbar-header">
                                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="true">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                    </div>
                                    <div className="collapse navbar-collapse" id="navbar-collapse-1">
                                        <ul className="nav navbar-nav">
                                            <li className="active"><Link to="/">Accueil</Link></li>

                                            <li className="sportsmagazine-megamenu-li"><a href="#">ORGANISATION</a>
                                                <ul className="sportsmagazine-megamenu">
                                                    <li className="row">
                                                        <div className="col-md-4">
                                                            <h4>À propos</h4>
                                                            <ul className="sportsmagazine-megalist">
                                                                <li><Link to="/about">Notre histoire</Link></li>
                                                                <li><Link to="/work">Mission & Valeurs</Link></li>
                                                                <li><Link to="/services">Nos services</Link></li>
                                                                <li><Link to="/team">Notre équipe</Link></li>
                                                                <li><Link to="/donation">Faire un don</Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <h4>Gouvernance</h4>
                                                            <ul className="sportsmagazine-megalist">
                                                                <li><Link to="/structure">Structure organisationnelle</Link></li>
                                                                <li><Link to="/conseil-administration">Conseil d'administration</Link></li>
                                                                <li><Link to="/work">Ce que nous faisons</Link></li>
                                                                <li><Link to="/rapports">Rapports annuels</Link></li>

                                                                <li>
                                                                    <GoogleTranslate />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <h4>Partenariats</h4>
                                                            <ul className="sportsmagazine-megalist">
                                                                <li><Link to="/partnariat">Nos partenaires</Link></li>
                                                                <li><Link to="/secteur">Secteur d'activité</Link></li>
                                                                <li><Link to="/projects">Projets en cours</Link></li>
                                                                <li><Link to="/resalisations">Réalisations</Link></li>
                                                                <li><Link to="/financement">Financement</Link></li>


                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="sportsmagazine-megamenu-li"><a href="#">Basketball</a>
                                                <ul className="sportsmagazine-megamenu">
                                                    <li className="row">
                                                        <div className="col-md-4">
                                                            <h4>Équipes</h4>
                                                            <ul className="sportsmagazine-megalist">
                                                                <li><Link to="#">Équipes Séniors</Link></li>
                                                                <li><Link to="#">Équipes Jeunes</Link></li>
                                                                <li><Link to="#">Équipes Féminines</Link></li>
                                                                <li><Link to="#">Effectifs & Staff</Link></li>
                                                            </ul>

                                                            <h4>Compétitions</h4>
                                                            <ul className="sportsmagazine-megalist">
                                                                <li><Link to="#">Calendrier des matchs</Link></li>
                                                                <li><Link to="#">Résultats</Link></li>
                                                                <li><Link to="#">Classements</Link></li>
                                                                <li><Link to="#">Palmarès</Link></li>
                                                            </ul>
                                                        </div>

                                                        <div className="col-md-4">
                                                            <h4>Programmes</h4>
                                                            <ul className="sportsmagazine-megalist">
                                                                <li><Link to="#">Formation des jeunes</Link></li>
                                                                <li><Link to="#">Écoles de basket</Link></li>
                                                                <li><Link to="#">Développement</Link></li>
                                                                <li><Link to="#">Événements spéciaux</Link></li>
                                                            </ul>

                                                            <h4>CONTACTEZ NOUS</h4>
                                                            <ul className="sportsmagazine-megalist">
                                                                <li><Link to="/contact">Formulaire de contact</Link></li>
                                                                <li><Link to="/contact">Nous localiser</Link></li>
                                                                <li><Link to="/faq">FAQ</Link></li>
                                                                <li><Link to="#">Aide & Support</Link></li>
                                                            </ul>
                                                        </div>

                                                        <div className="col-md-4">
                                                            <div className="row">
                                                                {
                                                                    sites.map((item, index) => (

                                                                        <div className="col-12 mb-3" key={index}>
                                                                            <h4>Réseaux Sociaux</h4>
                                                                            <ul className="sportsmagazine-megalist">
                                                                                <li><a href={item.facebook} target='_blank' rel="noopener noreferrer">Facebook</a></li>
                                                                                <li><a href={item.twitter} target='_blank' rel="noopener noreferrer">Twitter</a></li>
                                                                                <li><a href={item.linkedin} target='_blank' rel="noopener noreferrer">LinkedIn</a></li>
                                                                                <li><a href={item.youtube} target='_blank' rel="noopener noreferrer">YouTube</a></li>
                                                                            </ul>
                                                                        </div>


                                                                    ))
                                                                }


                                                                <div className="col-12">
                                                                    <h4>CE QUOI EUBABU ?</h4>
                                                                    <div className="ratio ratio-16x9">
                                                                        {/* <iframe
                                                                                src="https://www.youtube.com/embed/RMe5LYEnfy8?si=mAjwpHOWjxakGwzG"
                                                                                title="YouTube video player"
                                                                                frameBorder="0"
                                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                                allowFullScreen
                                                                                style={{ borderRadius: '5px' }}>
                                                                            </iframe> */}

                                                                        <VideoPub />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="sportsmagazine-megamenu-li"><a href="#">ACTUALITÉS</a>
                                                <ul className="sportsmagazine-megamenu">
                                                    <li className="row">
                                                        <div className="col-md-4">
                                                            <h4>Nouvelles</h4>
                                                            <ul className="sportsmagazine-megalist">
                                                                <li><Link to="/blogs">Toutes les actualités</Link></li>
                                                                <li><Link to="/realisations">Réalisation</Link></li>
                                                                <li><Link to="#">Communiqués</Link></li>
                                                                <li><Link to="#">Agenda</Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <h4>Médias</h4>
                                                            <ul className="sportsmagazine-megalist">
                                                                <li><Link to="/galery">Galerie photos</Link></li>
                                                                <li><Link to="/videos">Vidéos</Link></li>
                                                                <li><Link to="#">Interviews</Link></li>
                                                                <li><Link to="#">Revue de presse</Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <h4>Catégorie des Blogs</h4>
                                                            <div className="col-md-12">
                                                                <div className="row g-2">

                                                                    {
                                                                        categories.map((item, index) => (


                                                                            <div className="col-6 mb-2" key={index}>
                                                                                <Link to={'/category/' + item.slug} className="badge bg-primary text-decoration-none w-100 text-center p-2 d-block">
                                                                                    {item.titre}
                                                                                </Link>
                                                                            </div>



                                                                        ))
                                                                    }
                                                                </div>


                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li>
                                                <Link to="/contact">CONTACTEZ-NOUS</Link>

                                            </li>

                                           
                                        </ul>
                                    </div>
                                </nav>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*// MainSection \\*/}

        </header>
    )
}
