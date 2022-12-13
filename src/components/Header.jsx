import React from "react";
import "./header.scss"

const Header = () => {
    return (
        <header className="header">
            <nav className="nav container">
            <a href="index.html" className="nav__logo"></a>

            <div className="nav__menu">
                <ul className="nav_list grid">

                    <li className="nav__item">
                        <a href="#home" className="nav__link">
                            <i className="uil uil-estate nav__icon"></i>
                            01.home
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <i className="uil-uil-nav__icon"></i>
                            02.about
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills" className="nav__link">
                            <i className="uil-uil-nav__icon"></i>
                            03.my_skills
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#portfolio" className="nav__link">
                            <i className="uil-uil-nav__icon"></i>
                            04.portfolio
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                            <i className="uil-uil-nav__icon"></i>
                            05.contact_me
                        </a>
                    </li>

                </ul>

                <i className="uil uil-times nav__close"></i>
            </div>

            <div className="nav__toggle">
                <i className="uil uil-apps"></i>  
            </div>
            </nav>
        </header>
    )
}

export default Header