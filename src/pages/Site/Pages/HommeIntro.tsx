import React from 'react'
import GaleryHome from '../Components/Sections/about/GaleryHome'
import ArticleHome from '../Components/Sections/about/ArticleHome'
import FaireDon from '../Components/Sections/about/FaireDon'
import Soutient from '../Components/Sections/about/Soutient'
import Chiffre from './Chiffre'

export default function HommeIntro() {
    return (
        <div className='col-md-12'>
            {/* dateTime// Fancy Title \\*/}
            <div className="sportsmagazine-fancy-title">
                <h2>Pourquoi soutenir Eubabu ?</h2>
            </div>
            {/* dateTime// Fancy Title \\*/}

            <Soutient />

            {/* dateTime// Fancy Title \\*/}
            <div className="sportsmagazine-fancy-title">
                <h2>Nos actions en chiffres</h2>
            </div>
            {/* dateTime// Fancy Title \\*/}

            <Chiffre />
            <br />

            {/* dateTime// Fancy Title \\*/}
            <div className="sportsmagazine-fancy-title">
                <h2>Comment faire un don</h2>
            </div>
            {/* dateTime// Fancy Title \\*/}

            <FaireDon />



            {/* Content */}
            <div className="col-md-12">



                {/* Fancy Title */}
                <div className="sportsmagazine-fancy-title">
                    <h2>Publication recente</h2>
                </div>

                {/* Blog Grid */}
                <ArticleHome />



                {/* Fancy Title */}
                <div className="sportsmagazine-fancy-title">
                    <h2>Galérie photo</h2>
                </div>

                <GaleryHome />

            </div>
            {/* Content */}

        </div>
    )
}
