import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../api/storage';

export default function Sidebar() {
    const [isToggled, setIsToggled] = useState(false);

    const handleSidebarToggle = () => {
        setIsToggled(!isToggled);
    };

    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };

    return (
        <div id="wrapper" className={isToggled ? 'toggled' : ''}>
            <ul className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${isToggled ? 'toggled' : ''}`} id="accordionSidebar">
                {/* Sidebar - Brand */}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-graduation-cap"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">
                        Elimu  <sup>1</sup>
                    </div>
                </a>

                {/* Divider */}
                <hr className="sidebar-divider my-0" />

                {/* Nav Item - Dashboard */}
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>
                {/* Nav Item - Charts */}
                <li className="nav-item">
                    <Link className="nav-link" to="/charts-user">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span>
                    </Link>
                </li>

                {/* Divider */}
                <hr className="sidebar-divider" />

                {/* Heading */}
                <div className="sidebar-heading">Interface</div>

                {/* Nav Item - Pages Collapse Menu */}
                <li className="nav-item">
                    <Link
                        className="nav-link collapsed"
                        to="#"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="true"
                        aria-controls="collapseTwo"
                    >
                        <i className="fas fa-fw fa-cog"></i>
                        <span>Comfiguration</span>
                    </Link>
                    <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordionSidebar"
                    >
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">blog Components:</h6>
                            <Link className="collapse-item" to="/article">Articles</Link>
                            <Link className="collapse-item" to="/category">Category</Link>
                        </div>
                    </div>
                </li>

                {/* Nav Item - Utilities Collapse Menu */}
                <li className="nav-item">
                    <Link
                        className="nav-link collapsed"
                        to="#"
                        data-toggle="collapse"
                        data-target="#collapseUtilities"
                        aria-expanded="true"
                        aria-controls="collapseUtilities"
                    >
                        <i className="fas fa-fw fa-toolbox"></i>
                        <span>Utilities</span>
                    </Link>
                    <div
                        id="collapseUtilities"
                        className="collapse"
                        aria-labelledby="headingUtilities"
                        data-parent="#accordionSidebar"
                    >
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Utilities:</h6>
                            <Link className="collapse-item" to="/color">Colors</Link>
                            <Link className="collapse-item" to="/border">Borders</Link>
                            <Link className="collapse-item" to="/animation">Animations</Link>
                            <Link className="collapse-item" to="/other">Other</Link>
                        </div>
                    </div>
                </li>

                {/* Divider */}
                <hr className="sidebar-divider" />

                {/* Heading */}
                <div className="sidebar-heading">Addons</div>

                {/* Nav Item - Pages Collapse Menu */}
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        to="#"
                        data-toggle="collapse"
                        data-target="#collapsePages"
                        aria-expanded="true"
                        aria-controls="collapsePages"
                    >
                        <i className="fas fa-fw fa-wrench"></i>
                        <span>Settings</span>
                    </Link>
                    <div
                        id="collapsePages"
                        className="collapse"
                        aria-labelledby="headingPages"
                        data-parent="#accordionSidebar"
                    >
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Configuration App:</h6>
                            <Link className="collapse-item" to="/application">Application</Link>
                            <Link className="collapse-item" to="/rules">Rules</Link>
                            <Link className="collapse-item" to="/users">Users</Link>
                            <div className="collapse-divider"></div>
                            <h6 className="collapse-header">Database</h6>
                            <Link className="collapse-item" to="/backup">Backup</Link>
                           
                        </div>
                    </div>
                </li>

               
                <hr className="sidebar-divider d-none d-md-block" />
                {/* Nav Item - Tables */}
                <li className="nav-item">
                    <a className="nav-link" href='#!' onClick={handleLogout}>
                        <i className="fas fa-sign-out-alt"></i>
                        <span>Logout</span>
                    </a>
                </li>

                {/* Divider */}
                <hr className="sidebar-divider d-none d-md-block" />

                {/* Sidebar Toggler (Sidebar) */}
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle" onClick={handleSidebarToggle}></button>
                </div>
            </ul>
        </div>
    )
}
