import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface Partner {
    name: string;
    logo: string;
    url: string;
}
export default function Partenaire() {
    
    const partners: Partner[] = [
        {
            name: "WFP",
            logo: "https://santeplusrdc.org/partenaire/1713261162.png",
            url: "https://fr.wfp.org/"
        },
        {
            name: "UNICEF",
            logo: "https://santeplusrdc.org/partenaire/1713260618.jpg",
            url: "https://www.unicef.org/fr"
        },
        {
            name: "USAID",
            logo: "https://santeplusrdc.org/partenaire/1713260580.jpg",
            url: "https://www.usaid.gov/"
        },
        {
            name: "Santé Plus RDC",
            logo: "https://santeplusrdc.org/partenaire/1713260528.png",
            url: "https://santeplusrdc.org/"
        },
        {
            name: "Dream of DRC",
            logo: "https://santeplusrdc.org/partenaire/1702989736.png",
            url: "https://dreamofdrc.com/"
        }
    ];
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };
    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    
                    <h2 className="display-5 fw-bold mb-3">Nos <span className="text-success">partenaires</span></h2>
                    
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        <b className="text-3xl font-bold mt-2 mb-4">Ils nous accompagnent</b>: Découvrez nos partenaires qui nous font confiance
                    </p>
                </div>

                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {partners.map((partner, index) => (
                        <div key={index} className="px-4 py-6">
                            <a
                                href={partner.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 h-full"
                            >
                                <div className="flex justify-center items-center h-32">
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="h-16 w-auto mx-auto opacity-80 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                                        style={{
                                            maxWidth: '200px',
                                            maxHeight: '160px',
                                            objectFit: 'contain'
                                        }}
                                    />
                                </div>
                                {/* <p className="mt-4 text-center font-medium text-gray-700">{partner.name}</p> */}
                            </a>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>

    )
}
