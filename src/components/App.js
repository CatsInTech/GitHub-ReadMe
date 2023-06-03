import { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./Bootstrap/Header";
import Home from "./Home";
import Docs from "./Docs";

class App extends Component {
  state = {};
  render () {
    const NavItems = [
      <Link key={1} className="nav-link" to="/">
        Home
      </Link>,
      <Link key={2} className="nav-link" to="/Docs">
        Docs
      </Link>
    ];
    return (
      <div className="App">
        <Header
          to="/"
          Link={Link}
          dark={true}
          items={NavItems}
          className="AppHeader"
        >
          GitHub ReadMe
        </Header>
        <Routes>
          <Route path="/Docs" element={<Docs />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    );
  }
}

export default App;
