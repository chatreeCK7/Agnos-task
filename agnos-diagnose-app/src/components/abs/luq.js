import React from "react";
import IMAGES from '../../question-image.json'

class LUQ extends React.Component{
    /* will use state to render the component to display or not display*/ 
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="luq">
                <img className="luq-hl" src={IMAGES.Abs.luqHighlight}/>
                {this.props.showCap && (
                    <img className="luq-ct" src={IMAGES.Abs.luqActive}/>
                )}
            </div>
        )
    }
}

export default LUQ;