import React, {Component} from "react";
import IMAGES from '../../question-image.json'
import Epigastrium from "./epigastrium";

class AllAbs extends Component{
    /* will use state to render the component to display or not display*/ 
    constructor(props){
        super(props)
        this.state = {
            partials: {
                epi: false,
                llq: false,
                luq: false,
                ubc: false,
                spb: false,
                rlq: false,
                ruq: false
            },
            all_abs: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    // toggleState(part){
        
    // }
    
    handleClick(part){
        console.log("Yeah,you hit "+part+" !");
        switch(part) {
            case "epi":
                this.setState((state) => {
                    return {epi: !state.partials.epi};
                });
                break;
            case "llq":
                this.setState((state) => {
                    return {llq: !state.partials.llq};
                });
                break;
            case "luq":
                this.setState((state) => {
                    return {luq: !state.partials.luq};
                });
                break;
            case "ubc":
                this.setState((state) => {
                    return {ubc: !state.partials.ubc};
                });
                break;
            case "spb":
                this.setState((state) => {
                    return {spb: !state.partials.spb};
                });
                break;
            case "rlq":
                this.setState((state) => {
                    return {rlq: !state.partials.rlq};
                });
                break;
            case "ruq":
                this.setState((state) => {
                    return {ruq: !state.partials.ruq};
                });
                break;
            default:
              // code block
          }
        
    }
    render(){
        
        return(
            <div id="all-abs">
                {!this.state.isClicked && (
                    <div className="all-abs-box" onClick={this.handleClick} /*onChange={this.props.onChange(this.state.isClicked)}*/></div>
                )}
                {/* <div className="egt-box2o" onClick={() => { this.handleClick("epi") }}></div>
                <div className="llq-box2o" onClick={() => { this.handleClick("llq") }}></div>
                <div className="luq-box2o" onClick={() => { this.handleClick("luq") }}></div>
                <div className="umbilicus-box2o" onClick={() => { this.handleClick("umbilicus") }}></div>
                <div className="suprapubic-box2o" onClick={() => { this.handleClick("suprapubic") }}></div>
                <div className="rlq-box2o" onClick={() => { this.handleClick("rlq") }}></div>
                <div className="ruq-box2o" onClick={() => { this.handleClick("ruq") }}></div>

                <Epigastrium 
                    onClick={() => {this.handleClick("epi")}}
                    showCap={!this.state.all_abs}
                /> */}
                {this.state.epi && (
                    <img className="egt-hl" src={IMAGES.Abs.epigastriumHighlight} onClick={() => { console.log(this.state.epi) }}/>
                )}
                {this.state.isClicked && (
                    <img className="llq-hl" src={IMAGES.Abs.llqHighlight} onClick={this.handleClick}/>
                )}
                {this.state.isClicked && (
                    <img className="luq-hl" src={IMAGES.Abs.luqHighlight} onClick={this.handleClick}/>
                )}
                {this.state.isClicked && (
                    <img className="umbilicus-hl" src={IMAGES.Abs.umbilicusHighlight} onClick={this.handleClick}/>
                )}
                {this.state.isClicked && (
                    <img className="rlq-hl" src={IMAGES.Abs.rlqHighlight} onClick={this.handleClick}/>
                )}
                {this.state.isClicked && (
                    <img className="ruq-hl" src={IMAGES.Abs.ruqHighlight} onClick={this.handleClick}/>
                )}
                {this.state.isClicked && (
                    <img className="suprapubic-hl" src={IMAGES.Abs.suprapubicHighlight} onClick={this.handleClick}/>
                )}

            </div>
        )
    }
}

export default AllAbs;