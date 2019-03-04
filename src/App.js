import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

import logo from "./assets/logo.png";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="navbar">
            <Link to="/">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
            <Link className="textLink" to="/about">
              about
            </Link>
            <Link className="textLink" to="/portfolio">
              portfolio
            </Link>
          </div>
          <div>
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </Router>
    );
    // );
  }
}

export default App;
