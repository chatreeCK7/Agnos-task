import React from "react";
import IMAGES from '../../question-image.json'

class Umbilicus extends React.Component{
    /* will use state to render the component to display or not display*/ 
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="umbilicus">
                <div className="umbilicus-box2c" onClick={() => {this.props.onClick()}}></div>
                <img className="umbilicus-hl" src={IMAGES.Abs.umbilicusHighlight}/>

                {this.props.showCap && (
                    <img className="umbilicus-ct" src={IMAGES.Abs.umbilicusActive}/>
                )}
            </div>
        )
    }
}

export default Umbilicus;