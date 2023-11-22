import React, { useState, useRef } from "react";
import { CSSTransition } from 'react-transition-group';
import "./style.css";
import styled from "styled-components";
// import { findAllByText } from "@testing-library/react";

function Experience(props) {

  const Div = styled.div.attrs('description')`
  margin-top: -60px`

  const [showButton, setShowButton] = useState(true);
  const [hover, setHover] = useState(false);
  const nodeRef = useRef(null);
  const onMouseOverHandler = (e) => {
    if (hover === false) {
      setHover(true);
    }
    else {
      setHover(false);
    }
  };


  const [hover1, setHover1] = useState(false);
  const onMouseOverHandler1 = (e) => {
    if (hover1 === false) {
      setHover1(true);
    }
    else {
      setHover1(false);
    }
  };

  const [hover2, setHover2] = useState(false);
  const onMouseOverHandler2 = (e) => {
    if (hover2 === false) {
      setHover2(true);
    }
    else {
      setHover2(false);
    }
  };

  const [hover3, setHover3] = useState(false);
  const onMouseOverHandler3 = (e) => {
    if (hover3 === false) {
      setHover3(true);
    }
    else {
      setHover3(false);
    }
  };

  const [hover4, setHover4] = useState(false);
  const onMouseOverHandler4 = () => {
    if (hover4 === false) {
      setHover4(true);
    }
    else {
      setHover4(false);
    }
  };

  const [hover5, setHover5] = useState(false);
  const onMouseOverHandler5 = () => {
    if (hover5 === false) {
      setHover5(true);
    }
    else {
      setHover5(false);
    }
  };

  const content = <div className="exp-body">
    <div className="experience">
        {hover?<div className="exp-com" style={{'background-color': '#2fa3b7', 'color': 'white', 'border-top-left-radius': '30px'}}>
        <button>1</button>
        <div onClick={onMouseOverHandler}>
            <div className="role">Junior Developer </div>
            <div className="company">Infinite Business Solution (IT Solution company with 15 staffs in Myanmar)</div>
        </div>
        </div>:<div className="exp-com">
        <button>1</button>
        <div onClick={onMouseOverHandler}>
            <div className="role">Junior Developer </div>
            <div className="company">Infinite Business Solution (IT Solution company with 15 staffs in Myanmar)</div>
        </div>
        </div>}
        {showButton && (hover)}
        <CSSTransition
        in={hover}
        nodeRef={nodeRef}
        timeout={1500}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
        >
        <div ref={nodeRef} className="desc">
            <div className="from-to">
            <div className="date-from"><div className="from">From</div><div className="date">:&nbsp; January 2018 </div></div>
            <div className="date-to"><div className="to"> To</div><div className="date">:&nbsp;  July 2018 </div></div>
            </div>
            <div className="respon-desc">
                <div className="respon">Responsibilities :</div>
                <ul>
                    <li>Developing mini task in projects</li>
                    <li>Write user manuals and resolve issues from UAT.</li>
                    <li>Installing Odoo for Software Development and Customer’s Window Sever</li>
                </ul>
            </div>
        </div>
        </CSSTransition>
    </div>
    <div className="experience">
        {hover1?<div className="exp-com" style={{'background-color': '#2fa3b7', 'color': 'white', 'border-top-left-radius': '30px'}}>
        <button>2</button>
        <div onClick={onMouseOverHandler1}>
            <div className="role">Developer </div>
            <div className="company">Infinite Business Solution (IT Solution company with 15 staffs in Myanmar)</div>
        </div>
        </div>:<div className="exp-com">
        <button>2</button>
        <div onClick={onMouseOverHandler1}>
            <div className="role">Developer </div>
            <div className="company">Infinite Business Solution (IT Solution company with 15 staffs in Myanmar)</div>
        </div>
        </div>}
        {showButton && (hover1)}
        <CSSTransition
        in={hover1}
        nodeRef={nodeRef}
        timeout={1500}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
        >
        <div ref={nodeRef} className="desc">
            <div className="from-to">
            <div className="date-from"><div className="from">From</div><div className="date">:&nbsp;  August 2018 </div></div>
            <div className="date-to"><div className="to"> To</div><div className="date">:&nbsp;  February 2019 </div></div>
            </div>
            <div className="respon-desc">
                <div className="respon">Responsibilities :</div>
                <ul>
                    <li>Supporting for training</li>
                <li>collecting required data at the meeting</li>
                <li>Report meeting minutes to project manager</li>
                <li>manage and plan tasks to develop with teams. </li>
                </ul>
            </div>
        </div>
        </CSSTransition>
    </div>
    <div className="experience">
        {hover2?<div className="exp-com" style={{'background-color': '#2fa3b7', 'color': 'white', 'border-top-left-radius': '30px'}}>
        <button>3</button>
        <div onClick={onMouseOverHandler2}>
            <div className="role">Developer </div>
            <div className="company">Asia Matrix Solution (IT Solution company with 8 staffs in Myanmar)</div>
        </div>
        </div>:<div className="exp-com">
        <button>3</button>
        <div onClick={onMouseOverHandler2}>
            <div className="role">Developer </div>
            <div className="company">Asia Matrix Solution (IT Solution company with 8 staffs in Myanmar)</div>
        </div>
        </div>}
        
        {showButton && (hover2)}
        <CSSTransition
        in={hover2}
        nodeRef={nodeRef}
        timeout={1500}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
        >
        <div ref={nodeRef} className="desc">
            <div className="from-to">
            <div className="date-from"><div className="from">From</div><div className="date">:&nbsp;  February 2019  </div></div>
            <div className="date-to"><div className="to"> To</div><div className="date">:&nbsp;  July 2019 </div></div>
            </div>
            <div className="respon-desc">
                <div className="respon">Responsibilities :</div>
                <ul>
                <li>Handling all projects in development</li>
                <li>decision making for custom development.</li>
                <li>User Training and System Support</li>
                <li>Promotion Setup for POS system</li>
                <li>Debug errors, bugs and create ticket to vendor. </li>
                </ul>
            </div>
        </div>
        </CSSTransition>
    </div>
    <div className="experience">
        {hover3?<div className="exp-com" style={{'background-color': '#2fa3b7', 'color': 'white', 'border-top-left-radius': '30px'}}>
        <button>4</button>
        <div onClick={onMouseOverHandler3}>
            <div className="role">Developer </div>
            <div className="company">Zando Technologies(IT Solution company with 9 staffs in Myanmar)</div>
        </div>
        </div>:<div className="exp-com">
        <button>4</button>
        <div onClick={onMouseOverHandler3}>
            <div className="role">Developer </div>
            <div className="company">Zando Technologies(IT Solution company with 9 staffs in Myanmar)</div>
        </div>
        </div>}
        
        {showButton && (hover3)}
        <CSSTransition
        in={hover3}
        nodeRef={nodeRef}
        timeout={1500}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
        >
        <div ref={nodeRef} className="desc">
            <div className="from-to">
            <div className="date-from"><div className="from">From</div><div className="date">:&nbsp;   August 2019</div></div>
            <div className="date-to"><div className="to"> To</div><div className="date">:&nbsp;  December 2021 </div></div>
            </div>
            <div className="respon-desc">
                <div className="respon">Responsibilities :</div>
                <ul>
                <li>Decision making UI design</li>
                <li>data schema with the Odoo workflow </li>
                <li>Making flowchart design by the development process</li>
                <li>Supporting for the testing Integrating with the existing web application  </li>
                <li>Handling whole project in the development </li>
                </ul>
            </div>
        </div>
        </CSSTransition>
    </div>
    <div className="experience">
        {hover4?<div className="exp-com" style={{'background-color': '#2fa3b7', 'color': 'white', 'border-top-left-radius': '30px'}}>
        <button>5</button>
        <div onClick={onMouseOverHandler4}>
            <div className="role">Senior Developer </div>
            <div className="company">Bagan Innovation Technology (IT Solution company with 50-100 staffs in Myanmar)</div>
        </div>
        </div>:<div className="exp-com">
        <button>5</button>
        <div onClick={onMouseOverHandler4}>
            <div className="role">Senior Developer </div>
            <div className="company">Bagan Innovation Technology (IT Solution company with 50-100 staffs in Myanmar)</div>
        </div>
        </div>}
        
        {showButton && (hover4)}
        <CSSTransition
        in={hover4}
        nodeRef={nodeRef}
        timeout={1500}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
        >
        <div ref={nodeRef} className="desc">
            <div className="from-to">
            <div className="date-from"><div className="from">From</div><div className="date">:&nbsp;   February 2022</div></div>
            <div className="date-to"><div className="to"> To</div><div className="date">:&nbsp;  November 2022 </div></div>
            </div>
            <div className="respon-desc">
                <div className="respon">Responsibilities :</div>
                <ul>
                <li>Integration and migration data from another software to Odoo system</li>
                <li>Develop RESTFUL API to import and export data.</li>
                <li>Backend development for Laravel framework API</li>
                <li>Supporting for the testing Integrating with the existing web application  </li>
                <li>Export and Import process.</li>
                </ul>
            </div>
        </div>
        </CSSTransition>
    </div>
    <div className="experience">
        {hover5?<div className="exp-com" style={{'background-color': '#2fa3b7', 'color': 'white', 'border-top-left-radius': '30px'}}>
        <button>6</button>
        <div onClick={onMouseOverHandler5}>
            <div className="role">Software Developer </div>
            <div className="company">Ectivise Solutions Pte Ltd(IT Solution company with 10 staffs in Singapore)</div>
        </div>
        </div>:<div className="exp-com">
        <button>6</button>
        <div onClick={onMouseOverHandler5}>
            <div className="role">Software Developer </div>
            <div className="company">Ectivise Solutions Pte Ltd(IT Solution company with 10 staffs in Singapore)</div>
        </div>
        </div>}
        
        {showButton && (hover5)}
        <CSSTransition
        in={hover5}
        nodeRef={nodeRef}
        timeout={1500}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
        >
        <div ref={nodeRef} className="desc">
            <div className="from-to">
            <div className="date-from"><div className="from">From</div><div className="date">:&nbsp;   February 2023</div></div>
            <div className="date-to"><div className="to"> To</div><div className="date">:&nbsp;   August 2023  </div></div>
            </div>
            <div className="respon-desc">
                <div className="respon">Responsibilities :</div>
                <ul>
                <li>Port scanning report</li>
                <li>Daily and monthly ticket report</li>
                <li> Configuration change report </li>
                <li>Network floor plan</li>
                <li>Duty engineer report </li>
                <li>Dooraccess monthly report</li>
                <li>Dooraccess Late report</li>
                <li>Telegram message and call support (Automations) </li>
                <li>Installation and configuration of LibreNMS System</li>
                </ul>
            </div>
        </div>
        </CSSTransition>
    </div>
  </div>

  return (
    <div className="exp">
      <div className="exp-content">
      {props.type ===false? content :<Div>{content}</Div>}
      </div>
    </div>
  );
}
export default Experience;
