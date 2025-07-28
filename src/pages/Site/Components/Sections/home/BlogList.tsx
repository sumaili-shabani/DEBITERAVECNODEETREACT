import React, { useState } from 'react'
import { Link } from 'react-router-dom'

interface Article {
    title: string;
    description: string;
    date: string;
    comments: number;
    category: string;
    image: string;
    slug: string;
}
export default function BlogList() {
    const [search, setSearch] = useState("");

    const articles: Article[] = [
        {
            title: "Nouvelle fonctionnalité : Partage de trajet",
            description:
                "Découvrez comment économiser jusqu'à 60% sur vos trajets avec notre nouveau système de covoiturage intégré...",
            date: "15 Juin 2023",
            comments: 24,
            category: "Nouveauté",
            image:
                "https://media.istockphoto.com/id/1025484722/photo/business-man-on-casual-business-trip.jpg?s=2048x2048&w=is&k=20&c=bHviFmpiFmBhh7gFDwYr9dFrYIQEEk0g7_Wlv-rH1kQ=",
            slug: "partage-de-trajet"
        },
        {
            title: "5 conseils pour des trajets plus sûrs la nuit",
            description:
                "Nos recommandations pour voyager en toute sécurité pendant les heures nocturnes...",
            date: "2 Juin 2023",
            comments: 18,
            category: "Conseil",
            image:
                "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=60",
            slug: "conseils-nuit"
        },
        {
            title: "Interview : Jean, chauffeur SWIFTRIDE depuis 5 ans",
            description:
                "Rencontre avec un de nos chauffeurs les plus expérimentés et ses anecdotes...",
            date: "20 Mai 2023",
            comments: 32,
            category: "Portrait",
            image:
                "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&auto=format&fit=crop&q=60",
            slug: "interview-jean"
        }
    ];

    const filteredArticles = articles.filter((article) =>
        article.title.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div className="container py-5">
            <div className="text-center mb-4">
                <h2 className="display-5 fw-bold mb-3">
                    Nos <span className="text-success">Articles Récents</span>
                </h2>
                <p className="lead text-muted">
                    Découvrez nos conseils et actualités sur la mobilité urbaine
                </p>
            </div>

            {/* 🔍 Barre de recherche */}
            <div className="row justify-content-center mb-4">
               

                <div className="col-md-6">
                    <div className="input-group mb-3 shadow-sm rounded-pill">
                        <input className="form-control border-0 rounded-pill-start py-3 px-4"
                            placeholder="Rechercher un article..." type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}

                        />
                        <button className="btn btn-success rounded-pill-end px-4" type="button"><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </div>

            <div className="row g-4">
                {filteredArticles.length > 0 ? (
                    filteredArticles.map((article, index) => (
                        <div key={index} className="col-md-6 col-lg-4">
                            <div className="card border-0 shadow-sm h-100 hover-shadow transition-all">
                                <div className="position-relative" style={{ height: "200px" }}>
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="img-fluid w-100 h-100 object-fit-cover card-img-top"
                                        style={{ objectFit: "cover", minHeight: "100%" }}
                                    />
                                    <div className="position-absolute top-0 start-0 m-3">
                                        <span className="badge bg-success">{article.category}</span>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex mb-3">
                                        <span className="text-muted small me-3">
                                            <i className="fas fa-calendar-alt me-2"></i> {article.date}
                                        </span>
                                        <span className="text-muted small">
                                            <i className="fas fa-comments me-2"></i> {article.comments} commentaires
                                        </span>
                                    </div>
                                    <h3 className="h5 fw-bold">{article.title}</h3>
                                    <p className="card-text">{article.description}</p>
                                </div>
                                <div className="card-footer bg-transparent border-0">
                                    <Link
                                        to={`/blog/${article.slug}`}
                                        className="btn btn-link text-success text-decoration-none p-0"
                                    >
                                        Lire l'article <i className="fas fa-arrow-right ms-2"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-muted">Aucun article ne correspond à votre recherche.</p>
                )}
            </div>

            <div className="text-center mt-5">
                <Link to="/blogs" className="btn btn-lg btn-outline-success rounded-pill px-4">
                    Voir tous les articles <i className="fas fa-newspaper ms-2"></i>
                </Link>
            </div>
        </div>

    )
}
