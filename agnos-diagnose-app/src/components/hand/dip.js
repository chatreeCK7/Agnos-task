import React, {Component} from "react"
import IMAGES from "../../question-image.json"

class DIP extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="dip" >
                <img className="dip-hl" src={IMAGES.Hand.dipHighlight}/>
                <img className="dip-ct" src={IMAGES.Hand.dipActive}/>
            </div> 
        )
    }
}
export default DIP;