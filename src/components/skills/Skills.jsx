import React from "react";
import "./skills.scss";
import Design from "./Design";
import Developer from "./Developer";


const Skills = () => {
    return (
        <section className="skills section" id="skills">
<h2 className="section_title">Skills</h2>
        <span className="section__subtitle">My intro</span>

<div className="skills__container container grid">

<Design />
<Developer />
</div>
        </section>
    )
}

export default Skills;