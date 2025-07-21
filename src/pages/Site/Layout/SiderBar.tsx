import React from 'react'
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../context/ThemeContext';

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
                    {/* Bouton thème visible sur mobile */}
                    <a className="nav-link me-3" href="#!" role="button" onClick={toggleTheme}>
                        <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'} fa-fw`}></i>
                    </a>


                    <button type="button" className="btn" data-bs-dismiss="offcanvas">
                        <i className='fas fa-close fa-lg'></i>
                    </button>
                </div>
            </div>
            <div className="offcanvas-body d-flex flex-column">
                {/* Section Principale */}
                <div className="flex-grow-1">
                    <a className="nav-link py-3 border-bottom" href="#">
                        <i className="fas fa-home me-3 swift-text-green"></i>Accueil
                    </a>

                    {/* Section Services avec sous-menu */}
                    <div className="accordion" id="servicesAccordion">
                        <div className="accordion-item border-0">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed nav-link bg-transparent shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#servicesCollapse">
                                    <i className="fas fa-taxi me-3 swift-text-green"></i>Nos services
                                </button>
                            </h2>
                            <div id="servicesCollapse" className="accordion-collapse collapse" data-bs-parent="#servicesAccordion">
                                <div className="accordion-body p-0">
                                    <a className="nav-link ps-5 py-2" href="#">
                                        <i className="fas fa-circle-notch fa-xs me-2 swift-text-green"></i>Commander un taxi
                                    </a>
                                    <a className="nav-link ps-5 py-2" href="#">
                                        <i className="fas fa-circle-notch fa-xs me-2 swift-text-green"></i>Commander une moto
                                    </a>
                                    <a className="nav-link ps-5 py-2" href="#">
                                        <i className="fas fa-circle-notch fa-xs me-2 swift-text-green"></i>Véhicule premium
                                    </a>
                                    <a className="nav-link ps-5 py-2" href="#">
                                        <i className="fas fa-circle-notch fa-xs me-2 swift-text-green"></i>Réservation future
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section Sécurité avec sous-menu */}
                    <div className="accordion" id="securityAccordion">
                        <div className="accordion-item border-0">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed nav-link bg-transparent shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#securityCollapse">
                                    <i className="fas fa-shield-alt me-3 swift-text-green"></i>Sécurité
                                </button>
                            </h2>
                            <div id="securityCollapse" className="accordion-collapse collapse" data-bs-parent="#securityAccordion">
                                <div className="accordion-body p-0">
                                    <a className="nav-link ps-5 py-2" href="#">
                                        <i className="fas fa-circle-notch fa-xs me-2 swift-text-green"></i>Bouton SOS
                                    </a>
                                    <a className="nav-link ps-5 py-2" href="#">
                                        <i className="fas fa-circle-notch fa-xs me-2 swift-text-green"></i>Partage de trajet
                                    </a>
                                    <a className="nav-link ps-5 py-2" href="#">
                                        <i className="fas fa-circle-notch fa-xs me-2 swift-text-green"></i>Identification chauffeur
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section Promotions avec sous-menu */}
                    <div className="accordion" id="promoAccordion">
                        <div className="accordion-item border-0">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed nav-link bg-transparent shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#promoCollapse">
                                    <i className="fas fa-gift me-3 swift-text-green"></i>Promotions & Offres
                                </button>
                            </h2>
                            <div id="promoCollapse" className="accordion-collapse collapse" data-bs-parent="#promoAccordion">
                                <div className="accordion-body p-0">
                                    <a className="nav-link ps-5 py-2" href="#">
                                        <i className="fas fa-circle-notch fa-xs me-2 swift-text-green"></i>Codes promo
                                    </a>
                                    <a className="nav-link ps-5 py-2" href="#">
                                        <i className="fas fa-circle-notch fa-xs me-2 swift-text-green"></i>Offres spéciales
                                    </a>
                                    <a className="nav-link ps-5 py-2" href="#">
                                        <i className="fas fa-circle-notch fa-xs me-2 swift-text-green"></i>Parrainage
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Liens simples */}
                    <a className="nav-link py-3 border-bottom" href="#">
                        <i className="fas fa-info-circle me-3 swift-text-green"></i>Comment ça marche
                    </a>
                    <a className="nav-link py-3 border-bottom" href="#">
                        <i className="fas fa-question-circle me-3 swift-text-green"></i>FAQ
                    </a>
                    <a className="nav-link py-3 border-bottom" href="#">
                        <i className="fas fa-envelope me-3 swift-text-green"></i>Contact
                    </a>
                </div>

                {/* Boutons de téléchargement */}
                <div className="mt-auto pt-3 border-top">
                    <p className="text-center mb-3 fw-bold">Téléchargez l'application</p>
                    <div className="d-flex justify-content-center flex-wrap">
                        <button className="download-btn me-2 mb-2">
                            <i className="fab fa-google-play me-2"></i>Android
                        </button>
                        <button className="download-btn mb-2">
                            <i className="fab fa-apple me-2"></i>iOS
                        </button>
                    </div>
                </div>

                {/* Réseaux sociaux */}
                <div className="text-center py-3">
                    <a href="#" className="me-3 text-decoration-none"><i className="fab fa-facebook fa-lg swift-text-green"></i></a>
                    <a href="#" className="me-3 text-decoration-none"><i className="fab fa-twitter fa-lg swift-text-green"></i></a>
                    <a href="#" className="me-3 text-decoration-none"><i className="fab fa-instagram fa-lg swift-text-green"></i></a>
                </div>
            </div>
        </div>

    )
}
