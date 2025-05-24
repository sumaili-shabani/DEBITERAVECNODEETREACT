import React from 'react'
import Sidebar from './layout/Sidebar';
import Topbar from './layout/Topbar';
import Footer from './layout/Footer';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ProfilPage from './pages/ProfilPage';
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

          {/* Routes privées */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/profile"
            element={
              <PrivateRoute>
                <ProfilPage />
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