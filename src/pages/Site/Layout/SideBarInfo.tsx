import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchItems, fetchListItems } from '../../../hooks/useCrud';
import { formatDateTimeFR, truncateText } from '../../../api/callApi';
import { fileUrl } from '../../../api/config';
import DOMPurify from 'dompurify';

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

interface Joueur {
    id?: number;
    equipe_id: number;
    nom: string;
    prenom: string;
    date_naissance: string;
    taille?: string | number;
    poids?: string | number;
    poste?: 'Meneur' | 'Arriere' | 'Ailier' | 'Ailier_fort' | 'Pivot';
    numero_maillot?: string | number;
    photo?: string;
    logoFile?: File; // Pour le fichier image temporaire
    equipe?: any; // Inclure les détails de l'équipe

    created_at?: string;
    updated_at?: string;
    equipe_nom?: string;
}

export interface Match {
    id?: number;
    tournoi_id: number;
    equipe_domicile_id: number;
    equipe_exterieur_id: number;
    date_match: string;
    lieu?: string;
    statut: 'planifie' | 'en_cours' | 'termine';
    score_domicile?: string | number;
    score_exterieur?: string | number;
    created_at?: string;
    updated_at?: string;
    tournoi_nom?: string;
    tournoi?: any;
    equipe_domicile?: any;
    equipe_exterieur?: any;

}

interface UiService {
    id?: number;
    nom?: string;
    titre?: string;
    icone?: string;
    description?: string;
    slug?: string;

    createdAt?: string;
    updatedAt?: string;
}
export default function SideBarInfo() {
    const [sites, setSites] = useState<Site[]>([]);
    const [categories, setCategories] = useState<UiCatBlog[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [matchs, setMatchs] = useState<Match[]>([]);
    const [nextMatchs, setNextMatchs] = useState<Match[]>([]);
    const [joueurs, setJoueurs] = useState<Joueur[]>([]);
    const [uiServices, setUiServices] = useState<UiService[]>([]);

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

    // Chargement des matchs
    const loadMatchs = async () => {
        setLoading(true);
        try {
            const res = await fetchListItems<Match>('/fetch_one_match');
            setMatchs(res.data);

        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Chargement des matchs
    const loadNextMatchs = async () => {
        setLoading(true);
        try {
            const res = await fetchListItems<Match>('/fetch_next_match');
            setNextMatchs(res.data);
            setLoading(false);

        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Chargement des matchs
    const loadJoueurs = async () => {
        setLoading(true);
        try {
            const res = await fetchListItems<Joueur>('/fetch_popular_joueur');
            setJoueurs(res.data);
            setLoading(false);

        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Calculer l'âge à partir de la date de naissance
    const calculateAge = (dateNaissance: string): number => {
        const today = new Date();
        const birthDate = new Date(dateNaissance);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    };

    const fetchService = async () => {
        setLoading(true);
        try {
            const res = await fetchListItems<UiService>('/fetch_service');
            setUiServices(res.data);

            // console.log(res);
        } finally {
            setLoading(false);
        }

    }




    useEffect(() => {
        fetchData();
        fetchListCategorie();
        loadMatchs();
        loadNextMatchs();
        loadJoueurs();
        fetchService();
    }, []);
    return (
        <div className='col-md-12'>


            {/* sider bar basketball */}

            {/*// Widget Next Match \\*/}

            {
                matchs.length === 0 ? (
                    <div>
                        <p>Aucun match trouvé</p>
                    </div>
                ) : matchs.map((match, index) => (

                    <div className="widget widget_next_match" key={index}>
                        <div className="sportsmagazine-fancy-title"><h2>Prochain Match</h2></div>
                        <div className="widget_next_match_title">
                            <h5>{truncateText(match.tournoi.nom || '-', 25)}</h5>
                            <span>Saison:{truncateText(match.tournoi.saison || '-', 25)}</span>
                        </div>
                        <ul>
                            <li>
                                <img src={`${fileUrl}/images/${match.equipe_domicile?.logo ?? 'logo.png'}`} alt="" />
                                <h6><Link to="#">Domicile</Link></h6>
                                <small>{match.equipe_domicile?.nom || 'Domicile'}</small>
                            </li>
                            <li>
                                <div className="widget_next_match_option">
                                    <h6>{formatDateTimeFR(match.date_match)}</h6>
                                    <small>{truncateText(match.lieu || '-', 15)}</small>
                                </div>
                            </li>
                            <li>
                                <img src={`${fileUrl}/images/${match.equipe_exterieur?.logo ?? 'logo.png'}`} alt="" />
                                <h6><Link to="#">Extérieur</Link></h6>
                                <small>{match.equipe_exterieur?.nom || 'Extérieur'}</small>
                            </li>
                        </ul>
                        <div className="widget_match_countdown">
                            <h6>Compte à rebours du jeu</h6>
                            <div id="sportsmagazine-countdown"></div>
                        </div>

                        <Link to="/donation" className="widget_match_btn">Faire un don</Link>
                    </div>
                ))
            }

            {/*// Widget Next Match \\*/}

            {/*// Widget Trending News \\*/}
            <div className="widget widget_trending_news">
                <div className="sportsmagazine-fancy-title"><h2>Savoir plus nous</h2></div>
                {/* Nav tabs */}
                <ul className="nav-tabs" role="tablist">
                    <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Objectifs et missions</a></li>
                    <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Services</a></li>

                </ul>
                {/* Tab panes */}
                <div className="tab-content">

                    {sites.length === 0 ? (
                        <div>
                            <p>Aucun site trouvé</p>
                        </div>
                    ) : sites.map((item, index) => (

                        <div role="tabpanel" className="tab-pane active" id="home" key={index}>
                            <div className="widget_popular_news">
                                <ul>
                                    <li>
                                        <div className="popular_news_text">
                                            <small>Objectif</small>

                                            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.about ?? '') }} />
                                        </div>
                                    </li>
                                    <li className="widget-injuries">
                                        <div className="popular_news_text">
                                            <small>Mission</small>
                                            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.mission ?? '') }} />
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    ))
                    }

                    <div role="tabpanel" className="tab-pane" id="profile" >
                        <div className="widget_popular_news">
                            <ul>
                                {uiServices.length === 0 ? (
                                    <div>
                                        <p>Aucun service trouvé</p>
                                    </div>
                                ) : uiServices.map((item, index) => (
                                    <li key={index}>
                                        <div className="popular_news_text">
                                            <small>{item.nom}</small>
                                            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.titre ?? '') }} />
                                        </div>
                                    </li>
                                ))
                                }

                            </ul>
                        </div>
                    </div>


                </div>
            </div>
            {/*// Widget Trending News \\*/}


            <aside className="col-md-12">

                {/*// Widget Popular Post \\*/}
                <div className="sportsmagazine-widget-heading"><h2>Joueurs en vedette</h2></div>
                <div className="widget widget_popular_post">
                    <ul>


                        {joueurs.length === 0 ? (
                            <div className='text-center'>
                                Aucun service trouvé
                            </div>
                        ) : (
                            joueurs.map((joueur) => {
                                const age = joueur.date_naissance ? calculateAge(joueur.date_naissance) : '-';

                                return (
                                    <li key={joueur.id}>
                                        <div className="sportsmagazine-popular-post">
                                            <figure><a href="#"><img src={`${fileUrl}/images/${joueur.photo ?? 'avatar.png'}`} alt="" /></a></figure>
                                            <div className="sportsmagazine-popular-post-text">
                                                <h5><a href="#">{joueur.prenom} {joueur.nom} a été sélectionné</a></h5>
                                                <time dateTime="2008-02-14 20:00">Taille: {joueur.taille ? `${joueur.taille}m` : '-'}  Poids:{joueur.poids ? `${joueur.poids}kg` : ''}</time>
                                                <small className='badge badge-primary text-white'> Poste: {joueur.poste ? `${joueur.poste}` : '-'}</small>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })
                        )}


                    </ul>
                </div>
                {/*// Widget Popular Post \\*/}

                {/*// Widget Catégories \\*/}
                <div className="sportsmagazine-widget-heading"><h2>Catégories</h2></div>
                <div className="widget widget_categories">
                    <ul>

                        {
                            categories.map((item, index) => (

                                <li key={index} className='text-white badge bg-primary text-decoration-none w-100 text-center p-2 d-block me-2'><Link to={'/category/' + item.slug}>{item.titre} </Link></li>
                            ))
                        }


                    </ul>
                </div>
                {/*// Widget Cetagories \\*/}

                {/*// Widget Upcoming Matches \\*/}
                <div className="sportsmagazine-widget-heading"><h2>Matchs à venir</h2></div>
                <div className="widget widget_matches">
                    <ul>

                        {
                            nextMatchs.length === 0 ? (
                                <div>
                                    <p>Aucun match trouvé</p>
                                </div>
                            ) : nextMatchs.map((match, index) => (

                                <li key={index}>
                                    <div className="sportsmagazine-team-one">
                                        {/* <img src={`${fileUrl}/images/${match.equipe_domicile?.logo ?? 'logo.png'}`} alt="" /> */}
                                        <h6><Link to="#">{truncateText(match.equipe_domicile?.nom || 'Domicile', 10)}</Link></h6>
                                        <span>{truncateText(formatDateTimeFR(match.date_match), 10)}</span>
                                    </div>
                                    <span>VS</span>
                                    <div className="sportsmagazine-team-two">
                                        {/* <img src={`${fileUrl}/images/${match.equipe_exterieur?.logo ?? 'logo.png'}`} alt="" /> */}
                                        <h6><Link to="#">{truncateText(match.equipe_exterieur?.nom || 'Extérieur', 10)}</Link></h6>
                                        <span>{truncateText(formatDateTimeFR(match.date_match), 10)}</span>
                                    </div>
                                </li>
                            ))
                        }


                    </ul>
                </div>
                {/*// Widget Upcoming Matches \\*/}


                {/* <div className="sportsmagazine-widget-heading"><h2> Dernière publication Facebook</h2></div>
                <div className="widget widget_matches">
                    <iframe
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2Fdreamofdrc&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1153717905395954"
                        width="380"
                        height="400"
                        style={{ border: 'none', overflow: 'hidden' }}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        title="Facebook Page Embed - Dream of DRC"
                        className='col-md-12 col-lg-12 col-sm-12 col-12'
                    ></iframe>
                </div> */}




            </aside>


            {/* fin sider bar basketball */}

        </div>
    )
}
