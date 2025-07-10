import React from 'react'
import Sidebar from './layout/Sidebar';
import Topbar from './layout/Topbar';
import Footer from './layout/Footer';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import ProfilPage from './pages/ProfilPage';
import SettingPage from './pages/SettingPage';
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
import UserPage from './pages/admin/pages/users/UserPage';
import SitePage from './pages/admin/pages/sites/SitePage';
import UserProfile from './pages/admin/pages/InfoUser/UserProfile';
import BackupPage from './pages/admin/pages/Backup/BackupPage';
import Dashboard from './pages/admin/pages/Dashboard/Dashboard';
import TugBlog from './pages/Site/Articles/TugBlog';
import CategoryBlog from './pages/Site/Articles/CategoryBlog';
import Blog from './pages/Site/Articles/Article';
import RealisationPage from './pages/Site/Pages/Realisation';
import RapportPage from './pages/Site/Pages/Rapport';
import TeamPage from './pages/Site/Pages/TeamPage';
import SecteurPage from './pages/Site/Pages/Secteur';
import CarouselPage from './pages/Site/Pages/Carousel';
import ProjetPage from './pages/Site/Pages/ProjetPage';
import OffrePage from './pages/Site/Pages/OffrePage';
import BasicPage from './pages/Site/Pages/BasicPage';
import ServicePage from './pages/Site/Pages/ServicePage';
import ValeurPage from './pages/Site/Pages/ValeurPage';
import ChoicePage from './pages/Site/Pages/ChoixPage';
import PartenairePage from './pages/Site/Pages/PartenairePage';
import VideoPage from './pages/Site/Pages/VideoPage';
import ImagePage from './pages/Site/Pages/ImagePage';



function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const noLayoutRoutes = ['/login', '/register', '/forgot'];

  const isAuthPage =
    noLayoutRoutes.includes(location.pathname) ||
    location.pathname.startsWith('/reset-password') ||
    location.pathname === '*';

  if (isAuthPage) {
    return <>{children}</>;
  }

  return (

    <div id="wrapper">
      <Sidebar />

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar />
          <div className="container-fluid">{children}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
}


function App() {
  return (

    <Router>
      <LayoutWrapper>
        <Routes>

          {/* Authentification (pas besoin de protection) */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />

          {/* Fin Authentification (pas besoin de protection) */}

          {/* Routes privées bloc */}
          <Route
            path="/blog-tags"
            element={
              <PrivateRoute>
                <TugBlog />
              </PrivateRoute>
            }
          />
          <Route
            path="/category-blog"
            element={
              <PrivateRoute>
                <CategoryBlog />
              </PrivateRoute>
            }
          />
          <Route
            path="/article"
            element={
              <PrivateRoute>
                <Blog />
              </PrivateRoute>
            }
          />

          <Route
            path="/realisation"
            element={
              <PrivateRoute>
                <RealisationPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/rapport"
            element={
              <PrivateRoute>
                <RapportPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/team"
            element={
              <PrivateRoute>
                <TeamPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/secteur"
            element={
              <PrivateRoute>
                <SecteurPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/carousel"
            element={
              <PrivateRoute>
                <CarouselPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/project"
            element={
              <PrivateRoute>
                <ProjetPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/offer"
            element={
              <PrivateRoute>
                <OffrePage />
              </PrivateRoute>
            }
          />

          <Route
            path="/conf_basic"
            element={
              <PrivateRoute>
                <BasicPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/service"
            element={
              <PrivateRoute>
                <ServicePage />
              </PrivateRoute>
            }
          />

          <Route
            path="/valeur"
            element={
              <PrivateRoute>
                <ValeurPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/choice"
            element={
              <PrivateRoute>
                <ChoicePage />
              </PrivateRoute>
            }
          />

          <Route
            path="/partenaire"
            element={
              <PrivateRoute>
                <PartenairePage />
              </PrivateRoute>
            }
          />

          <Route
            path="/video"
            element={
              <PrivateRoute>
                <VideoPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/galery"
            element={
              <PrivateRoute>
                <ImagePage />
              </PrivateRoute>
            }
          />



























          {/* Routes privées */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/profile"
            element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>
            }
          />
          <Route path="/settings"
            element={
              <PrivateRoute>
                <SettingPage />
              </PrivateRoute>
            }
          />

          {/* pages de chargement admin */}
          <Route path="/rules"
            element={
              <PrivateRoute>
                <RolePage />
              </PrivateRoute>
            }
          />

          {/* page de configuration de compte */}
          <Route
            path="/counts"
            element={
              <PrivateRoute>
                <UserPage />
              </PrivateRoute>
            }
          />
          {/* page de configuration de sit */}
          <Route
            path="/application"
            element={
              <PrivateRoute>
                <SitePage />
              </PrivateRoute>
            }
          />

          {/* page de configuration de sit */}
          <Route
            path="/backup"
            element={
              <PrivateRoute>
                <BackupPage />
              </PrivateRoute>
            }
          />



          {/* fin pages de chargement */}

          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />

        </Routes>
      </LayoutWrapper>

      {/* Scroll to Top */}
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
      {/* ajout des notification */}
      <ToastContainer />
    </Router>
  );
}
export default App;