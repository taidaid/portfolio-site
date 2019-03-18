import React from "react";
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";
import "./App.css";

class App extends React.Component {
  authenticate() {
    return new Promise(resolve => setTimeout(resolve, 500));
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
        }, 500);
      }
    });
  }

  render() {
    return (
      <div className="App">
        <NavbarComponent bg="dark" />
        <Route
          render={({ location }) => (
            <TransitionGroup>
              {/* React router transitions */}
              <CSSTransition key={location.key} classNames="fade" timeout={300}>
                <Switch location={location}>
                  {/* Website routes with specified url endings */}
                  <Route path="/about" component={About} />
                  <Route path="/portfolio" component={Portfolio} />
                  <Route path="/" component={Home} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
