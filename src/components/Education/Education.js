import React, { Component } from 'react';
import classes from './Education.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

class Education extends Component {
    render() {
        return (
                <div className={`${classes.box} ${classes.box__flex}` } id="education">
                    <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2' animateOnce="true" initiallyVisible ={true}>
                        <span  className={classes.head}>MY JOURNEY</span>
                        <section className={classes.container}>
                            <div className={classes.container_content}>
                                <div className={classes.row}>
                                    <div className={classes.row_md_12}>
                                        <div className={classes.timeline_centered}>
                                            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                                                <article className={classes.timeline_entry}>
                                                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`} >
                                                        <FaSchool />     
                                                    </div>
                                                    <div className={classes.label}>
                                                    <h2 >Higher Education - <a href="https://en.wikipedia.org/wiki/Christ_the_King_College,_Onitsha">Christ_the_King_College,(C.K.C) Onitsha</a><FiExternalLink/> 
                                                     <p>2008-2014</p></h2>
                                                    <p>I have completed my higher education at <a href='https://en.wikipedia.org/wiki/Christ_the_King_College,_Onitsha'> Christ the King College, Onitsha(C.K.C.)</a>with major subjects as Physics,Chemistry & Maths with 85 merit in CBSE board. </p>
                                                    </div>
                                                </article>
                                            </ScrollAnimation>
                                            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                                                    <article className={classes.timeline_entry}>
                                                        <div className={classes.timeline_icon} >
                                                        <MdSchool />
                                                        </div>
                                                        <div className={classes.label}>
                                                        <h2 >University of Nigeria, Nsukka. -  First Class Honours <span>2015-2021</span></h2>
                                                        <p>I recently completing my undergraduate studies in  Engineering from <a href='http://www.unn.edu.ng'>UNN</a> </p>
                                                        </div>
                                                    </article>
                                                </ScrollAnimation>
                                                <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                                                    <article>
                                                        <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`} >
                                                            <MdWork />     
                                                        </div>
                                                        <div className={classes.label}>
                                                        <h2 >Internship</h2>
                                                        <p>Completed a six-month Internship in Backend Development with <a href='http://www.genesystechhub.com/'>Genesys Tech Hub, Enugu</a>.</p>
                                                        </div>
                                                        <div className={classes.timeline_entry_inner}><div  className={classes.timeline_icon_3||classes.color_none}></div></div>
                                                    </article>
                                                </ScrollAnimation>
                                                <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                                                   <article className={classes.timeline_entry}>
                                                        <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`} >
                                                            <MdWork/>     
                                                        </div>
                                                        <div className={classes.label}>
                                                        <h2 >Apprenticeship</h2>
                                                        <p>Completed a six-month Apprenticeship under the mentorship of Top Global Executives of Tech Companies and another 6-months as a  Fellow in the Software Track <a href='http://www.studentbuild.co/'>StudentBuild Africa</a>.</p>
                                                        </div>
                                                        <div className={classes.timeline_entry_inner}><div  className={classes.timeline_icon_3||classes.color_none}></div></div>
                                                    </article>
                                                </ScrollAnimation>
                                            
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </section>
                    </ScrollAnimation>
                </div>
     
        )
    }
}

export default Education;
