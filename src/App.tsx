import React from 'react'
import Sidebar from './layout/Sidebar';
import Topbar from './layout/Topbar';
import Footer from './layout/Footer';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import ProfilPage from './pages/ProfilPage';
import NotFoundPage from './pages/NotFoundPage';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home';
import PrivateRoute from './utils/PrivateRoute';
import Forgot from './pages/auth/Forgot';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ResetPassword from './pages/auth/ResetPassword';
//utilisation des pages de configuration
import RolePage from './pages/admin/pages/roles/rolePage';
import './App.css';
import './theme.css';
import Index from './pages/Site/Pages/Index';
import NavBar from './pages/Site/Layout/NavBar';
import SiderBar from './pages/Site/Layout/SiderBar';
import FooterPage from './pages/Site/Layout/FooterPAge';
import SideBarInfo from './pages/Site/Layout/SideBarInfo';
import About from './pages/Site/Components/Sections/about/About';
import Contact from './pages/Site/Components/Sections/about/Contact';
import Faq from './pages/Site/Components/Sections/about/Faq';
import Service from './pages/Site/Components/Sections/home/Service';
import Projet from './pages/Site/Components/Sections/home/Projet';
import Article from './pages/Site/Components/Sections/home/Article';
import Team from './pages/Site/Components/Sections/about/Team';
import SingleBlog from './pages/Site/Components/Sections/about/SigleBlog';
import BlogList from './pages/Site/Components/Sections/home/BlogList';
import SingleService from './pages/Site/Components/Sections/about/SigleService';
import SigleProject from './pages/Site/Components/Sections/about/SigleProject';
import Commentcamarche from './pages/Site/Components/Sections/about/Commentcamarche';
import SosPage from './pages/Site/Components/Sections/about/SosPage';
import Partagetrajet from './pages/Site/Components/Sections/about/Partagetrajet';
import IdentificationChauffeur from './pages/Site/Components/Sections/about/IdentificationChauffeur';
import OffrePromotion from './pages/Site/Components/Sections/about/OffrePromotion';
import CodePromo from './pages/Site/Components/Sections/about/CodePromo';
import Partenaire from './pages/Site/Components/Sections/home/Partenaire';
import Secteur from './pages/Site/Components/Sections/about/Secteur';
import Work from './pages/Site/Components/Sections/about/Work';
import Don from './pages/Site/Components/Sections/about/Don';
import StructureGestion from './pages/Site/Components/Sections/about/StructureGestion';
import Financement from './pages/Site/Components/Sections/about/Financement';
import LocationVehicule from './pages/Site/Components/Sections/about/LocationVehicule';
import Reservation from './pages/Site/Components/Sections/about/Reservation';
import Vacancy from './pages/Site/Components/Sections/about/Vacancy';
import SigleVacancy from './pages/Site/Components/Sections/about/SigleVacancy';
import Galery from './pages/Site/Components/Sections/about/Galery';
import Videos from './pages/Site/Components/Sections/about/Videos';
import BlogListByCategory from './pages/Site/Components/Sections/home/BlogListByCategory';
import PartenariatShip from './pages/Site/Components/Sections/about/PartenariatShip';



function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const noLayoutRoutes = ['/home', '/'];

  const isAuthPage =
    noLayoutRoutes.includes(location.pathname) ||
    location.pathname.startsWith('/reset-password') ||
    location.pathname === '*';

  if (isAuthPage) {
    return (

      <div id="wrapper">

        {/* NavBar lg */}
        <NavBar />
        {/* <!-- Navbar Mobile - Offcanvas Menu - Adaptatif --> */}
        <SiderBar />

        {/* body */}
        <div className='col-md-12 col-lg-12 col-sm-12 col-12 mt-2'>

          {children}

        </div>
        {/* fin body */}


        {/* footer */}
        <FooterPage />

        {/* fin footer */}


      </div>

    );
  }

  return (

    <div id="wrapper">

      {/* NavBar lg */}
      <NavBar />
      {/* <!-- Navbar Mobile - Offcanvas Menu - Adaptatif --> */}
      <SiderBar />

      {/* body */}
      <div className="container">
        <div className='col-md-12 col-lg-12 col-sm-12 col-12 mt-2'>

          <div className="row">
            <div className="col-md-9 col-lg-9 col-sm-12 col-12">
              {children}
            </div>
            <div className="col-md-3 col-lg-3 col-sm-12 col-12">
              <SideBarInfo />
            </div>
          </div>

        </div>
      </div>
      {/* fin body */}


      {/* footer */}
      <FooterPage />

      {/* fin footer */}


    </div>



  );
}


function App() {
  return (

    <Router>
      <LayoutWrapper>
        <Routes>



          {/* Fin Authentification (pas besoin de protection) */}

          <Route
            path="/" element={<Index />}
          />
          <Route
            path="/about" element={<About />}
          />
          <Route
            path="/contact" element={<Contact />}
          />
          <Route
            path="/faq" element={<Faq />}
          />

          <Route
            path="/services" element={<Service />}
          />

          <Route
            path="/projects" element={<Projet />}
          />

          <Route
            path="/blogs" element={<BlogList />}
          />

          <Route
            path="/blog/:slug" element={<SingleBlog />}
          />
          <Route
            path="/service/:slug" element={<SingleService />}
          />
          <Route
            path="/project/:slug" element={<SigleProject />}
          />

          <Route
            path="/how-it-works" element={<Commentcamarche />}
          />
          <Route
            path="/sos" element={<SosPage />}
          />

          <Route
            path="/partage" element={<Partagetrajet />}
          />
          <Route
            path="/chauffeur" element={<IdentificationChauffeur />}
          />

          <Route
            path="/offre-promotion" element={<OffrePromotion />}
          />

          <Route
            path="/code-promo" element={<CodePromo />}
          />

          <Route
            path="/partenariat-ship" element={<PartenariatShip />}
          />
          <Route
            path="/secteur" element={<Secteur />}
          />

          <Route
            path="/works" element={<Work />}
          />
          <Route
            path="/don" element={<Don />}
          />

          <Route
            path="/structure-gestion" element={<StructureGestion />}
          />
          <Route
            path="/financement" element={<Financement />}
          />

          <Route
            path="/location-vehicule" element={<LocationVehicule />}
          />
          <Route
            path="/reservation-future" element={<Reservation />}
          />

          <Route
            path="/vacancy" element={<Vacancy />}
          />

          <Route
            path="/vacancy-detail/:slug" element={<SigleVacancy />}
          />

          <Route
            path="/galery" element={<Galery />}
          />

          <Route
            path="/video" element={<Videos />}
          />

          <Route
            path="/category/:slug" element={<BlogListByCategory />}
          />

          

          


          

          

          

          























          <Route
            path="/team" element={<Team />}
          />




          {/* Routes privées */}
          {/* <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          /> */}



          {/* fin pages de chargement */}

          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />

        </Routes>
      </LayoutWrapper>

      {/* Scroll to Top */}
      {/* <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a> */}
      {/* ajout des notification */}
      <ToastContainer />
    </Router>
  );
}
export default App;