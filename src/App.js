import React from "react";
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials/TestimonialsPage";
import Resume from "./components/Resume";
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";
import OpenToWorkModal from "./components/OpenToWorkModal";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
    this.toggleModal = this.toggleModal.bind(this);
  }
  authenticate() {
    return new Promise((resolve) => setTimeout(resolve, 500));
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
        setTimeout(() => {
          this.setState({ showModal: true });
        }, 1000);
      }
    });
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    return (
      <div className="App">
        <OpenToWorkModal
          showModal={this.state.showModal}
          setShowModal={this.toggleModal}
        />
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
                  <Route path="/testimonials" component={Testimonials} />
                  <Route path="/resume" component={Resume} />
                  <Route exact path="/" component={Home} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
        <Footer showCopyright />
      </div>
    );
  }
}

export default App;
