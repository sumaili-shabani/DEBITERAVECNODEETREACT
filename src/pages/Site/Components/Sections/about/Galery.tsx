import React from 'react'

export default function Galery() {
    return (
        <section className="py-5" id="galerie">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Galerie <span className="text-success">SwiftRide</span></h2>
                    <p className="text-muted">Explorez nos moments forts en images</p>
                </div>

                <div className="row g-3">
                    {/* <!-- Image 1 --> */}
                    <div className="col-md-4" style={{ width: '300px' }}>
                        <div className="card border-0 shadow-sm img-fluid w-100 h-100 object-fit-cover card-img-top"
                            style={{ objectFit: "cover", minHeight: "100%" }}>
                            <img src="https://plus.unsplash.com/premium_photo-1682089290752-2bd553508b29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UiVDMyVBOXNlcnZhdGlvbiUyMCVDMyVBMCUyMGwnYXZhbmNlfGVufDB8fDB8fHww" className="card-img-top img-fluid"
                                alt="Galerie SwiftRide 1" data-bs-toggle="modal" data-bs-target="#modalImage1" />
                        </div>
                    </div>

                    {/* <!-- Image 2 --> */}
                    <div className="col-md-4" style={{ width: '300px' }}>
                        <div className="card border-0 shadow-sm img-fluid w-100 h-100 object-fit-cover card-img-top">
                            <img src="https://media.istockphoto.com/id/2206001505/fr/photo/une-femme-r%C3%A9serve-un-vol-en-ligne-%C3%A0-laide-de-son-smartphone-et-de-son-ordinateur-portable.webp?a=1&b=1&s=612x612&w=0&k=20&c=MFZ8ChFlD3DyTEB4UtbihhT9AJHA_1YW5zNoCbGmaVw=" className="card-img-top img-fluid"
                                alt="Galerie SwiftRide 2" data-bs-toggle="modal" data-bs-target="#modalImage2"
                                style={{ objectFit: "cover", minHeight: "100%" }} />
                        </div>
                    </div>

                    {/* <!-- Image 3 --> */}
                    <div className="col-md-4" style={{ width: '300px' }}>
                        <div className="card border-0 shadow-sm img-fluid w-100 h-100 object-fit-cover card-img-top">
                            <img src="https://media.istockphoto.com/id/2218205846/fr/photo/application-num%C3%A9rique-postulez-maintenant-technologie.webp?a=1&b=1&s=612x612&w=0&k=20&c=65EC8EUtaOzqYR4JO71c1i9DLcz42oKiZXzs000ZbN4=" className="card-img-top img-fluid"
                                alt="Galerie SwiftRide 3" data-bs-toggle="modal" data-bs-target="#modalImage3"
                                style={{ objectFit: "cover", minHeight: "100%" }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
