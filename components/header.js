import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-default navbar-light navbar-custom sticky">
        <div className="container">
          <a className="navbar-brand logo" href="index.html">
            <img
              src="/static/assets/template/images/logo.png"
              className="logo"
              alt="logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="nav navbar-nav ml-auto navbar-center" id="mySidenav">
              <li className="nav-item">
                <a href="#home" className="nav-link scroll">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#features" className="nav-link scroll">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a href="#pricing" className="nav-link scroll">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a href="#clients" className="nav-link scroll">
                  Clients
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
