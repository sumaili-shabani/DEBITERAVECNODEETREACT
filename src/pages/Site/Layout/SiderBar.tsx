import React from 'react'
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../context/ThemeContext';
import { Link } from 'react-router-dom';

export default function SiderBar() {

    // pour la langue
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang: 'fr' | 'en') => {
        i18n.changeLanguage(lang);
    };
    // fin langue

    const { theme, toggleTheme } = useTheme();
    return (

        <div className="offcanvas offcanvas-start menu-fullscreen" id="offcanvasMenu" data-bs-scroll="true">
            <div className="offcanvas-header border-bottom">
                <h5 className="offcanvas-title fw-bold swift-text-green">SWIFTRIDE</h5>
                <div className="d-flex align-items-center">
                    <a className="nav-link me-3" href="#!" role="button" onClick={toggleTheme}>
                        <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'} fa-fw`}></i>
                    </a>
                    <button type="button" className="btn" data-bs-dismiss="offcanvas">
                        <i className="fas fa-close fa-lg"></i>
                    </button>
                </div>
            </div>

            <div className="offcanvas-body d-flex flex-column">
                <div className="flex-grow-1">
                    {/* Accueil */}
                    <Link className="nav-link py-3 border-bottom" to="/">
                        <i className="fas fa-home me-3 swift-text-green"></i>Accueil
                    </Link>

                    {/* Nos services */}
                    <div className="accordion" id="servicesAccordion">
                        <div className="accordion-item border-0">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed nav-link bg-transparent shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#servicesCollapse">
                                    <i className="fas fa-taxi me-3 swift-text-green"></i>Nos services
                                </button>
                            </h2>
                            <div id="servicesCollapse" className="accordion-collapse collapse" data-bs-parent="#servicesAccordion">
                                <div className="accordion-body p-0">
                                    <a className="nav-link ps-5 py-2" href="https://play.google.com/store/apps/details?id=com.dreamofdrc.liftiapp" target="_blank">
                                        <i className="fas fa-circle-notch fa-xs me-2 swift-text-green"></i>Commander un taxi
                                    </a>
                                    <a className="nav-link ps-5 py-2" href="https://play.google.com/store/apps/details?id=com.dreamofdrc.liftiapp" target="_blank">
                                        <i className="fas fa-circle-notch fa-xs me-2 swift-text-green"></i>Commander une moto
                                    </a>
                                    <Link className="nav-link ps-5 py-2" to="/location-vehicule">
                                        <i className="fas fa-circle-notch fa-xs me-2 swift-text-green"></i>Location de véhicules
                                    </Link>
                                    <Link className="nav-link ps-5 py-2" to="/reservation-future">
                                        <i className="fas fa-circle-notch fa-xs me-2 swift-text-green"></i>Réservation future
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sécurité */}
                    <div className="accordion" id="securityAccordion">
                        <div className="accordion-item border-0">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed nav-link bg-transparent shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#securityCollapse">
                                    <i className="fas fa-shield-alt me-3 swift-text-green"></i>Sécurité
                                </button>
                            </h2>
                            <div id="securityCollapse" className="accordion-collapse collapse" data-bs-parent="#securityAccordion">
                                <div className="accordion-body p-0">
                                    <Link className="nav-link ps-5 py-2" to="/sos">
                                        <i className="fas fa-circle-notch fa-xs me-2 swift-text-green"></i>Bouton SOS
                                    </Link>
                                    <Link className="nav-link ps-5 py-2" to="/partage">
                                        <i className="fas fa-circle-notch fa-xs me-2 swift-text-green"></i>Partage de trajet
                                    </Link>
                                    <Link className="nav-link ps-5 py-2" to="/chauffeur">
                                        <i className="fas fa-circle-notch fa-xs me-2 swift-text-green"></i>Identification chauffeur
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Promotions */}
                    <div className="accordion" id="promoAccordion">
                        <div className="accordion-item border-0">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed nav-link bg-transparent shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#promoCollapse">
                                    <i className="fas fa-gift me-3 swift-text-green"></i>Promotions & Offres
                                </button>
                            </h2>
                            <div id="promoCollapse" className="accordion-collapse collapse" data-bs-parent="#promoAccordion">
                                <div className="accordion-body p-0">
                                    <Link className="nav-link ps-5 py-2" to="/code-promo">
                                        <i className="fas fa-circle-notch fa-xs me-2 swift-text-green"></i>Codes promo
                                    </Link>
                                    <Link className="nav-link ps-5 py-2" to="/offre-promotion">
                                        <i className="fas fa-circle-notch fa-xs me-2 swift-text-green"></i>Offres spéciales
                                    </Link>
                                   
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Infos générales */}
                    <Link className="nav-link py-3 border-bottom" to="/how-it-works">
                        <i className="fas fa-info-circle me-3 swift-text-green"></i>Comment ça marche
                    </Link>
                    <Link className="nav-link py-3 border-bottom" to="/faq">
                        <i className="fas fa-question-circle me-3 swift-text-green"></i>FAQ
                    </Link>
                    <Link className="nav-link py-3 border-bottom" to="/contact">
                        <i className="fas fa-envelope me-3 swift-text-green"></i>Contact
                    </Link>

                    {/* À propos / blog */}
                    <div className="accordion" id="infoAccordion">
                        <div className="accordion-item border-0">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed nav-link bg-transparent shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#infoCollapse">
                                    <i className="fas fa-info me-3 swift-text-green"></i>À propos
                                </button>
                            </h2>
                            <div id="infoCollapse" className="accordion-collapse collapse" data-bs-parent="#infoAccordion">
                                <div className="accordion-body p-0">
                                    <Link className="nav-link ps-5 py-2" to="/works">
                                        <i className="fas fa-briefcase fa-xs me-2 swift-text-green"></i>Ce que nous faisons
                                    </Link>
                                    <Link className="nav-link ps-5 py-2" to="/about">
                                        <i className="fas fa-info-circle fa-xs me-2 swift-text-green"></i>À propos de nous
                                    </Link>
                                    <Link className="nav-link ps-5 py-2" to="/blogs">
                                        <i className="fas fa-newspaper fa-xs me-2 swift-text-green"></i>Articles
                                    </Link>
                                    <Link className="nav-link ps-5 py-2" to="/team">
                                        <i className="fas fa-users fa-xs me-2 swift-text-green"></i>Équipe
                                    </Link>
                                    <Link className="nav-link ps-5 py-2" to="/structure-gestion">
                                        <i className="fas fa-sitemap fa-xs me-2 swift-text-green"></i>Structure de gestion
                                    </Link>
                                    <Link className="nav-link ps-5 py-2" to="/partenariat-ship">
                                        <i className="fas fa-handshake fa-xs me-2 swift-text-green"></i>Partenariat
                                    </Link>
                                    <Link className="nav-link ps-5 py-2" to="/don">
                                        <i className="fas fa-donate fa-xs me-2 swift-text-green"></i>Faire un don
                                    </Link>
                                    <Link className="nav-link ps-5 py-2" to="/financement">
                                        <i className="fas fa-piggy-bank fa-xs me-2 swift-text-green"></i>Financement
                                    </Link>
                                    <Link className="nav-link ps-5 py-2" to="/secteur">
                                        <i className="fas fa-layer-group fa-xs me-2 swift-text-green"></i>Secteur
                                    </Link>
                                    <Link className="nav-link ps-5 py-2" to="/vacancy">
                                        <i className="fas fa-folder fa-xs me-2 swift-text-green"></i>Offre d'emploi
                                    </Link>

                                    <Link className="nav-link ps-5 py-2" to="/galery">
                                        <i className="fas fa-camera fa-xs me-2 swift-text-green"></i>Galérie photo
                                    </Link>
                                    <Link className="nav-link ps-5 py-2" to="/video">
                                        <i className="fas fa-video fa-xs me-2 swift-text-green"></i>Vidéo
                                    </Link>

 
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Catégories articles */}
                    <div className="py-3 border-top">
                        <h6 className="fw-bold mb-2"><i className="fas fa-folder-open swift-text-green me-2"></i>Catégories d’articles</h6>
                        <div className="d-flex flex-wrap gap-2">
                            <a href="#actualites" className="chip"><i className="fas fa-newspaper me-1 swift-text-green"></i>Actualités</a>
                            <a href="#securite" className="chip"><i className="fas fa-shield-alt me-1 swift-text-green"></i>Sécurité</a>
                            <a href="#innovation" className="chip"><i className="fas fa-lightbulb me-1 swift-text-green"></i>Innovation</a>
                            <a href="#temoignages" className="chip"><i className="fas fa-comment-dots me-1 swift-text-green"></i>Témoignages</a>
                            <a href="#conseils" className="chip"><i className="fas fa-hand-point-right me-1 swift-text-green"></i>Conseils</a>
                        </div>
                    </div>
                </div>

                {/* Téléchargements */}
                <div className="mt-auto pt-3 border-top">
                    <p className="text-center fw-bold mb-3">Téléchargez l'application</p>
                    <div className="d-flex justify-content-center flex-wrap">
                        <a href="https://play.google.com/store/apps/details?id=com.dreamofdrc.liftiapp" className="download-btn me-2 mb-2 linkbtn" target="_blank">
                            <i className="fab fa-google-play me-2"></i>Android
                        </a>
                        <a href="#" className="download-btn mb-2 linkbtn">
                            <i className="fab fa-apple me-2"></i>iOS
                        </a>
                    </div>
                </div>

                {/* Réseaux sociaux */}
                <div className="text-center py-3">
                    <a href="#" className="me-3 text-decoration-none"><i className="fab fa-facebook fa-lg swift-text-green"></i></a>
                    <a href="#" className="me-3 text-decoration-none"><i className="fab fa-x-twitter fa-lg swift-text-green"></i></a>
                    <a href="#" className="me-3 text-decoration-none"><i className="fab fa-instagram fa-lg swift-text-green"></i></a>
                    <a href="#" className="me-3 text-decoration-none"><i className="fab fa-linkedin fa-lg swift-text-green"></i></a>
                </div>
            </div>
        </div>




    )
}
