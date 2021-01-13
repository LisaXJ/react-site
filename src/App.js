import './App.scss';

import {Route, HashRouter} from 'react-router-dom';
import 'animate.css';

import LandingPage from './components/pages/LandingPage';
import Navigation from './components/navigation/Navigation';
import MainPage from './components/pages/MainPage';
import Sidebar from './components/navigation/Sidebar';
import AboutMePage from './components/pages/AboutMePage';
import { Fragment } from 'react';

function App() {
    return (
        <Fragment>
            <HashRouter basename='/'>
                <Navigation />
                <Sidebar />
                
                <Route exact path='/' render={() => <LandingPage />} />
                <Route exact path='/about-me' render={() => <AboutMePage />} />
                <Route exact path='/web' render={() => <MainPage />} />
            </HashRouter>
        </Fragment>
    );
}

export default App;
