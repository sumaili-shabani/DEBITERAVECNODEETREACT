import React from 'react'
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../context/ThemeContext';
import { Link } from 'react-router-dom';

export default function Index() {

    // pour la langue
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang: 'fr' | 'en') => {
        i18n.changeLanguage(lang);
    };
    // fin langue

    const { theme, toggleTheme } = useTheme();
    return (
        <div id="wrapper">

            {/* NavBar lg */}


            {/* <!-- Navbar --> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold swift-text-green" href="#">SWIFTRIDE</a>


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
                                                        <a href="#services" className="list-group-item list-group-item-action">
                                                            <i className="fas fa-concierge-bell swift-text-green"></i> Nos services
                                                        </a>
                                                        <a href="#taxi" className="list-group-item list-group-item-action">
                                                            <i className="fas fa-taxi swift-text-green"></i> Commander un taxi
                                                        </a>
                                                        <a href="#moto" className="list-group-item list-group-item-action">
                                                            <i className="fas fa-motorcycle swift-text-green"></i> Commander une moto
                                                        </a>
                                                        <a href="#premium" className="list-group-item list-group-item-action">
                                                            <i className="fas fa-car-side swift-text-green"></i> Véhicule premium
                                                        </a>
                                                        <a href="#reservation" className="list-group-item list-group-item-action">
                                                            <i className="fas fa-calendar-check swift-text-green"></i> Réservation future
                                                        </a>
                                                    </div>
                                                </div>

                                                <div className="mega-category mt-1 border-end">
                                                    <h5><i className="fas fa-shield-alt me-2 swift-text-green"></i> Sécurité</h5>
                                                    <div className="list-group">
                                                        <a href="#sos" className="list-group-item list-group-item-action">
                                                            <i className="fas fa-exclamation-triangle swift-text-green"></i> Bouton SOS
                                                        </a>
                                                        <a href="#partage" className="list-group-item list-group-item-action">
                                                            <i className="fas fa-share-square swift-text-green"></i> Partage de trajet
                                                        </a>
                                                        <a href="#chauffeur" className="list-group-item list-group-item-action">
                                                            <i className="fas fa-id-badge swift-text-green"></i> Identification chauffeur
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* ✅ Colonne 2 */}
                                            <div className="col-lg-4">
                                                <div className="mega-category border-end">
                                                    <h5><i className="fas fa-gift me-2 swift-text-green"></i> Promotions & Offres</h5>
                                                    <div className="list-group">
                                                        <a href="#codes" className="list-group-item list-group-item-action">
                                                            <i className="fas fa-ticket-alt swift-text-green"></i> Codes promo
                                                        </a>
                                                        <a href="#offres" className="list-group-item list-group-item-action">
                                                            <i className="fas fa-tags swift-text-green"></i> Offres spéciales
                                                        </a>
                                                        <a href="#parrainage" className="list-group-item list-group-item-action">
                                                            <i className="fas fa-user-friends swift-text-green"></i> Parrainage
                                                        </a>
                                                        <a href="#how-it-works" className="list-group-item list-group-item-action">
                                                            <i className="fas fa-question-circle swift-text-green"></i> Comment ça marche
                                                        </a>
                                                        <a href="#faq" className="list-group-item list-group-item-action">
                                                            <i className="fas fa-info-circle swift-text-green"></i> FAQ
                                                        </a>
                                                        <a href="#contact" className="list-group-item list-group-item-action">
                                                            <i className="fas fa-envelope swift-text-green"></i> Contact
                                                        </a>
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    {/* ✅ Boutons de téléchargement */}
                                                    <div className="mt-auto pt-3 border-top">
                                                        <h5><i className="fas fa-download me-2 swift-text-green"></i> Téléchargez l'application SwiftRide</h5>
                                                        
                                                        <div className="text-start mb-3 text-muted fst-italic">
                                                            Votre mobilité, plus simple et plus sûre. Disponible sur:
                                                        </div>
                                                        <div className="d-flex justify-content-start flex-wrap">
                                                            <a style={{ textDecoration:'none' }} href='https://play.google.com/store/apps/details?id=com.dreamofdrc.liftiapp' target='_blank' className="download-btn me-2 mb-2">
                                                                <i className="fab fa-google-play me-2"></i> Android
                                                            </a>
                                                            <a style={{ textDecoration: 'none' }}  href='#' className="download-btn mb-2">
                                                                <i className="fab fa-apple me-2"></i> iOS
                                                            </a>
                                                        </div>
                                                    </div>

                                                    {/* ✅ Réseaux sociaux */}
                                                    <div className="text-start py-3 border-end">
                                                        <h5><i className="fas fa-link me-2 swift-text-green"></i>  Rejoignez-nous sur les réseaux</h5>
                                                      
                                                        
                                                        <div className="text-muted fst-italic mb-3">
                                                            Restez informé des nouveautés et offres exclusives.
                                                        </div>
                                                        <a href="#" className="me-3 text-decoration-none">
                                                            <i className="fab fa-facebook-f fa-lg swift-text-green"></i>
                                                        </a>
                                                        <a href="#" className="me-3 text-decoration-none">
                                                            <i className="fab fa-x-twitter fa-lg swift-text-green"></i>
                                                        </a>
                                                        <a href="#" className="me-3 text-decoration-none">
                                                            <i className="fab fa-instagram fa-lg swift-text-green"></i>
                                                        </a>
                                                        {/* <!-- Optionnel --> */}
                                                        <a href="#" className="me-3 text-decoration-none">
                                                            <i className="fab fa-linkedin-in fa-lg swift-text-green"></i>
                                                        </a>
                                                    </div>
                                                </div>


                                            </div>

                                            {/* ✅ Colonne 3 : Vidéo conservée telle quelle */}
                                            <div className="col-lg-4">
                                                {/* ✅ Découvrir SwiftRide */}
                                                <div className="mega-category mb-1">
                                                    <h5><i className="fas fa-play-circle me-2"></i> Découvrez SwiftRide</h5>
                                                    <div className="video-container">
                                                        <div className="ratio ratio-16x9">
                                                            <iframe
                                                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                                                title="Présentation SwiftRide"
                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                allowFullScreen
                                                            ></iframe>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* ✅ Catégories d'articles */}
                                                <div className="mega-category mt-4 border-top border-end">
                                                    <h5><i className="fas fa-folder-open me-2 swift-text-green"></i> Catégories d’articles</h5>
                                                    <div className="chip-list d-flex flex-wrap gap-2">
                                                        <a href="#actualites" className="chip">
                                                            <i className="fas fa-newspaper me-1 swift-text-green"></i> Actualités SwiftRide
                                                        </a>
                                                        <a href="#securite" className="chip">
                                                            <i className="fas fa-shield-alt me-1 swift-text-green"></i> Sécurité & Prévention
                                                        </a>
                                                        <a href="#innovation" className="chip">
                                                            <i className="fas fa-lightbulb me-1 swift-text-green"></i> Innovation & Tech
                                                        </a>
                                                        <a href="#temoignages" className="chip">
                                                            <i className="fas fa-comment-dots me-1 swift-text-green"></i> Témoignages clients
                                                        </a>
                                                        <a href="#conseils" className="chip">
                                                            <i className="fas fa-hand-point-right me-1 swift-text-green"></i> Conseils Utilisateurs
                                                        </a>
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
                                <button className="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" id="languageDropdown" data-bs-toggle="dropdown">
                                    <i className="fas fa-language me-1"></i> FR
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item active" href="#">Français</a></li>
                                    <li><a className="dropdown-item" href="#">English</a></li>
                                </ul>
                            </div>

                            <a className="btn btn-outline-success me-3" href="#login"> <i className='fas fa-sign-in-alt'></i> Connexion</a>
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





            {/* <!-- Offcanvas Menu - Adaptatif --> */}
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

            {/* body */}
            <div className='mt-4'>

            </div>
            {/* fin body */}





            {/* footer */}

            <footer className="footer bg-dark text-light pt-5 mt-4 pb-4 mt-auto">
                <div className="container">
                    <div className="row">
                        {/* <!-- Bloc 1 : Logo et slogan --> */}
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <h4 className="mb-3">
                                <i className="fas fa-taxi me-2"></i> SwiftRide
                            </h4>
                            <p>
                                Simplifiez vos déplacements en toute sécurité. Commandez votre taxi ou moto en un clic, à tout moment.
                            </p>
                        </div>

                        {/* <!-- Bloc 2 : Navigation --> */}
                        <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
                            <h6 className="mb-4">Navigation</h6>
                            <ul className="list-unstyled footer-links">
                                <li className="mb-2"><a href="#" className="text-light text-decoration-none"><i className="fas fa-angle-right me-2"></i>Accueil</a></li>
                                <li className="mb-2"><a href="#services" className="text-light text-decoration-none"><i className="fas fa-angle-right me-2"></i>Nos services</a></li>
                                <li className="mb-2"><a href="#faq" className="text-light text-decoration-none"><i className="fas fa-angle-right me-2"></i>FAQ</a></li>
                                <li className="mb-2"><a href="#contact" className="text-light text-decoration-none"><i className="fas fa-angle-right me-2"></i>Contact</a></li>
                            </ul>
                        </div>

                        {/* <!-- Bloc 3 : Sécurité --> */}
                        <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
                            <h6 className="mb-4">Sécurité</h6>
                            <ul className="list-unstyled footer-links">
                                <li className="mb-2"><a href="#sos" className="text-light text-decoration-none"><i className="fas fa-angle-right me-2"></i>Bouton SOS</a></li>
                                <li className="mb-2"><a href="#partage" className="text-light text-decoration-none"><i className="fas fa-angle-right me-2"></i>Partage trajet</a></li>
                                <li className="mb-2"><a href="#chauffeurs" className="text-light text-decoration-none"><i className="fas fa-angle-right me-2"></i>Nos chauffeurs</a></li>
                            </ul>
                        </div>

                        {/* <!-- Bloc 4 : Téléchargement --> */}
                        <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
                            <h6 className="mb-4">Télécharger</h6>
                            <ul className="list-unstyled footer-links">
                                <li className="mb-2"><a href="#" className="text-light text-decoration-none"><i className="fab fa-google-play me-2"></i>Android</a></li>
                                <li className="mb-2"><a href="#" className="text-light text-decoration-none"><i className="fab fa-apple me-2"></i>iOS</a></li>
                            </ul>
                        </div>

                        {/* <!-- Bloc 5 : Réseaux sociaux --> */}
                        <div className="col-lg-2">
                            <h6 className="mb-4">Suivez-nous</h6>
                            <div className="d-flex gap-3">
                                <a href="#" aria-label="Facebook" className="text-light"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" aria-label="Twitter" className="text-light"><i className="fab fa-x-twitter"></i></a>
                                <a href="#" aria-label="Instagram" className="text-light"><i className="fab fa-instagram"></i></a>
                                <a href="#" aria-label="LinkedIn" className="text-light"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>

                    <hr className="my-4 border-light" />

                        {/* <!-- Bas de page --> */}
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start">
                                <p className="mb-0">&copy; <script>document.write(new Date().getFullYear())</script> SwiftRide. Tous droits réservés.</p>
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                <p className="mb-0">Conçu avec ❤️ pour une mobilité plus sûre.</p>
                            </div>
                        </div>
                </div>
            </footer>

            {/* fin footer */}

        </div>
    )
}
