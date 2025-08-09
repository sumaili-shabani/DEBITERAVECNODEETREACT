import React, { JSX } from 'react'
import { Link } from 'react-router-dom';
import { getRelativeTime } from '../../../../../api/callApi';
import { fileUrl } from '../../../../../api/config';
import { UiBlog } from '../../../../../api/types';

interface BlogCardProps {
    article: UiBlog; // pour construire l'URL des images
}

export default function BlogCard({ article }: BlogCardProps): JSX.Element {
    return (
        <div className="col-md-6 col-lg-4">
            <div className="card border-0 shadow-sm h-100 hover-shadow transition-all">
                <div className="position-relative" style={{ height: "200px" }}>
                    <img
                        src={`${fileUrl}/images/${article.icone}`}
                        alt={article.titre}
                        className="img-fluid w-100 h-100 object-fit-cover card-img-top"
                        style={{ objectFit: "cover", minHeight: "100%" }}
                    />
                    <div className="position-absolute top-0 start-0 m-3">
                        <span className="badge bg-success">{article.category_blog?.titre}</span>
                    </div>
                </div>
                <div className="card-body">
                    <div className="d-flex mb-3">
                        <span className="text-muted small me-3">
                            <i className="fas fa-calendar-alt me-2"></i>Publié: {getRelativeTime(article.createdAt ?? "")}
                        </span>
                    </div>
                    <h3 className="h5 fw-bold">{article.titre}</h3>
                    <p className="card-text">{article.sousTitre}</p>

                    <div>
                        {article.tug
                            ?.split(",")
                            .map((mot) => mot.trim())
                            .filter((mot) => mot.length > 0)
                            .map((mot, index) => (
                                <span key={index} className="badge rounded-pill bg-secondary me-1 mb-1">
                                    {mot}
                                </span>
                            ))}
                    </div>
                </div>
                <div className="card-footer bg-transparent border-0">
                    <Link to={`/blog/${article.slug}`} className="btn btn-link text-success text-decoration-none p-0">
                        Lire l'article <i className="fas fa-arrow-right ms-2"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
}

