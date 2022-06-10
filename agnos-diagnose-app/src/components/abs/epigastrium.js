import React, { Component } from "react";
import IMAGES from '../../question-image.json'

class Epigastrium extends Component{
    /* will use state to render the component to display or not display*/ 
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="epigastrium">
                <img className="egt-hl" src={IMAGES.Abs.epigastriumHighlight}/>
                {this.props.showCap && 
                    <img className="egt-ct" src={IMAGES.Abs.epigastriumActive}/>
                }
            </div>
        )
    }
}

export default Epigastrium;