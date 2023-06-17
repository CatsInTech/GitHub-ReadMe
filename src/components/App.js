import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./Bootstrap/Header";
import Home from "./Home";
import Docs from "./Docs";

class App extends Component {
  state = {
    isDarkMode: false
  };

  toggleDarkMode = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode
    }));
  };

  render() {
    const NavItems = [
      <Link className="nav-link" to="/">
        Home
      </Link>,
      <Link className="nav-link" to="/Docs">
        Docs
      </Link>
    ];

    const { isDarkMode } = this.state;

    return (
      <div className={`App ${isDarkMode ? "dark-mode" : ""}`}>
        <Header
          to="/"
          Link={Link}
          dark={isDarkMode}
          items={NavItems}
          className="AppHeader"
        >
          GitHub ReadMe
        </Header>
        <button className="switch-btn" onClick={this.toggleDarkMode}>
          {isDarkMode ? (
            <span>Light Mode</span>
          ) : (
            <span>Dark Mode</span>
          )}
        </button>
        <Routes>
          <Route path="/Docs" element={<Docs />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    );
  }
}

export default App;
