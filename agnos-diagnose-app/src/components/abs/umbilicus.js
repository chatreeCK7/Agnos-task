import React from "react";
import IMAGES from '../../question-image.json'

class Umbilicus extends React.Component{
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
            <div id="umbilicus">
                {!this.state.isClicked && (
                    <div className="umbilicus-box2o" onClick={this.handleClick}></div>
                )}
                {this.state.isClicked && (
                    <div className="umbilicus-box2c" onClick={this.handleClick}></div>
                )}
                {this.state.isClicked && (
                    <img className="umbilicus-hl" src={IMAGES.Abs.umbilicusHighlight}/>
                )}
                {this.state.isClicked && !this.state.allSelected && (
                    <img className="umbilicus-ct" src={IMAGES.Abs.umbilicusActive}/>
                )}
            </div>
        )
    }
}

export default Umbilicus;