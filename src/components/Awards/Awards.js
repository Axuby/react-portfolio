import React from 'react'
import { FiExternalLink } from 'react-icons/fi'
import classes from './Awards.module.css'

function Awards() {
    return (
        <div className={classes.box} id="Awards">
            <h4>Awards </h4>
            <span><a href="https://changelly.com/blog/essay-competition-winners/">Winner, Cointelegraph- Changelly Joint Crypto Essay Competition<FiExternalLink/></a></span><br/>
            <span><a href="http://www.tislag.com/home">Winner(Double-Tier),The Investment Society, University Of Lagos  Colloquim Challenge 2020.</a></span>
        
           <h5> Publications</h5>
           <p><a href="https://changelly.com/blog/crypto-dotcom-bubble/">The Crypto Market and the Dotcom Bubble: A Reconaissance<FiExternalLink/></a></p>
        </div>
    )
}

export default Awards
