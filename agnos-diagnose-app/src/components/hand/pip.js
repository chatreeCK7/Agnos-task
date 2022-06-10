import React, {Component} from "react"
import IMAGES from "../../question-image.json"

class PIP extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="pip" >
                <img className="pip-hl" src={IMAGES.Hand.pipHighlight}/>
                <img className="pip-ct" src={IMAGES.Hand.pipActive}/>
            </div> 
        )
    }
}
export default PIP;