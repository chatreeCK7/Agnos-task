import React from "react";
import IMAGES from '../../question-image.json'

class LLQ extends React.Component{
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
            <div id="llq">
                {!this.state.isClicked && (
                    <div className="llq-box2o" onClick={this.handleClick}></div>
                )}
                {this.state.isClicked && (
                    <div className="llq-box2c" onClick={this.handleClick}></div>
                )}
                {this.state.isClicked && (
                    <img className="llq-hl" src={IMAGES.Abs.llqHighlight}/>
                )}
                {this.state.isClicked && !this.state.allSelected && (
                    <img className="llq-ct" src={IMAGES.Abs.llqActive}/>
                )}
            </div>
        )
    }
}

export default LLQ;