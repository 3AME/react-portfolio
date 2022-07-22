import React from "react";
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {BiCertification} from 'react-icons/bi'
import Demola_certificate from '../../assets/Anfang Liu- KAMK Certificate - Demola Global Project 2020.pdf'

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Experience</h5>
                            <small>9 month internship</small>
                        </article>

                        

                        <article className="about__card">
                            <VscFolderLibrary className="about__icon"/>
                            <h5>Projects</h5>
                            <small>9 completed</small>
                        </article>

                        <article className="about__card">
                            <BiCertification className="about__icon"/>
                            <h5>Demola Certificate of Achievement</h5>
                            {/* <small>200+ Worldwide</small> */}
                            <small>
                            <a href={Demola_certificate} download className="btn">Download</a>
                            </small>
                            
                        </article>
                    </div>
                    <p>
                    “What I hear I forget. What I see, I remember. What I do, I understand!"
                    </p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About