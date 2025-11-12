import React from 'react'
import { Link } from 'react-router-dom'
import FooterPage from '../Layout/FooterPAge'
import NavBar from '../Layout/NavBar'
import SideBarInfo from '../Layout/SideBarInfo'
import BannerHome from '../Components/Sections/about/BannerHome'
import Soutient from '../Components/Sections/about/Soutient'
import FaireDon from '../Components/Sections/about/FaireDon'
import GaleryHome from '../Components/Sections/about/GaleryHome'
import ArticleHome from '../Components/Sections/about/ArticleHome'
import HommeIntro from './HommeIntro'

export default function Intro() {
    return (

       <div>
            <HommeIntro />
       </div>

    )
}
