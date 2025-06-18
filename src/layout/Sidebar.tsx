import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../api/storage';
import { useTranslation } from 'react-i18next';

export default function Sidebar() {
    const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});
    const [isToggled, setIsToggled] = useState(false);
    const navigate = useNavigate();

    const handleSidebarToggle = () => {
        setIsToggled(!isToggled);
    };

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };

    const toggleMenu = (menu: string) => {
        setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
    };

    // pour la langue
    const { t, i18n } = useTranslation();
    // fin langue



    return (
        <div id="wrapper" className={isToggled ? 'toggled' : ''}>
            <ul className={`navbar-nav sidebar sidebar-dark bg-gradient-dark accordion ${isToggled ? 'toggled' : ''}`} id="accordionSidebar">

                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-graduation-cap"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">Elimu <sup>1</sup></div>
                </a>

                <hr className="sidebar-divider my-0" />

                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>{t('sideBar_dashboard') ?? ''}</span>
                    </Link>
                </li>

                <hr className="sidebar-divider" />

                <div className="sidebar-heading py-1">{t('sideBar_main_menu') ?? ''}</div>

                <li className={`nav-item py-1 ${openMenus.config ? 'active' : ''}`}>
                    <a className="nav-link" href="#!" onClick={() => toggleMenu('config')}>
                        <i className="fas fa-cogs"></i>
                        <span>{t('sideBar_configuration') ?? ''}</span>
                        <i className={`fas fa-angle-${openMenus.config ? 'down' : 'right'} float-right`}></i>
                    </a>
                    {openMenus.config && (
                        <ul className="pl-3 list-unstyled">
                            <li>
                                <Link className="nav-link py-1" to="/article">
                                    <i className="fas fa-newspaper"></i> {t('sideBar_articles') ?? ''}
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link py-1" to="/category">
                                    <i className="fas fa-tags"></i> {t('sideBar_categories') ?? ''}
                                </Link>
                            </li>
                            <li>
                                <a className="nav-link" href="#!" onClick={() => toggleMenu('blogConfig')}>
                                    <i className="fas fa-layer-group"></i> {t('sideBar_blog_config') ?? ''} 
                                    <i className={`fas fa-angle-${openMenus.blogConfig ? 'down' : 'right'} float-right`}></i>
                                </a>
                                {openMenus.blogConfig && (
                                    <ul className="pl-4 list-unstyled">
                                        <li>
                                            <Link className="nav-link py-1" to="/blog-tags">
                                                <i className="fas fa-tag"></i> {t('sideBar_blog') ?? ''} 
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="nav-link py-1" to="/blog-settings">
                                                <i className="fas fa-sliders-h"></i> {t('sideBar_blogSettings') ?? ''} 
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    )}
                </li>

                <li className={`nav-item py-1 ${openMenus.utilities ? 'active' : ''}`}>
                    <a className="nav-link" href="#!" onClick={() => toggleMenu('utilities')}>
                        <i className="fas fa-toolbox"></i>
                        <span>{t('sideBar_utilities') ?? ''} </span>
                        <i className={`fas fa-angle-${openMenus.utilities ? 'down' : 'right'} float-right`}></i>
                    </a>
                    {openMenus.utilities && (
                        <ul className="pl-3 list-unstyled">
                            <li><Link className="nav-link py-1" to="/color"><i className="fas fa-palette"></i> Colors</Link></li>
                            <li><Link className="nav-link py-1" to="/border"><i className="fas fa-border-style"></i> Borders</Link></li>
                            <li><Link className="nav-link py-1" to="/animation"><i className="fas fa-magic"></i> Animations</Link></li>
                            <li><Link className="nav-link py-1" to="/other"><i className="fas fa-ellipsis-h"></i> Other</Link></li>
                        </ul>
                    )}
                </li>

                <li className={`nav-item ${openMenus.settings ? 'active' : ''}`}>
                    <a className="nav-link" href="#!" onClick={() => toggleMenu('settings')}>
                        <i className="fas fa-wrench"></i>
                        <span>{t('sideBar_settings') ?? ''}</span>
                        <i className={`fas fa-angle-${openMenus.settings ? 'down' : 'right'} float-right`}></i>
                    </a>
                    {openMenus.settings && (
                        <ul className="pl-3 list-unstyled">
                            <li><Link className="nav-link py-1" to="/application"><i className="fas fa-cogs"></i> {t('sideBar_application') ?? ''}</Link></li>
                            <li><Link className="nav-link py-1" to="/rules"><i className="fas fa-gavel"></i> {t('sideBar_rules') ?? ''}</Link></li>
                            <li><Link className="nav-link py-1" to="/counts"><i className="fas fa-users"></i> {t('sideBar_users') ?? ''}</Link></li>
                            <li><Link className="nav-link py-1" to="/backup"><i className="fas fa-database"></i> {t('sideBar_backup') ?? ''}</Link></li>
                        </ul>
                    )}
                </li>

                <hr className="sidebar-divider" />

                <li className="nav-item">
                    <a className="nav-link" href="#1" onClick={handleLogout}>
                        <i className="fas fa-sign-out-alt"></i>
                        <span>{t('sideBar_logout') ?? ''}</span>
                    </a>
                </li>
                <hr className="sidebar-divider" />


                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle" onClick={handleSidebarToggle}></button>
                </div>
            </ul>
        </div>
    );
}
