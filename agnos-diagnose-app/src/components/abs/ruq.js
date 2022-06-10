import React from "react";
import IMAGES from '../../question-image.json'

class RUQ extends React.Component{
    /* will use state to render the component to display or not display*/ 
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="ruq">
                <img className="ruq-hl" src={IMAGES.Abs.ruqHighlight}/>
                {this.props.showCap && (
                    <img className="ruq-ct" src={IMAGES.Abs.ruqActive}/>
                )}
            </div>
        )
    }
}

export default RUQ;