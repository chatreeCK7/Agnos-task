import React, { Component } from "react";
import IMAGES from '../../question-image.json'
import AllAbs from "./all-abs";

class Epigastrium extends Component{
    /* will use state to render the component to display or not display*/ 
    constructor(props){
        super(props)
        this.state = {
                      isClicked: false,
                      allSelected: false
                     };
        this.handleClick = this.handleClick.bind(this);
    }
    toggleState(){
        this.setState((state) => {
            return {isClicked: !state.isClicked};
        });
    }
    handleClick(){
        console.log("Yeah,you hit it !");
        console.log("toggle from "+this.state.isClicked);
        this.toggleState();
    }
    render(){
        return(
            // <AllAbs onChange={(value)=> {this.setState(
            //     {allSelected: value}
            // )}}/>,
            <div id="epigastrium">
                {!this.state.isClicked && !this.state.allSelected && (
                    <div className="egt-box2o" onClick={this.handleClick}></div>
                )}
                {this.state.isClicked && (
                    <div className="egt-box2c" onClick={this.handleClick}></div>
                )}
                {this.state.isClicked && (
                    <img className="egt-hl" src={IMAGES.Abs.epigastriumHighlight}/>
                )}
                {this.state.isClicked && !this.state.allSelected && (
                    <img className="egt-ct" src={IMAGES.Abs.epigastriumActive}/>
                )}
            </div>
        )
    }
}

export default Epigastrium;