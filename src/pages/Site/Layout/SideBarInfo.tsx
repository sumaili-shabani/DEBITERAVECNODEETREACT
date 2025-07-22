import React from 'react'
import { Link } from 'react-router-dom'

export default function SideBarInfo() {
    return (
        <div className='col-md-12'>
            {/* Section Réseaux Sociaux */}
            <div className="mb-2 p-4 rounded-3 shadow-sm card card-body border-0">
                <h3 className="h4 mb-4 text-center fw-bold">Suivez-nous</h3>
                <hr className='text-muted' />
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                    <a href="#" className="btn btn-primary rounded-circle p-3" style={{ width: '50px', height: '50px' }}>
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="btn btn-info text-white rounded-circle p-3" style={{ width: '50px', height: '50px' }}>
                        <i className="fab fa-twitter"></i>
                    </a>
                    
                    <a href="#" className="btn btn-primary rounded-circle p-3" style={{ width: '50px', height: '50px' }}>
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="btn btn-success rounded-circle p-3" style={{ width: '50px', height: '50px' }}>
                        <i className="fab fa-whatsapp"></i>
                    </a>
                </div>
            </div>

            {/* Embedded Facebook */}
            <div className="mb-2 card border-0 shadow-sm overflow-hidden">
                <div className="card-header bg-primary text-white">
                    <i className="fab fa-facebook me-2"></i> Dernière publication Facebook
                </div>
                <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2Fdreamofdrc&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1153717905395954"
                    width="340"
                    height="400"
                    style={{ border: 'none', overflow: 'hidden' }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title="Facebook Page Embed - Dream of DRC"
                    className='col-md-12 col-lg-12 col-sm-12 col-12'
                ></iframe>
            </div>

          

            {/* Catégories Blog */}
            <div className="col-md-12 mt-1">
                <div className="row card border-0">
                    <div className="mega-category card-body">
                        <h5><i className="fas fa-folder-open me-2 swift-text-green"></i> Catégories d’articles</h5>
                        <div className="chip-list d-flex flex-wrap gap-2">
                            <a href="#actualites" className="chip">
                                <i className="fas fa-newspaper me-1 swift-text-green"></i> Actualités
                            </a>
                            <a href="#securite" className="chip">
                                <i className="fas fa-shield-alt me-1 swift-text-green"></i> Sécurité & Prévention
                            </a>
                            <a href="#innovation" className="chip">
                                <i className="fas fa-lightbulb me-1 swift-text-green"></i> Innovation 
                            </a>
                            <a href="#temoignages" className="chip">
                                <i className="fas fa-comment-dots me-1 swift-text-green"></i> Témoignages
                            </a>
                            <a href="#conseils" className="chip">
                                <i className="fas fa-hand-point-right me-1 swift-text-green"></i> Conseils 
                            </a>
                        </div>

                    </div>
                </div>

               
            </div>
            
        </div>
    )
}
