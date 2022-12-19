import React from "react";
import "./about.scss";
import AboutImg from "../../images/index.png";
import CV from "../../images/cv-Tatiana.pdf";
import Info from "./Info";

const About = () => {
    return (
       <section className="section about section" id="about">
        <h2 className="section_title">About me</h2>
        <span className="section__subtitle">My intro</span>
        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />
            <div className="about__data">
                <Info />
              <p className="about__description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis dolorum, quo quod ea accusantium cum quasi soluta ipsam consectetur blanditiis, unde numquam at! Commodi iure veniam eius, illo alias quae?</p>  
              <a download="" href={CV} className="button button--flex">Dowload CV</a>
            </div>

        </div>
       </section>
    )
}

export default About;