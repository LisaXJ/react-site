import './App.scss';

import {Route, HashRouter} from 'react-router-dom';
import 'animate.css';

import LandingPage from './components/pages/LandingPage';
import Navigation from './components/navigation/Navigation';
import MainPage from './components/pages/MainPage';
import Sidebar from './components/navigation/Sidebar';

function App() {
    return (
        <div>
            <HashRouter basename='/'>
                <Navigation />
                <Sidebar />
                
                <Route exact path='/' render={() => <LandingPage />} />
                <Route exact path='/main' render={() => <MainPage />} />
            </HashRouter>
        </div>
    );
}

export default App;
