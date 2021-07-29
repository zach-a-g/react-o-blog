import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Title from './components/Title';
import StyledTopNav from './components/StyledTopNav';
import ContactList from './components/ContactList';
import './App.css';

function App() {
  return (
    <div className="App" id="App">
      <StyledTopNav>

        <header id="topNavBox">
          <div id="navContent">
            <div id="navLeft">
              <p>4:30</p>
            </div>
            <div id="navRight">
              <p>bars, wifi, battery</p>
              {/* <img src="../public/img/wifi.png"></img> */}
            </div>
          </div>
        </header>

      </StyledTopNav>

      <nav>
        <div id="navBar">
          <div id="navStuff">Groups</div>
          <div id="navStuffplus">+</div>
        </div>
      </nav>

      <Router>
        <ContactList />
      </Router>

      <footer id="footer">
        <div id="footerContent">
        <div id="footerSection1">
          <div id="icon"></div>
            <p id="footerTitle">Favorites</p>
        </div>
          <div id="footerSection1">
          <div id="icon"></div>
            <p id="footerTitle">Recents</p>
          </div>
          
          <div id="footerSection1">
          <div id="icon"></div>
            <p id="footerTitle">Contacts</p>
          </div>
          
          <div id="footerSection1">
          <div id="icon"></div>
            <p id="footerTitle">Keypad</p>
          </div>
          
          <div id="footerSection1">
            <div id="icon"></div>
            <p id="footerTitle">Voicemail</p>    
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
