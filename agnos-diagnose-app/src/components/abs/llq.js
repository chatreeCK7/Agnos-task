import React from "react";
import IMAGES from '../../question-image.json'

class LLQ extends React.Component{
    /* will use state to render the component to display or not display*/ 
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="llq">
                <img className="llq-hl" src={IMAGES.Abs.llqHighlight}/>
                {this.props.showCap && (
                    <img className="llq-ct" src={IMAGES.Abs.llqActive}/>
                )}
            </div>
        )
    }
}

export default LLQ;