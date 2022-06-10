import React, {Component} from "react";
import IMAGES from '../../question-image.json'
import Epigastrium from './epigastrium';
import LUQ from './luq';
import LLQ from './llq';
import RLQ from './rlq';
import RUQ from './ruq';
import Suprapubic from './suprapubic';
import Umbilicus from './umbilicus';

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
        return this.state.partials.epi && this.state.partials.llq && this.state.partials.luq && this.state.partials.ubc
            && this.state.partials.spb && this.state.partials.rlq && this.state.partials.ruq;
    }
    
    handleClick(part){
        console.log("Yeah,you hit "+part+" !");
        switch(part) {
            case "epi":
                this.setState((state) => {
                    return { partials: {
                            ...state.partials,
                             epi: !state.partials.epi,
                    }}
                })
                console.log(this.state.partials);
                break;
            case "llq":
                this.setState((state) => {
                    return { partials: {
                            ...state.partials,
                             llq: !state.partials.llq,
                    }}
                })
                console.log(this.state.partials);
                break;
            case "luq":
                this.setState((state) => {
                    return { partials: {
                            ...state.partials,
                             luq: !state.partials.luq,
                    }}
                })
                break;
            case "ubc":
                this.setState((state) => {
                    return { partials: {
                            ...state.partials,
                             ubc: !state.partials.ubc,
                    }}
                })
                break;
            case "spb":
                this.setState((state) => {
                    return { partials: {
                            ...state.partials,
                             spb: !state.partials.spb,
                    }}
                })
                break;
            case "rlq":
                this.setState((state) => {
                    return { partials: {
                            ...state.partials,
                             rlq: !state.partials.rlq,
                    }}
                })
                break;
            case "ruq":
                this.setState((state) => {
                    return { partials: {
                            ...state.partials,
                             ruq: !state.partials.ruq,
                    }}
                })
                break;
            case "allAbs":
                this.setState((state) => {
                    return { partials: {
                        ...state.partials,
                         epi: !state.partials.epi,
                         llq: !state.partials.llq,
                         luq: !state.partials.luq,
                         ubc: !state.partials.ubc,
                         spb: !state.partials.spb,
                         rlq: !state.partials.rlq,
                         ruq: !state.partials.ruq,
                }}
                })
            break;
            default:
              // code block
          }
        
    }
    render(){
        
        return(
            <div id="all-abs">
                
                <div className="all-abs-box" onClick={() => this.handleClick("allAbs")} /*onChange={this.props.onChange(this.state.isClicked)}*/></div>
                <div className="egt-box2o" onClick={() => { this.handleClick("epi") }}></div> 
                <div className="llq-box2o" onClick={() => { this.handleClick("llq") }}></div>
                <div className="luq-box2o" onClick={() => { this.handleClick("luq") }}></div> 
                <div className="umbilicus-box2o" onClick={() => { this.handleClick("ubc") }}></div>
                <div className="suprapubic-box2o" onClick={() => { this.handleClick("spb") }}></div>
                <div className="rlq-box2o" onClick={() => { this.handleClick("rlq") }}></div>
                <div className="ruq-box2o" onClick={() => { this.handleClick("ruq") }}></div> 
                {console.log(this.state.partials)}
                {console.log("selectedAllPartial :"+this.selectedAllPartial())}
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
                {this.state.partials.luq &&
                    <LUQ 
                    onClick={() => {this.handleClick("luq")}}
                    showCap={!this.state.partials.all_abs && !this.selectedAllPartial()}
                    />
                }
                {this.state.partials.ubc &&
                    <Umbilicus
                    onClick={() => {this.handleClick("ubc")}}
                    showCap={!this.state.partials.all_abs && !this.selectedAllPartial()}
                    />
                }
                {this.state.partials.spb &&
                    <Suprapubic
                    onClick={() => {this.handleClick("spb")}}
                    showCap={!this.state.partials.all_abs && !this.selectedAllPartial()}
                    />
                }
                {this.state.partials.rlq &&
                    <RLQ
                    onClick={() => {this.handleClick("rlq")}}
                    showCap={!this.state.partials.all_abs && !this.selectedAllPartial()}
                    />
                }
                {this.state.partials.ruq &&
                    <RUQ
                    onClick={() => {this.handleClick("ruq")}}
                    showCap={!this.state.partials.all_abs && !this.selectedAllPartial()}
                    />
                }
            </div>
        )
    }
}

export default AllAbs;