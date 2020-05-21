import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Header from "./components/header";
import NavTabs from "./components/navtabs";
import Main from "./pages/main";
import Portfolio from "./pages/portfolio";
import ContactMe from "./pages/contactme";
// import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
        <Router>
          <div className="body">
              <NavTabs />
              <Route exact path="/" component={Main} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/contactme" component={ContactMe} />
          </div>
        </Router>
    </div>
  );
}

export default App;
