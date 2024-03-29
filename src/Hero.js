import React from 'react'; 
import './Hero.css';
import { FaGithub, FaLinkedin, FaRegFileAlt} from 'react-icons/fa';
import { Urls } from './url';

const HeroContent = () => { 

    return ( 
        <div id='hero' className='hero'>  
            <h1 className='hero-name'>Ghulam Afzal</h1>
            <p className='hero-about-me'>I am currently a junior attending the University of Connecticut as a computer science student. I have a passion for web development, game development, and embedded programming.</p>
            <ul className='wrapper'>
                <a href={Urls.linkedin}><li className='icon linkedin'><span><FaLinkedin /></span></li></a>
                <a href={Urls.github}><li className='icon github'><span><FaGithub /></span></li></a>
            </ul>
        </div>
    )    

}

export default HeroContent;