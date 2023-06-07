import { Component,lazy,Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./Bootstrap/Header";
import Loading from "./Loading";

const Home = lazy(() => import('./Home'))
const Docs = lazy(() => import('./Docs'))

class App extends Component {
  state = {};
  render() {
    const NavItems = [
      <Link className="nav-link" to="/">
        Home
      </Link>,
      <Link className="nav-link" to="/Docs">
        Docs
      </Link>
    ];
    return (
      <Suspense fallback={<Loading/>} className='loading'>
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
      </Suspense>
    );
  }
}

export default App;
