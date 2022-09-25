import React from "react";
import axios from "axios";
import About from "./components/About";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";

class App extends React.Component {
  state = { Password: "", advice: "" };

  fetchPasswordstrong = () => {
    axios
      .get("https://www.dinopass.com/password/strong")
      .then((response) => {
        this.setState({ Password: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  fetchPasswordsimple = () => {
    axios
      .get("https://www.dinopass.com/password/simple")
      .then((response) => {
        this.setState({ Password: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;

        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <Router>
          <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <span className="active">
                  <i>&#128273;PassUtils</i>
                </span>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/Home"
                    >
                      <span className="active">
                        <i>Home</i>
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/About"
                    >
                      <span className="active">
                        <i>About</i>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <Routes>
            <Route
              path="/"
              element={
                <Home
                  fetchPasswordsimple={this.fetchPasswordsimple}
                  fetchPasswordstrong={this.fetchPasswordstrong}
                  Password={this.state.Password}
                  advice={this.state.advice}
                  fetchAdvice={this.fetchAdvice}
                />
              }
            ></Route>
            <Route path="/about" element={<About />}></Route>
            <Route
              path="/Home"
              element={
                <Home
                  fetchPasswordsimple={this.fetchPasswordsimple}
                  fetchPasswordstrong={this.fetchPasswordstrong}
                  Password={this.state.Password}
                  advice={this.state.advice}
                  fetchAdvice={this.fetchAdvice}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
