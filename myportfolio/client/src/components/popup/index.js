import React, { useState } from "react";
import "./style.css";
import {AiOutlineCloseCircle} from "react-icons/ai";

const redirectContactPage = (event) => {
    if (event === false){
        window.location.reload(false);
    }
}

function Popup(props) {
    const [trigger, setTrigger] = useState(true);
    if ( trigger === false) {
        redirectContactPage(trigger)
    }
    return (props.trigger === trigger)?(
        <div className="popup">
            <div className="popup-inner">
                <AiOutlineCloseCircle className="close-btn" size={30} onClick={()=> setTrigger(false)}/>
                    {props.children}
            </div>
        </div>
    ): "";
}

export default Popup;