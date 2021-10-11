
import React from 'react';
import "./Sidebar.css";

function Sidebar() {
  return (


    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">Dashboard Bits</div>
        </a>

        <hr className="sidebar-divider my-0"/>

        <li className="nav-item active">
            <a className="nav-link" href="index.html">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></a>
        </li>


        <hr className="sidebar-divider"/>


        <div className="sidebar-heading">
            Tablas
        </div>

        <li className="nav-item">
            <a className="nav-link collapsed" href="/" 
                aria-expanded="true" aria-controls="collapseTwo">
                <i className="fas fa-fw fa-cog"> <img className="sidebar-card-illustration mb-2" src="/img/user.svg" alt="..." /> </i>
                <span>Users</span>
            </a>

        </li>


        <li className="nav-item">
            <a className="nav-link collapsed" href="/products" 
                aria-expanded="true" aria-controls="collapseUtilities">
                <i className="fas fa-fw fa-wrench"><img className="sidebar-card-illustration mb-2" src="/img/products.svg" alt="..."/></i>
                <span>Products</span>
            </a>

        </li>

        <hr className="sidebar-divider"/>


        <div className="sidebar-heading">
            Adds
        </div>

  
        <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                aria-expanded="true" aria-controls="collapsePages">
                <i className="fas fa-fw fa-folder"><img className="sidebar-card-illustration mb-2" src="/img/add.svg" alt="..."/></i>
                <span>Pages</span>
            </a>
            <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Login Screens:</h6>
                    <a className="collapse-item" href="login.html">Login</a>
                    <a className="collapse-item" href="register.html">Register</a>
                    <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                    <div className="collapse-divider"></div>
                    <h6 className="collapse-header">Other Pages:</h6>
                    <a className="collapse-item" href="404.html">404 Page</a>
                    <a className="collapse-item" href="blank.html">Blank Page</a>
                </div>
            </div>
        </li>


        <hr className="sidebar-divider d-none d-md-block"/>




        <div className="sidebar-card d-none d-lg-flex">
            <img className="sidebar-card-illustration mb-2" src="/img/undraw_rocket.svg" alt="..."/>
            <p className="text-center mb-2"><strong>bits Admin Pro</strong> Conoce un poco más de la página de bits!</p>
            <a className="btn btn-success btn-sm" href="http://localhost:3100/">Ir a Bits!</a>
        </div>

    </ul>

  );
}

export default Sidebar;



