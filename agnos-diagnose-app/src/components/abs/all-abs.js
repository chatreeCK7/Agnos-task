import React, {Component} from "react";
import IMAGES from '../../question-image.json'
import Epigastrium from "./epigastrium";
import LLQ from "./llq";

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
            }
            ,
            all_abs: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    selectedAllPartial(){
        for (let index = 0; index < this.state.partials.length; index++) {
            const allPartial = this.state.partials[index];
            if (!allPartial) {
                return false;
            }
        }
        return true;
    }
    
    handleClick(part){
        console.log("Yeah,you hit "+part+" !");
        switch(part) {
            case "epi":
                this.setState({
                    partials: {
                      ...this.state.partials,
                      epi: !this.state.partials.epi,
                    }
                })
                console.log(this.state.partials);
                break;
            case "llq":
                this.setState({
                    partials: {
                      ...this.state.partials,
                      epi: !this.state.partials.llq,
                    }
                })
                break;
            case "luq":
                this.setState({
                    partials: {
                      ...this.state.partials,
                      epi: !this.state.partials.luq,
                    }
                })
                break;
            case "ubc":
                this.setState({
                    partials: {
                      ...this.state.partials,
                      epi: !this.state.partials.ubc,
                    }
                })
                break;
            case "spb":
                this.setState({
                    partials: {
                      ...this.state.partials,
                      epi: !this.state.partials.spb,
                    }
                })
                break;
            case "rlq":
                this.setState({
                    partials: {
                      ...this.state.partials,
                      epi: !this.state.partials.rlq,
                    }
                })
                break;
            case "ruq":
                this.setState({
                    partials: {
                      ...this.state.partials,
                      epi: !this.state.partials.ruq,
                    }
                })
                break;
            default:
              // code block
          }
        
    }
    render(){
        
        return(
            <div id="all-abs">
                {!this.state.isClicked && (
                    <div className="all-abs-box" onClick={() => this.handleClick("allAbs")} /*onChange={this.props.onChange(this.state.isClicked)}*/></div>
                )}
                <div className="egt-box2o" onClick={() => { this.handleClick("epi") }}></div>
                <div className="llq-box2o" onClick={() => { this.handleClick("llq") }}></div>
                <div className="luq-box2o" onClick={() => { this.handleClick("luq") }}></div>
                <div className="umbilicus-box2o" onClick={() => { this.handleClick("umbilicus") }}></div>
                <div className="suprapubic-box2o" onClick={() => { this.handleClick("suprapubic") }}></div>
                <div className="rlq-box2o" onClick={() => { this.handleClick("rlq") }}></div>
                <div className="ruq-box2o" onClick={() => { this.handleClick("ruq") }}></div>
                {console.log(this.state.partials.epi)}
                {this.state.partials.epi &&
                    <Epigastrium 
                    onClick={() => {this.handleClick("epi")}}
                    showCap={!this.state.partials.all_abs && !this.selectedAllPartial()}
                    />
                }
                {this.state.partials.llq &&
                    <LLQ 
                    onClick={() => {this.handleClick("llq")}}
                    showCap={!this.state.partials.all_abs && !this.selectedAllPartial()}
                    />
                }
                {this.state.partials.epi &&
                    <Epigastrium 
                    onClick={() => {this.handleClick("epi")}}
                    showCap={!this.state.partials.all_abs && !this.selectedAllPartial()}
                    />
                }
                {this.state.partials.epi &&
                    <Epigastrium 
                    onClick={() => {this.handleClick("epi")}}
                    showCap={!this.state.partials.all_abs && !this.selectedAllPartial()}
                    />
                }
                {this.state.partials.epi &&
                    <Epigastrium 
                    onClick={() => {this.handleClick("epi")}}
                    showCap={!this.state.partials.all_abs && !this.selectedAllPartial()}
                    />
                }
                {this.state.partials.epi &&
                    <Epigastrium 
                    onClick={() => {this.handleClick("epi")}}
                    showCap={!this.state.partials.all_abs && !this.selectedAllPartial()}
                    />
                }
                {this.state.partials.epi &&
                    <Epigastrium 
                    onClick={() => {this.handleClick("epi")}}
                    showCap={!this.state.partials.all_abs && !this.selectedAllPartial()}
                    />
                }


            </div>
        )
    }
}

export default AllAbs;