import React from 'react'
import { SocialIcon } from 'react-social-icons';
import ACCOUNT from "../../assets/files/Aung_Myo_Swe_Software Engineer CV.pdf";
import { Link } from 'react-router-dom';
import "./style.css";
import { FcHome, FcAbout, FcBusinessContact, FcDownload } from "react-icons/fc";
import { LiaBuromobelexperte} from "react-icons/lia";
import { GoProjectRoadmap } from "react-icons/go";

const Footer = () => {
    return (
        <footer>
            <div className='footer'>
            <div className="media-social">
                <h1>Contact & Media Link</h1>
                <ul>
                    <li><SocialIcon url="https://www.linkedin.com" network='linkedin' style={{'width':'35px', 'height':'35px'}} /><a href="https://www.linkedin.com/in/aung-myo-swe-0ba5ba1a4">LinkedIn</a></li>
                    <li ><SocialIcon url="https://github.com/" network="github" style={{'width':'35px', 'height':'35px'}}/><a href="https://github.com/aungmyoswe" >GitHub</a></li>
                    <li ><SocialIcon url="https://whatsapp.com" network='whatsapp' style={{'width':'35px', 'height':'35px'}}/><a href="https://whatsapp.com" > +959798722263</a></li>
                    <li><SocialIcon url="www.gmail.google.com" style={{'width':'35px', 'height':'35px'}}/> <a href="https://mail.google.com">aungmyoswe.dev@gmail.com</a></li>
                </ul>
            </div>
            <div className='create-by'>
                <h1>My Portfolio</h1>
                <ul>
                    <li><a href="/">Designed author by Aung Myo Swe</a></li>
                    <li><a href="/">Built with ReactJS & Django</a></li>
                    <li><a href="/">Built at October 2023</a></li>
                </ul>
            </div>
            <div className='page-link'>
                <h1 >Pages</h1>
                <ul >
                <li>
                    <Link to='/'>
                        <FcHome size={30} />
                    </Link>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li><Link to='/about'>
                        <FcAbout size={30} />
                    </Link>
                    <Link to='/about'>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='/experience'>
                        <LiaBuromobelexperte size={30} />
                    </Link>
                    <Link to='/experience'>
                        Experience
                    </Link>
                </li>
                <li>
                    <Link to='/project'>
                        <GoProjectRoadmap size={30} />
                    </Link >
                    <Link to='/project'>
                        Project
                    </Link>
                </li>
                <li>
                    <Link to='/contact'>
                        <FcBusinessContact size={30} />
                    </Link>
                    <Link to='/contact'>
                        Contact
                    </Link>
                </li>
                <li>
                    <Link to={ACCOUNT} target="_blank" download>
                        <FcDownload size={28} style={{'background': 'white'}} />
                    </Link>
                    <Link to={ACCOUNT} target="_blank" download>
                        Download CV
                    </Link>
                </li>                    
                </ul>
            </div>
            </div>
        </footer>
    )
}

export default Footer;
