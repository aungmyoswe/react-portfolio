import React, { useState } from "react"; 
import ams from "../../assets/images/ams.jpg";
import FadeIn from "../../components/animation";
import "./style.css";
import ExpChart from "../../components/expchart";
import DevChart from "../../components/devchart";

const ReadMore = ({ children, maxChars=800 }) => { 
  const [isReadMore, setIsReadMore] = useState(true); 
  const toggleReadMore = () => { 
    setIsReadMore(!isReadMore); 
  };
  let text = isReadMore ? children.substring(0, maxChars) :children
  if (children.length <= 700) {
    return <div className="about">
              <div className="about-txt">
                  <FadeIn isVisible={1} children={10}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My name is <strong style={{'font-size': '25px', 'font-family': 'sans-serif'}} >Aung Myo Swe</strong>, and I’m a <span style={{'font-size': '22px', 'font-family': 'sans-serif'}}>  full stack developer.</span>I’m a full stack developer.<ReadMore/>
                  </FadeIn>
              </div>
              <div className="about-img">
                  <img src={ams}  alt=""/>               
              </div>
           </div>
    }
  return<div className="about-us">
          <div className="about">
            <div className="about-txt">
                <FadeIn isVisible={1} children={10}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My name is <strong style={{'font-size': '25px', 'font-family': 'sans-serif'}} >Aung Myo Swe</strong>, and I’m a<span style={{'font-size': '22px', 'font-family': 'sans-serif'}}>  full stack developer.</span> { text}
                <span onClick={toggleReadMore} className="read-or-hide"> 
                {isReadMore? '....Read More': 'Read Less'}
                </span>
                </FadeIn>
            </div>
            <div className="about-img">
                <img src={ams}  alt=""/>               
            </div>
          </div>
          <div className="chart">
              <div className="devchart"><DevChart /></div><div className="expchart"><ExpChart /></div>
          </div>
        </div> 
}

function About() {
    return(
      <div> 
          <ReadMore> 
                With 4+ years of experience in web development, I have a strong command over both front-end 
                and back-end technologies, allowing me to build complete and scalable applications. 
                On the front-end side, I specialize in HTML, CSS, and JavaScript frameworks 
                such as React. I’m passionate about creating intuitive user interfaces 
                that provide an exceptional user experience. I develop are responsive, visually appealing, 
                and accessible across different devices and browsers. Moving to the back end, 
                I’m proficient in server-side languages like Python, PHP, or Node.js. 
                I have extensive experience working with databases such as PostgreSQL, and MongoDB, 
                and I can design efficient database structures and write optimized queries. 
                I’m familiar with RESTful APIs and know how to integrate them into applications to enable 
                seamless communication between the front end and back end. I’m excited to be part of a team 
                where I can contribute my full stack development skills and 
                help  create innovative and impactful applications. Thank you for considering me.
        </ReadMore> 
      </div> 
    )    
}

export default About;