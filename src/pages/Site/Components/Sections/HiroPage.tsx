import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Choix from './home/Choix'
import Service from './home/Service'
import Partenaire from './home/Partenaire'
import Projet from './home/Projet'
import Article from './home/Article'
import ServiceHome from './home/ServiceHome'
import Valeur from './about/Valeur'
import Commentcamarche from './about/Commentcamarche'
import Carousel from './about/Carouse'




export default function HiroPage() {
      useEffect(() => {
          document.title = "Simplifiez vos déplacements en toute sécurité. Commandez votre taxi ou moto en un clic, à tout moment. - Swiftride";
    
        }, []);
    return (
        <div>
            {/* carousel */}
            <Carousel />
            {/* fin carousel */}

            {/* valeur */}
            <Valeur />
            {/* fin valeur */}

            {/* pourquoi nous choisir */}
            <Choix />
            {/* fin */}

            {/* Nos Services */}
            <ServiceHome />
            {/* fin  Nos Services */}

            {/*  Bloc Fonctionnalités (Cartes Illustrées) */}
            <Commentcamarche />
            {/* fin  Bloc Fonctionnalités (Cartes Illustrées) */}
            {/* les Projet */}
            <Projet />
            {/* fin les Projet */}
            {/* les articles */}
            <Article />
            {/* fin les articles */}

            {/* les partenaires */}
            <Partenaire />
            {/* fin les partenaires */}

        </div>
    )
}
