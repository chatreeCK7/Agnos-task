import React from "react";
import IMAGES from '../../question-image.json'

class Epigatrium extends React.Component{
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
        console.log(this.state.isClicked);
        this.toggleState();
        console.log(this.state.isClicked);
    }
    render(){
        return(
            <div id="epigastrium">
                {!this.state.isClicked && (
                    <div className="egt-box" onClick={this.handleClick}></div>
                )}
                {this.state.isClicked && (
                    <img className="click2close" src={IMAGES.Abs.epigastriumHighlight} onClick={this.handleClick}/>
                )}
                {this.state.isClicked && !this.state.allSelected && (
                    <img src={IMAGES.Abs.epigastriumActive}/>
                )}
            </div>
        )
    }
}

export default Epigatrium;