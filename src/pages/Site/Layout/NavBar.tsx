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
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold swift-text-green" href="#">
                        {/* SWIFTRIDE */}
                        <img src={logoApp} alt="logo app"
                            className='img-fluid object-fit-cover' width={60} height={60} />
                    </a>


                    {/* autre */}
                    {/* Menu principal (Desktop) */}
                    <div className="collapse navbar-collapse">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    <i className="fas fa-home"></i> Accueil
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    <i className="fas fa-info-circle"></i> A propos
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/services">
                                    <i className="fas fa-concierge-bell"></i> Nos services
                                </Link>
                            </li>


                            <li className="nav-item dropdown mega-menu">
                                <a className="nav-link dropdown-toggle" href="#" id="formationsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fas fa-ellipsis-h"></i> Supplémentaire
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="formationsDropdown">
                                    <div className="container">
                                        <div className="row">
                                            {/* ✅ Colonne 1 */}
                                            <div className="col-lg-4">
                                                <div className="mega-category border-end">
                                                    <h5><i className="fas fa-home me-2 swift-text-green"></i> Accueil</h5>
                                                    <div className="list-group">
                                                        <Link to="/services" className="list-group-item list-group-item-action">
                                                            <i className="fas fa-concierge-bell swift-text-green"></i> Nos services
                                                        </Link>
                                                        <a href="https://play.google.com/store/apps/details?id=com.dreamofdrc.liftiapp" target='_blank' className="list-group-item list-group-item-action">
                                                            <i className="fas fa-taxi swift-text-green"></i> Commander un taxi
                                                        </a>
                                                        <a href="https://play.google.com/store/apps/details?id=com.dreamofdrc.liftiapp" target='_blank' className="list-group-item list-group-item-action">
                                                            <i className="fas fa-motorcycle swift-text-green"></i> Commander une moto
                                                        </a>
                                                        <Link to="/location-vehicule" className="list-group-item list-group-item-action">
                                                            <i className="fas fa-car-side swift-text-green"></i> Location des véhicules
                                                        </Link>
                                                        <Link to="/reservation-future" className="list-group-item list-group-item-action">
                                                            <i className="fas fa-calendar-check swift-text-green"></i> Réservation future
                                                        </Link>
                                                    </div>
                                                </div>

                                                <div className="mega-category mt-1 border-end border-top">
                                                    <h5><i className="fas fa-shield-alt me-2 swift-text-green"></i> Sécurité</h5>
                                                    <div className="list-group">
                                                        <Link to="/sos" className="list-group-item list-group-item-action">
                                                            <i className="fas fa-exclamation-triangle swift-text-green"></i> Bouton SOS
                                                        </Link>
                                                        <Link to="/partage" className="list-group-item list-group-item-action">
                                                            <i className="fas fa-share-square swift-text-green"></i> Partage de trajet
                                                        </Link>
                                                        <Link to="/chauffeur" className="list-group-item list-group-item-action">
                                                            <i className="fas fa-id-badge swift-text-green"></i> Identification chauffeur
                                                        </Link>
                                                    </div>
                                                </div>

                                                {/* ✅ Réseaux sociaux */}
                                                <div className="text-start py-3 border-end border-top">
                                                    <h5><i className="fas fa-link me-2 swift-text-green"></i> Rejoignez-nous sur les réseaux</h5>


                                                    <div className="text-muted fst-italic mb-3">
                                                        Restez informé des nouveautés et offres exclusives.
                                                    </div>
                                                    {
                                                        sites.map((item, index) => (

                                                            <div key={index}>
                                                                <a href={item.facebook} target='_blank' className="me-3 text-decoration-none">
                                                                    <i className="fab fa-facebook-f fa-lg swift-text-green"></i>
                                                                </a>


                                                                <a href={item.twitter} target='_blank'  className="me-3 text-decoration-none">
                                                                    <i className="fab fa-x-twitter fa-lg swift-text-green"></i>
                                                                </a>
                                                               
                                                               
                                                                <a href={item.linkedin} target='_blank'  className="me-3 text-decoration-none">
                                                                    <i className="fab fa-linkedin-in fa-lg swift-text-green"></i>
                                                                </a>

                                                                <a href={item.youtube} target='_blank' className="me-3 text-decoration-none">
                                                                    <i className="fab fa-youtube fa-lg swift-text-green"></i>
                                                                </a>

                                                            </div>

                                                        ))
                                                    }

                                                    
                                                </div>


                                            </div>

                                            {/* ✅ Colonne 2 */}
                                            <div className="col-lg-4">
                                                <div className="mega-category border-end">
                                                    <h5><i className="fas fa-gift me-2 swift-text-green"></i> Promotions & Offres</h5>
                                                    <div className="list-group">
                                                        <Link to="/code-promo" className="list-group-item list-group-item-action">
                                                            <i className="fas fa-ticket-alt swift-text-green"></i> Codes promo
                                                        </Link>
                                                        <Link to="/offre-promotion" className="list-group-item list-group-item-action">
                                                            <i className="fas fa-tags swift-text-green"></i> Offres spéciales
                                                        </Link>

                                                        <Link to="/how-it-works" className="list-group-item list-group-item-action">
                                                            <i className="fas fa-question-circle swift-text-green"></i> Comment ça marche
                                                        </Link>
                                                        <Link to="/faq" className="list-group-item list-group-item-action">
                                                            <i className="fas fa-info-circle swift-text-green"></i> FAQ
                                                        </Link>
                                                        <Link to="/contact" className="list-group-item list-group-item-action">
                                                            <i className="fas fa-envelope swift-text-green"></i> Contact
                                                        </Link>
                                                    </div>
                                                </div>

                                                <div className="col-md-12">

                                                    <div className="mega-category mt-1 border-end border-top">
                                                        <h5><i className="fas fa-info me-2 swift-text-green"></i> Infos</h5>
                                                        <div className="list-group">
                                                            <Link to="/works" className="list-group-item list-group-item-action">
                                                                <i className="fas fa-briefcase swift-text-green"></i> Ce que nous faisons
                                                            </Link>
                                                            <Link to="/about" className="list-group-item list-group-item-action">
                                                                <i className="fas fa-info-circle swift-text-green"></i> À propos de nous
                                                            </Link>
                                                            <Link to="/blogs" className="list-group-item list-group-item-action">
                                                                <i className="fas fa-newspaper swift-text-green"></i> Articles
                                                            </Link>
                                                            <Link to="/team" className="list-group-item list-group-item-action">
                                                                <i className="fas fa-users swift-text-green"></i> Équipe
                                                            </Link>
                                                            <Link to="/structure-gestion" className="list-group-item list-group-item-action">
                                                                <i className="fas fa-sitemap swift-text-green"></i> Structure de gestion
                                                            </Link>
                                                            <Link to="/partenariat-ship" className="list-group-item list-group-item-action">
                                                                <i className="fas fa-handshake swift-text-green"></i> Partenariat
                                                            </Link>
                                                            <Link to="/don" className="list-group-item list-group-item-action">
                                                                <i className="fas fa-donate swift-text-green"></i> Nous faire un don
                                                            </Link>
                                                            <Link to="/financement" className="list-group-item list-group-item-action">
                                                                <i className="fas fa-piggy-bank swift-text-green"></i> Financement
                                                            </Link>
                                                            <Link to="/secteur" className="list-group-item list-group-item-action">
                                                                <i className="fas fa-layer-group swift-text-green"></i> Secteur
                                                            </Link>

                                                            <Link to="/vacancy" className="list-group-item list-group-item-action">
                                                                <i className="fas fa-folder swift-text-green"></i> Offre d'emploi
                                                            </Link>

                                                            <Link to="/galery" className="list-group-item list-group-item-action">
                                                                <i className="fas fa-camera swift-text-green"></i> Galérie photo
                                                            </Link>

                                                            <Link to="/video" className="list-group-item list-group-item-action">
                                                                <i className="fas fa-video swift-text-green"></i> Vidéos
                                                            </Link>




                                                        </div>
                                                    </div>



                                                </div>


                                            </div>

                                            {/* ✅ Colonne 3 : Vidéo conservée telle quelle */}
                                            <div className="col-lg-4">
                                                {/* ✅ Découvrir SwiftRide */}
                                                
                                                <VideoPub />

                                                {/* ✅ Catégories d'articles */}
                                                <div className="mega-category mt-4 border-top border-end">
                                                    <h5><i className="fas fa-folder-open me-2 swift-text-green"></i> Catégories d’articles</h5>
                                                    <div className="chip-list d-flex flex-wrap gap-2">
                                                        {
                                                            categories.map((item, index) => (

                                                                <div key={index}>
                                                                    <Link to={'/category/' + item.slug} className="chip">
                                                                        <i className="fas fa-newspaper me-1 swift-text-green"></i> {item.titre}
                                                                    </Link>

                                                                </div>

                                                            ))
                                                        }

                                                        
                                                       
                                                    </div>

                                                </div>


                                                <div className="col-md-12">

                                                    {/* ✅ Boutons de téléchargement */}
                                                    <div className="mt-auto pt-3 border-top border-end">
                                                        <h5><i className="fas fa-download me-2 swift-text-green"></i> Téléchargez l'application SwiftRide</h5>

                                                        <div className="text-start mb-3 text-muted fst-italic">
                                                            Votre mobilité, plus simple et plus sûre. Disponible sur:
                                                        </div>
                                                        <div className="d-flex justify-content-start flex-wrap">
                                                            <a style={{ textDecoration: 'none' }} href='https://play.google.com/store/apps/details?id=com.dreamofdrc.liftiapp' target='_blank' className="download-btn me-2 mb-2">
                                                                <i className="fab fa-google-play me-2"></i> Android
                                                            </a>
                                                            <a style={{ textDecoration: 'none' }} href='https://apps.apple.com/us/app/swiftride/id6749850003' target='_blank' className="download-btn mb-2">
                                                                <i className="fab fa-apple me-2"></i> iOS
                                                            </a>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/faq">
                                    <i className="fas fa-question-circle"></i> FAQ
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    <i className="fas fa-envelope"></i> Contact
                                </Link>
                            </li>






                        </ul>

                        {/* Actions (Connexion + Thème) */}
                        <div className="d-flex align-items-center">

                            <a className="nav-link me-2" href="#!" role="button" onClick={toggleTheme}>
                                <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'} fa-fw`}></i>
                            </a>

                            <div className="dropdown me-3">
                                <GoogleTranslate />
                            </div>

                            <a className="btn btn-outline-success me-3" href="https://app.swiftride-kwetu.com" target='_blank'> <i className='fas fa-sign-in-alt'></i> Connexion</a>
                        </div>


                    </div>

                    {/* Bouton menu mobile */}
                    <button
                        className="navbar-toggle btn btn-dark d-lg-none"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasMenu"
                        aria-controls="offcanvasMenu"
                    >
                        <i className="fas fa-bars text-white"></i>
                    </button>
                    {/* fin autre */}

                </div>
            </nav>
        </div>
    )
}
