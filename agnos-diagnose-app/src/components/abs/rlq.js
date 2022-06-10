import React from "react";
import IMAGES from '../../question-image.json'

class RLQ extends React.Component{
    /* will use state to render the component to display or not display*/ 
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="rlq">
                <img className="rlq-hl" src={IMAGES.Abs.rlqHighlight}/>
                {this.props.showCap && (
                    <img className="rlq-ct" src={IMAGES.Abs.rlqActive}/>
                )}
            </div>
        )
    }
}

export default RLQ;