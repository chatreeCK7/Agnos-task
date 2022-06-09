import React, { Component } from "react";
import IMAGES from '../../question-image.json'
import AllAbs from "./all-abs";

class Epigastrium extends Component{
    /* will use state to render the component to display or not display*/ 
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="epigastrium">
                <div className="egt-box2c" onClick={() => {this.props.onClick()}}></div>
                <img className="egt-hl" src={IMAGES.Abs.epigastriumHighlight}/>

                {this.props.showCap && 
                    <img className="egt-ct" src={IMAGES.Abs.epigastriumActive}/>
                }
            </div>
        )
    }
}

export default Epigastrium;