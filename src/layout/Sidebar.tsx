import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../api/storage';

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
                        <span>Dashboard</span>
                    </Link>
                </li>

                <hr className="sidebar-divider" />

                <div className="sidebar-heading py-1">Main Menu</div>

                <li className={`nav-item py-1 ${openMenus.config ? 'active' : ''}`}>
                    <a className="nav-link" href="#!" onClick={() => toggleMenu('config')}>
                        <i className="fas fa-cogs"></i>
                        <span>Configuration</span>
                        <i className={`fas fa-angle-${openMenus.config ? 'down' : 'right'} float-right`}></i>
                    </a>
                    {openMenus.config && (
                        <ul className="pl-3 list-unstyled">
                            <li>
                                <Link className="nav-link py-1" to="/article">
                                    <i className="fas fa-newspaper"></i> Articles
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link py-1" to="/category">
                                    <i className="fas fa-tags"></i> Categories
                                </Link>
                            </li>
                            <li>
                                <a className="nav-link" href="#!" onClick={() => toggleMenu('blogConfig')}>
                                    <i className="fas fa-layer-group"></i> Blog Config
                                    <i className={`fas fa-angle-${openMenus.blogConfig ? 'down' : 'right'} float-right`}></i>
                                </a>
                                {openMenus.blogConfig && (
                                    <ul className="pl-4 list-unstyled">
                                        <li>
                                            <Link className="nav-link py-1" to="/blog-tags">
                                                <i className="fas fa-tag"></i> Blog Tags
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="nav-link py-1" to="/blog-settings">
                                                <i className="fas fa-sliders-h"></i> Blog Settings
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
                        <span>Utilities</span>
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
                        <span>Settings</span>
                        <i className={`fas fa-angle-${openMenus.settings ? 'down' : 'right'} float-right`}></i>
                    </a>
                    {openMenus.settings && (
                        <ul className="pl-3 list-unstyled">
                            <li><Link className="nav-link py-1" to="/application"><i className="fas fa-cogs"></i> Application</Link></li>
                            <li><Link className="nav-link py-1" to="/rules"><i className="fas fa-gavel"></i> Rules</Link></li>
                            <li><Link className="nav-link py-1" to="/users"><i className="fas fa-users"></i> Users</Link></li>
                            <li><Link className="nav-link py-1" to="/backup"><i className="fas fa-database"></i> Backup</Link></li>
                        </ul>
                    )}
                </li>

                <hr className="sidebar-divider" />

                <li className="nav-item">
                    <a className="nav-link" href="#1" onClick={handleLogout}>
                        <i className="fas fa-sign-out-alt"></i>
                        <span>Logout</span>
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
