import React from "react";
import IMAGES from '../../question-image.json'

class Suprapubic extends React.Component{
    /* will use state to render the component to display or not display*/ 
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="suprapubic">
               <div className="suprapubic-box2c" onClick={() => {this.props.onClick()}}></div>
                <img className="suprapubic-hl" src={IMAGES.Abs.suprapubicHighlight}/>

                {this.props.showCap && (
                    <img className="suprapubic-ct" src={IMAGES.Abs.suprapubicActive}/>
                )}
            </div>
        )
    }
}

export default Suprapubic;
