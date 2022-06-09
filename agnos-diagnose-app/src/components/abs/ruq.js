import React from "react";
import IMAGES from '../../question-image.json'

class RUQ extends React.Component{
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
            <div id="ruq">
                {!this.state.isClicked && (
                    <div className="ruq-box2o" onClick={this.handleClick}></div>
                )}
                {this.state.isClicked && (
                    <div className="ruq-box2c" onClick={this.handleClick}></div>
                )}
                {this.state.isClicked && (
                    <img className="ruq-hl" src={IMAGES.Abs.ruqHighlight}/>
                )}
                {this.state.isClicked && !this.state.allSelected && (
                    <img className="ruq-ct" src={IMAGES.Abs.ruqActive}/>
                )}
            </div>
        )
    }
}

export default RUQ;