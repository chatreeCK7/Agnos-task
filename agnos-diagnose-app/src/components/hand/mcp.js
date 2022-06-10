import React, {Component} from "react"
import IMAGES from "../../question-image.json"

class MCP extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="mpc" >
                <img className="mcp-hl" src={IMAGES.Hand.mcpHighlight}/>
                <img className="mcp-ct" src={IMAGES.Hand.mcpActive}/>
            </div> 
        )
    }
}
export default MCP;