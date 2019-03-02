import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Loading from "./components/Loading";
import logo from "./assets/logo.png";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  // componentDidMount() {
  //   setTimeout(() => this.setState({ isLoading: false }), 2000);
  // }
  render() {
    return (
      // return this.state.isLoading ? (
      //   <Loading />
      // ) : (
      <Router>
        <div className="App">
          <nav>
            <img src={logo} className="App-logo" alt="logo" />
            <Link to="/about">about</Link>
            <Link to="/portfolio">portfolio</Link>
          </nav>
          <div>
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
              <Route
                exact
                path="/"
                render={({ location }) => <Home location={location} />}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
    // );
  }
}

export default App;
