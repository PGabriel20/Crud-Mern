import React from 'react';
import { Link, Switch } from 'react-router-dom';

import './styles.css'

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <a href="/" className="navbar-brand">
                    Controle de Paineis
                </a>
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a href='/paineis' className="nav-link">Paineis</a>
                    </li>
                    <li className="nav-item">
                        <a href='/paineis' className="nav-link">Seus Paineis</a>
                    </li>
                    <li className="nav-item">
                    <a href='/login' className="nav-link">Login</a>
                    </li>
                </div>
            </nav>
        </div>
    );
}

export default Header;
