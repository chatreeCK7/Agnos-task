import React, {lazy} from 'react'
//get React-Router from youtube br react-router-dom
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom'
import AllAbs from './components/abs/all-abs';
import AllHandJoint from './components/hand/all-hand';

function App() {

    return (
        <Router>
            <Routes>
                <Route path='/Agnos-task' element={<AllAbs/>}/>
                <Route path='/Agnos-task/hand' element={<AllHandJoint/>}/>
            </Routes>
        </Router>
    );
}

export default App;