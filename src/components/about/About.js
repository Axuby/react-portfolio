import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css"; 

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                    <span  className={classes.head}>ABOUT ME</span>
                    <h2 className={classes.heading}>Who Am I?        <p>Seen the bifurcation of creativity, awe and innovativenss?</p> </h2>
                    <div className={classes.About}>
                         <p> I'm  Azubuine Samuel by name ,or Axuby for short and I just graduated with a Bachelor of Engineering from  University of Nigeria, Nsukka. I'm Software Engineer</p>
                         <p className={classes.br}>with interest in building real-world solutions with modern tools, and overall, I'm a  tech enthusiast. I also like to stay on top of latest relevant trends.
 </p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;