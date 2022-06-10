import React, {Component} from "react"
import IMAGES from "../../question-image.json"
import DIP from "./dip"
import PIP from "./pip"
import MCP from "./mcp"
import Button from '../button'
import {Link} from 'react-router-dom';

class AllHandJoint extends Component{
    constructor(props){
        super(props)
        this.state = {
            dip: false,
            mcp: false, 
            pip: false,
            others: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(part){
        console.log("Yeah,you hit "+part+" !");
        switch(part){
            case "lf-dip":
            case "rf-dip":
            case "mf-dip":
            case "if-dip":
                this.setState((state) => {
                    return {
                        dip: !state.dip
                    }
                })
                console.log(this.state.dip)
                break;
            case "lf-pip":
            case "rf-pip":
            case "mf-pip":
            case "if-pip":
            case "tb-pip":
                this.setState((state) => {
                    return {
                        pip: !state.pip
                    }
                })
                console.log(this.state.pip)
                break;
            case "lf-mcp":
            case "rf-mcp":
            case "mf-mcp":
            case "if-mcp":
            case "tb-mcp":
                this.setState((state) => {
                    return {
                        mcp: !state.mcp
                    }
                })
                console.log(this.state.mcp)
                break;
            case "others":
                this.setState( (state) => {
                    return{
                        dip: false,
                        pip: false,
                        mcp: false,
                        others: !state.others
                    }
                })
                console.log(this.state.others)
                break;
            default:
        }
    }

    render(){
        return(
            <div>

                <div className="container-q2">    
                    <h3 className="question h3">จุดไหนที่คุณปวดนิ้วมากที่สุด ?</h3>
                    <div id="all-hand">
                        <div id="dip-box">
                            <div className="lf-dip-box" onClick={() => {this.handleClick("lf-dip")}}></div>
                            <div className="rf-dip-box" onClick={() => {this.handleClick("rf-dip")}}></div>
                            <div className="mf-dip-box" onClick={() => {this.handleClick("mf-dip")}}></div>
                            <div className="if-dip-box" onClick={() => {this.handleClick("if-dip")}}></div>
                        </div>
                        <div id="pip-box">
                            <div className="lf-pip-box" onClick={() => {this.handleClick("lf-pip")}}></div>
                            <div className="rf-pip-box" onClick={() => {this.handleClick("rf-pip")}}></div>
                            <div className="mf-pip-box" onClick={() => {this.handleClick("mf-pip")}}></div>
                            <div className="if-pip-box" onClick={() => {this.handleClick("if-pip")}}></div>
                            <div className="tb-pip-box" onClick={() => {this.handleClick("tb-pip")}}></div>
                        </div>
                        <div id="mcp-box">
                            <div className="lf-mcp-box" onClick={() => {this.handleClick("lf-mcp")}}></div>
                            <div className="rf-mcp-box" onClick={() => {this.handleClick("rf-mcp")}}></div>
                            <div className="mf-mcp-box" onClick={() => {this.handleClick("mf-mcp")}}></div>
                            <div className="if-mcp-box" onClick={() => {this.handleClick("if-mcp")}}></div>
                            <div className="tb-mcp-box" onClick={() => {this.handleClick("tb-mcp")}}></div>
                        </div>
                        <div className="others-box" onClick={() => {this.handleClick("others")}}></div>
                        {console.log(this.state.others)}
                        {this.state.others && 
                            <img className="others-hl" src={IMAGES.Hand.others}/>
                        }
                        {this.state.dip && !this.state.others &&
                            <DIP onClick={() => {this.state.handleClick("lf-dip")}}
                            />
                        }
                        {this.state.pip && !this.state.others &&
                            <PIP onClick={() => {this.state.handleClick("lf-pip")}}
                            />
                        }
                        {this.state.mcp && !this.state.others &&
                            <MCP onClick={() => {this.state.handleClick("lf-mcp")}}
                            />
                        }
                    </div>            
                </div>
                <Link to={'/'}>
                    <Button title="ย้อนกลับ"/>
                </Link>
            </div>
        );
    }
}

export default AllHandJoint;