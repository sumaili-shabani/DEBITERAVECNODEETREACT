import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchListItems } from '../../../hooks/useCrud';
import DOMPurify from 'dompurify';
import GoogleTranslate from '../../../components/GoogleTranslate';
import GoogleTranslate2 from '../../../components/GoogleTranslate2';
import logoApp from '../../../assets/logos/logo_swift_ride_green.png';
import SwiftRideChatbot from '../Components/Sections/chatbot/SwiftRideChatbot';
import Chatbot from '../Components/Sections/chatbot/Chatbot';

// import Chatbot from '../Components/Sections/chatbot/Chatbot';



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
         
        <div className='col-lg-12 col-md-12 col-12 col-sm-12 mt-4'>
            
            <SwiftRideChatbot />
            <footer className="bg-dark text-light pt-5 mt-4 pb-4 mt-auto">
                <div className="container">
                    <div className="row">
                        {/* <!-- Bloc 1 : Logo et slogan --> */}
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            {/* <h4 className="mb-3">
                                <i className="fas fa-taxi me-2"></i> SwiftRide
                            </h4> */}
                            <p>

                                <img src={logoApp} alt="logo app"
                                    className='img-fluid object-fit-cover' width={200} height={200} />

                            </p>
                            {sites.map((item, index) => (
                                <div key={index} className='text-justify'>
                                    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.about ?? '') }} />
                                </div>
                            ))}
                        </div>

                        {/* <!-- Bloc 2 : Navigation --> */}
                        <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
                            <h6 className="mb-4">Navigation</h6>
                            <ul className="list-unstyled footer-links">
                                <li className="mb-2"><Link to="/" className="text-light text-decoration-none"><i className="fas fa-angle-right me-2"></i>Accueil</Link></li>
                                <li className="mb-2"><Link to="/services" className="text-light text-decoration-none"><i className="fas fa-angle-right me-2"></i>Nos services</Link></li>
                                <li className="mb-2"><Link to="/faq" className="text-light text-decoration-none"><i className="fas fa-angle-right me-2"></i>FAQ</Link></li>
                                <li className="mb-2"><Link to="/contact" className="text-light text-decoration-none"><i className="fas fa-angle-right me-2"></i>Contact</Link></li>
                            </ul>
                        </div>

                        {/* <!-- Bloc 3 : Sécurité --> */}
                        <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
                            <h6 className="mb-4">Sécurité</h6>
                            <ul className="list-unstyled footer-links">
                                <li className="mb-2"><Link to="/sos" className="text-light text-decoration-none"><i className="fas fa-angle-right me-2"></i>Bouton SOS</Link></li>
                                <li className="mb-2"><Link to="/partage" className="text-light text-decoration-none"><i className="fas fa-angle-right me-2"></i>Partage trajet</Link></li>
                                <li className="mb-2"><Link to="/projects" className="text-light text-decoration-none"><i className="fas fa-angle-right me-2"></i>Nos Projets</Link></li>
                                <li className="mb-2">
                                    <Link to="/don" className="text-light text-decoration-none">
                                        <i className="fas fa-angle-right me-2"></i>Nous faire un don</Link>
                                </li>
                            </ul>
                        </div>

                        {/* <!-- Bloc 4 : Téléchargement --> */}
                        <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
                            <h6 className="mb-4">Télécharger</h6>
                            <ul className="list-unstyled footer-links">
                                <li className="mb-2"><a href="https://play.google.com/store/apps/details?id=com.dreamofdrc.liftiapp" target='_blank' className="text-light text-decoration-none"><i className="fab fa-google-play me-2"></i>Android</a></li>
                                <li className="mb-2"><a href="https://apps.apple.com/us/app/swiftride/id6749850003" target='_blank' className="text-light text-decoration-none"><i className="fab fa-apple me-2"></i>iOS</a></li>

                               
                            </ul>
                        </div>

                        {/* <!-- Bloc 5 : Réseaux sociaux --> */}
                        <div className="col-lg-2">
                            <h6 className="mb-4">Suivez-nous</h6>
                            {sites.map((item, index) => (


                                <div className="d-flex gap-3" key={index}>
                                    <a href={item.facebook??'#'} target='_blank' aria-label="Facebook" className="text-light"><i className="fab fa-facebook-f"></i></a>
                                    <a href={item.twitter??'#'} target='_blank' aria-label="Twitter" className="text-light"><i className="fab fa-x-twitter"></i></a>
                                    <a href={item.youtube??'#'} target='_blank' aria-label="Youtube" className="text-light"><i className="fab fa-youtube"></i></a>
                                    <a href={item.linkedin??'#'} target='_blank' aria-label="LinkedIn" className="text-light"><i className="fab fa-linkedin-in"></i></a>
                                    <a href={'https://wa.me/' + item.tel1} target='_blank' className="text-light">
                                        <i className="fab fa-whatsapp"></i>
                                    </a>
                                    
                                </div>
                            ))}

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

        </div>
        
    )
}
