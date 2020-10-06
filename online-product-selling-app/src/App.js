import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import LeftDrawer from './components/Left_Drawer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="MainAppContainer"> 
          <LeftDrawer name="towhid"/>     
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/About" exact component={About}></Route>
              <Route path="/Resume" exact component={Resume}></Route>
              <Route path="/Portfolio" exact component={Portfolio}></Route>
              <Route path="/Blog" exact component={Blog}></Route>
              <Route path="/Contact" exact component={Contact}></Route>
            </Switch>
      </div>
        
    </Router>
   
  );
}

export default App;
