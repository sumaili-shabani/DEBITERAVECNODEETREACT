import React from 'react'

export default function Videos() {
    return (
        <section className="py-2" id="videos">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Nos <span className="text-success">Vidéos</span></h2>
                    <p className="text-muted">Découvrez SwiftRide en action à travers nos vidéos officielles</p>

                    {/* <!-- Bande de recherche --> */}
                    <div className="col-lg-8 mx-auto">
                        <div className="input-group mb-3 shadow-sm rounded-pill">
                            <input
                                type="text"
                                className="form-control border-0 rounded-pill-start py-3 px-4"
                                placeholder="Rechercher une question..."
                            />
                            <button className="btn btn-success rounded-pill-end px-4" type="button">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>


                <div className="row g-2">

                    {/* <!-- Vidéo 1 --> */}
                    <div className="col-md-6 mb-4">
                        <div className="card hover-shadow transition">
                            <div className="card-body">
                                <div className="mb-2">
                                    <h5 className="fw-bold mb-1">Présentation de SwiftRide</h5>
                                    <p className="text-muted small mb-2">Découvrez comment SwiftRide révolutionne la mobilité urbaine</p>
                                </div>
                                <div className="ratio ratio-16x9 shadow-sm rounded">
                                    <iframe
                                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                        title="Présentation SwiftRide"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <!-- Vidéo 2 --> */}
                    <div className="col-md-6">
                        <div className="card hover-shadow transition">
                            <div className="card-body">
                                <div className="mb-2">
                                    <h5 className="fw-bold mb-1">Présentation de SwiftRide</h5>
                                    <p className="text-muted small mb-2">Découvrez comment SwiftRide révolutionne la mobilité urbaine</p>
                                </div>
                                <div className="ratio ratio-16x9 shadow-sm rounded">
                                    <iframe src="https://www.youtube.com/embed/mfIahOt6sFE?si=KOkgp0lnqPBnvvpd" title="Témoignage client SwiftRide" allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Vidéo 3 --> */}
                    <div className="col-md-6">
                        <div className="card hover-shadow transition">
                            <div className="card-body">
                                <div className="mb-2">
                                    <h5 className="fw-bold mb-1">Présentation de SwiftRide</h5>
                                    <p className="text-muted small mb-2">Découvrez comment SwiftRide révolutionne la mobilité urbaine</p>
                                </div>
                                <div className="ratio ratio-16x9 shadow-sm rounded">
                                    <iframe src="https://www.youtube.com/embed/p-JHTJtXRc4?si=vlAT538gYbggI_03" title="Sécurité avec SwiftRide" allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Vidéo 4 --> */}
                    <div className="col-md-6">
                        <div className="card hover-shadow transition">
                            <div className="card-body">
                                <div className="mb-2">
                                    <h5 className="fw-bold mb-1">Présentation de SwiftRide</h5>
                                    <p className="text-muted small mb-2">Découvrez comment SwiftRide révolutionne la mobilité urbaine</p>
                                </div>
                                <div className="ratio ratio-16x9 shadow-sm rounded">
                                    <iframe src="https://www.youtube.com/embed/vdf0KSxO7SM?si=AerBwL4nF3SCgyKM" title="Nos chauffeurs en action" allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
