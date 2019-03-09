import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  authenticate() {
    return new Promise(resolve => setTimeout(resolve, 2000));
  }

  componentDidMount() {
    this.authenticate().then(() => {
      const ele = document.getElementById("ipl-progress-indicator");
      if (ele) {
        // fade out
        ele.classList.add("available");
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = "";
        }, 2000);
      }
    });
  }

  render() {
    return (
      <Router>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="fade" timeout={300}>
                <div className="App">
                  <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                      <Link to="/">
                        <img
                          src="https://i.imgur.com/kdRv3qa.png"
                          className="App-logo"
                          alt="logo"
                        />
                      </Link>
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                      <Nav.Link href="/about">
                        <Link className="textLink" to="/about">
                          about
                        </Link>
                      </Nav.Link>
                      <Nav.Link href="/portfolio">
                        <Link className="textLink" to="/portfolio">
                          portfolio
                        </Link>
                      </Nav.Link>
                    </Nav>
                  </Navbar>

                  <Switch location={location}>
                    <Route path="/about" component={About} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route exact path="/" component={Home} />
                  </Switch>
                </div>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Router>
    );
  }
}

export default App;
