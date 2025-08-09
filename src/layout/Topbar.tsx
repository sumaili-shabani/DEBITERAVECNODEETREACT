import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { logout, getUser } from '../api/storage';
import { fileUrl } from '../api/config';
import { useTheme } from '../context/ThemeContext';

import { useTranslation } from 'react-i18next';
import { formatDateFR, getTodayFormatted } from '../api/callApi';

export default function Topbar() {
  const navigate = useNavigate();
  const user = getUser();
  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  // pour la langue
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: 'fr' | 'en') => {
    i18n.changeLanguage(lang);
  };
  // fin langue

  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar navbar-expand navbar-light topbar mb-4 static-top shadow">
      {/* Sidebar Toggle (Topbar) */}
      <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
        <i className="fa fa-bars"></i>
      </button>


      {/* Topbar Search */}
      <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
        <div className="input-group">
          <input
            type="text"
            className="form-control bg-light border-0 small"
            placeholder="Search for..."
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">
              <i className="fas fa-search fa-sm"></i>
            </button>
          </div>
        </div>
      </form>


      {/* <!-- Topbar Navbar --> */}
      <ul className="navbar-nav ml-auto">

        {/* bouttons themes */}
        <li className="nav-item dropdown no-arrow mx-1">
          <a className="nav-link" href="#!" role="button" onClick={toggleTheme}>
            <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'} fa-fw`}></i>
          </a>
        </li>
        {/* fin bouttons themes */}

        {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
        <li className="nav-item dropdown no-arrow d-sm-none">
          <a className="nav-link dropdown-toggle" href="#!!" id="searchDropdown" role="button"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-search fa-fw"></i>
          </a>
          {/* <!-- Dropdown - Messages --> */}
          <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
            aria-labelledby="searchDropdown">
            <form className="form-inline mr-auto w-100 navbar-search">
              <div className="input-group">
                <input type="text" className="form-control bg-light border-0 small"
                  placeholder="Search for..." aria-label="Search"
                  aria-describedby="basic-addon2" />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <i className="fas fa-search fa-sm"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>

        {/* <!-- Nav Item - Alerts --> */}
        <li className="nav-item dropdown no-arrow mx-1">
          <a className="nav-link dropdown-toggle" href="#!!" id="alertsDropdown" role="button"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-bell fa-fw"></i>
            {/* <!-- Counter - Alerts --> */}
            <span className="badge badge-danger badge-counter">3+</span>
          </a>
          {/* <!-- Dropdown - Alerts --> */}
          <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="alertsDropdown">
            <h6 className="dropdown-header">
              Alerts Center
            </h6>
            <a className="dropdown-item d-flex align-items-center" href="#!">
              <div className="mr-3">
                <div className="icon-circle bg-primary">
                  <i className="fas fa-file-alt text-white"></i>
                </div>
              </div>
              <div>
                <div className="small text-gray-500">{formatDateFR(getTodayFormatted())}</div>
                <span className="font-weight-bold">Votre nouveau rapport mensuel est prêt à télécharger 📄</span>
              </div>
            </a>

            <Link className="dropdown-item text-center small text-gray-500" to="/all-alerte">Show All Alerts</Link>
          </div>
        </li>

        {/* <!-- Nav Item - Messages --> */}
        <li className="nav-item dropdown no-arrow mx-1">
          <a className="nav-link dropdown-toggle" href="#!" id="messagesDropdown" role="button"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-envelope fa-fw"></i>
            {/* <!-- Counter - Messages --> */}
            <span className="badge badge-danger badge-counter">7</span>
          </a>
          {/* <!-- Dropdown - Messages --> */}
          <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="messagesDropdown">
            <h6 className="dropdown-header">
              Message Center
            </h6>


            <Link className="dropdown-item text-center small text-gray-500" to="/all-messages">Read More Messages</Link>
          </div>
        </li>

        <div className="topbar-divider d-none d-sm-block"></div>

        {/* <!-- Nav Item - User Information --> */}
        <li className="nav-item dropdown no-arrow">
          <a className="nav-link dropdown-toggle" href="#!" id="userDropdown" role="button"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">{user?.name ?? ''}</span>
            <img className="img-profile rounded-circle"
              src={fileUrl + "/images/" + (user?.avatar ?? 'avatar.png')} alt='img' />
          </a>
          {/* <!-- Dropdown - User Information --> */}
          <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="userDropdown">
            <Link className="dropdown-item" to="/profile">
              <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
              {t('menu_profil') ?? ''}
            </Link>
            <Link className="dropdown-item" to="/profile">
              <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
              {t('menu_setting') ?? ''}
            </Link>
            <Link className="dropdown-item" to="/activity-log">
              <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
              {t('menu_activite') ?? ''}
            </Link>
            <div className="dropdown-divider"></div>
            {/* --- Language Switcher --- */}
            <div className="dropdown-item d-flex justify-content-between align-items-center">
              <span className="text-muted">🌐{t('language') ?? 'Language'}</span>
              <div>
                <button
                  className="btn btn-sm btn-outline-primary me-1"
                  onClick={() => changeLanguage('fr')}
                >
                  FR
                </button>
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => changeLanguage('en')}
                >
                  En
                </button>
              </div>
            </div>
            {/* --- Fin Language Switcher --- */}

            <div className="dropdown-divider"></div>
            <button className="dropdown-item" onClick={handleLogout}>
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
              {t('menu_deconnexion') ?? ''}
            </button>
          </div>
        </li>

      </ul>
    </nav>
  )
}

