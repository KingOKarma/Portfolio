
import React from 'react';
import './App.css';
import Navigation from './components/Navbar/NavbarElements';
import FooterBar from './components/Footer/FooterElements';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/js';
import About from './pages/js/about';
import Credits from './pages/js/credits';
import Games from './pages/js/my-stuff/games';
import Programming from './pages/js/my-stuff/programming';
import Error404 from './pages/js/404';
import "./pages/css/global.css";

function App() {
  return (
    <Router>
      <div className="App-base">
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/my-stuff/programming' exact component={Programming} />
          <Route path='/my-stuff/games'exact component={Games} />
          <Route path='/credits/' exact component={Credits} />
          <Route path='/404/' exact component={Error404} />
          <Route>
          <meta http-equiv="refresh" content="0; URL='/404'" />
          </Route>

        </Switch>
        <FooterBar />
      </div>
    </Router>

  );
}

export default App;