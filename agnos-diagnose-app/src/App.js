import React, {lazy} from 'react'
//get React-Router from youtube br react-router-dom
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom'
import IMAGES from './question-image.json'
import Button from './components/button';
import Epigastrium from './components/abs/epigastrium';
import LUQ from './components/abs/luq';
import LLQ from './components/abs/llq';
import RLQ from './components/abs/rlq';
import RUQ from './components/abs/ruq';
import Suprapubic from './components/abs/suprapubic';
import Umbilicus from './components/abs/umbilicus';
import AllAbs from './components/abs/all-abs';

function App() {

    return (
        <Router>
            <div className="container">
                <h3 className="question h3">จุดไหนที่คุณปวดท้องมากที่สุด ?</h3>
                {/* <img className="main-body" src={IMAGES.Abs.overallAbs}/>  */}
                <AllAbs/>
                <Epigastrium/>
                <LUQ/>
                <LLQ/>
                <Suprapubic/>
                <Umbilicus/>
                <RUQ/>
                <RLQ/>
            </div> 
            <Button/>
        </Router>
    );
}

export default App;