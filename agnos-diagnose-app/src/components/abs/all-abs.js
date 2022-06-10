import React, {Component} from "react";
import IMAGES from '../../question-image.json'
import Button from '../button'
import Epigastrium from './epigastrium';
import LUQ from './luq';
import LLQ from './llq';
import RLQ from './rlq';
import RUQ from './ruq';
import Suprapubic from './suprapubic';
import Umbilicus from './umbilicus';
import {Link} from 'react-router-dom';

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
                         epi: true,
                         llq: true,
                         luq: true,
                         ubc: true,
                         spb: true,
                         rlq: true,
                         ruq: true,
                    }}
                })
                break;
            case "neg-allAbs":
            this.setState((state) => {
                return { partials: {
                    ...state.partials,
                        epi: false,
                        llq: false,
                        luq: false,
                        ubc: false,
                        spb: false,
                        rlq: false,
                        ruq: false,
                    }}
                })
                break;
            default:
              // code block
          }
        
    }
    render(){
        
        return(
            <div>
                <div className="container-q1">    
                    <h3 className="question h3">จุดไหนที่คุณปวดท้องมากที่สุด ?</h3>
                    <div id="all-abs">
                        <div className="all-abs-box" onClick={() => this.handleClick("allAbs")}></div>
                        <div className="egt-box" onClick={() => { this.handleClick("epi") }}></div> 
                        <div className="llq-box" onClick={() => { this.handleClick("llq") }}></div>
                        <div className="luq-box" onClick={() => { this.handleClick("luq") }}></div> 
                        <div className="umbilicus-box" onClick={() => { this.handleClick("ubc") }}></div>
                        <div className="suprapubic-box" onClick={() => { this.handleClick("spb") }}></div>
                        <div className="rlq-box" onClick={() => { this.handleClick("rlq") }}></div>
                        <div className="ruq-box" onClick={() => { this.handleClick("ruq") }}></div> 
                        {console.log(this.state.partials)}
                        {console.log("selectedAllPartial :"+this.selectedAllPartial())}
                        {this.state.partials.epi &&
                            <Epigastrium showCap={!this.state.partials.all_abs && !this.selectedAllPartial()}/>
                        }
                        {this.state.partials.llq &&
                            <LLQ showCap={!this.state.partials.all_abs && !this.selectedAllPartial()}/>
                        }
                        {this.state.partials.luq &&
                            <LUQ showCap={!this.state.partials.all_abs && !this.selectedAllPartial()}/>
                        }
                        {this.state.partials.ubc &&
                            <Umbilicus showCap={!this.state.partials.all_abs && !this.selectedAllPartial()}/> 
                        }
                        {this.state.partials.spb &&
                            <Suprapubic showCap={!this.state.partials.all_abs && !this.selectedAllPartial()}/>
                        }
                        {this.state.partials.rlq &&
                            <RLQ showCap={!this.state.partials.all_abs && !this.selectedAllPartial()}/>
                        }
                        {this.state.partials.ruq &&
                            <RUQ showCap={!this.state.partials.all_abs && !this.selectedAllPartial()}/>
                        }
                        {this.selectedAllPartial() &&
                            <img className="all-abs-btn-hl" src={IMAGES.Abs.allAbsButton}/>
                        }
                        {this.selectedAllPartial() &&
                            <div className="all-abs-box" onClick={() => this.handleClick("neg-allAbs")}></div>
                        }
                    </div>
                </div>
                <Link to={'/hand'}>
                    <Button title="ต่อไป"/>
                </Link>
            </div>
        )
    }
}

export default AllAbs;