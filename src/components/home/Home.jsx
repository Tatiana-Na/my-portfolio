import React from "react";
import './home.scss';
import SocialMedia from './SocialMedia';
import Data from './Data';

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid"></div>
            <div className="home__content grid">
                <SocialMedia />
                <div className="home__img"></div>
                <Data />

            </div>
        </section>
    )
}

export default Home;