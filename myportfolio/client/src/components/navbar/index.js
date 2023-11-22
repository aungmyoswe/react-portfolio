import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { AiOutlineClose } from "react-icons/ai"
import { TiThMenuOutline } from "react-icons/ti";
import ACCOUNT from '../../assets/files/Aung Myo Swe CV.pdf';
import "./style.css";
import ams from "../../assets/images/ams.jpg";
// import styled from "styled-components";


function NavBar() {
    const [show, setClick] = useState(false);
    const onclickMenu = (e) => {
        if (show === false){
            setClick(true);
        }
        else{
            setClick(false)
        }
    }    
  return (
    <div className="navbar">
        <div className="nav-desktop">
            <ul>
                <Link to='/ ' className="logo-name">
                <span>
                    <img src={ams} alt="" />
                </span>
                <strong>Aung Myo Swe</strong>
                
                </Link>
                <Link to='/about' className="menu">
                    <li>About</li>
                </Link>
                <Link to='/experience' className="menu">
                    <li >Experience</li>
                </Link>
                <Link to='/project' className="menu">
                    <li >Project</li>
                </Link>
                <Link to='/contact' className="menu">
                    <li >Contact</li>
                </Link>
                <Link to={ACCOUNT} target="_blank" download className="menu">
                    <li >Download CV</li>
                </Link>
            </ul>
        </div>
        <div className="nav">
        {(show)?"":<div  className="nav-header">
            <div className="logo"><a href='/ ' className="logo-img"><img src={ams} alt="" /></a></div>
            <div className="name"><a href='/ ' ><strong >Aung Myo Swe</strong></a></div>
            <div className="close" onClick={onclickMenu}> <TiThMenuOutline size={30} className="close-item"/></div>
        </div>}
        {(show)?
        <div  className="nav-header">
            <div className="logo"><a href='/ ' className="logo-img"><img src={ams} alt="" /></a></div>
            <div className="name"><a href='/ ' ><strong >Aung Myo Swe</strong></a></div>
            <div className="close" onClick={onclickMenu}> <AiOutlineClose size={30} className="close-item"/></div>
        </div>: ""}
        {(show)?
       <ul>
            <Link to='/about' className="menu" onClick={onclickMenu}>
                <li>About</li>
            </Link>
            <Link to='/experience' className="menu" onClick={onclickMenu}>
                <li >Experiences</li>
            </Link>
            <Link to='/project'className="menu" onClick={onclickMenu}>
                <li >Project</li>
            </Link>
            <Link to='/contact'className="menu" onClick={onclickMenu}>
                <li >Contact</li>
            </Link>
            <Link to={ACCOUNT} target="_blank" download className="menu" onClick={onclickMenu}>
                    <li >Download CV</li>
            </Link>
        </ul>:""}
    </div>
    </div>
  );
}

export default NavBar;