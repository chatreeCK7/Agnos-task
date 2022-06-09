import React from "react";
import IMAGES from '../../question-image.json'

class RLQ extends React.Component{
    /* will use state to render the component to display or not display*/ 
    constructor(props){
        super(props)
        this.state = {isClicked: false,
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
            <div id="rlq">
                {!this.state.isClicked && (
                    <div className="rlq-box2o" onClick={this.handleClick}></div>
                )}
                {this.state.isClicked && (
                    <div className="rlq-box2c" onClick={this.handleClick}></div>
                )}
                {this.state.isClicked && (
                    <img className="rlq-hl" src={IMAGES.Abs.rlqHighlight} onClick={this.handleClick}/>
                )}
                {this.state.isClicked && !this.state.allSelected && (
                    <img className="rlq-ct" src={IMAGES.Abs.rlqActive}/>
                )}
            </div>
        )
    }
}

export default RLQ;