import React from "react";
import IMAGES from '../../question-image.json'

class LUQ extends React.Component{
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
            <div id="luq">
                {!this.state.isClicked && (
                    <div className="luq-box2o" onClick={this.handleClick}></div>
                )}
                {this.state.isClicked && (
                    <div className="luq-box2c" onClick={this.handleClick}></div>
                )}
                {this.state.isClicked && (
                    <img className="luq-hl" src={IMAGES.Abs.luqHighlight}/>
                )}
                {this.state.isClicked && !this.state.allSelected && (
                    <img className="luq-ct" src={IMAGES.Abs.luqActive}/>
                )}
            </div>
        )
    }
}

export default LUQ;