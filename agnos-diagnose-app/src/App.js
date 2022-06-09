import React, {lazy} from 'react'
//get React-Router from youtube br react-router-dom
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom'
import IMAGES from './question-image.json'
import Button from './components/button';
import Epigatrium from './components/abs/epigastrium';
function App() {

    return (
        <Router>
            <div className="container">
                <h3 className="question h3">จุดไหนที่คุณปวดท้องมากที่สุด ?</h3>
                <img className="main-body" src={IMAGES.Abs.overallAbs}/> 
                <Epigatrium/>
            </div> 
            <Button/>
        </Router>
    );
}

export default App;