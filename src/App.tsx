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