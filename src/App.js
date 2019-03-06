import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

import logo from "./assets/logo.png";
import "./App.css";

const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    return (
      <Router>
        <div className={"App" + (this.state.isLoading ? "" : " show")}>
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
              <Route
                path="/about"
                children={({ match, ...rest }) => (
                  <TransitionGroup component={firstChild}>
                    {match && <About {...rest} />}{" "}
                  </TransitionGroup>
                )}
              />
              <Route
                path="/portfolio"
                children={({ match, ...rest }) => (
                  <TransitionGroup component={firstChild}>
                    {match && <Portfolio {...rest} />}
                  </TransitionGroup>
                )}
              />
              <Route
                path="/"
                children={({ match, ...rest }) => (
                  <TransitionGroup component={firstChild}>
                    {match && <Home {...rest} />}
                  </TransitionGroup>
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
