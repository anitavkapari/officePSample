import React from 'react';
import logo from './logo.svg';
import './App.css';
import login from './Login';

import profileImage from  './img/my profile.png' ;
import gameImage from  './img/game.png' ;
import appImage from  './img/mobile app.png' ;
import webImage from  './img/website.png' ;
import callImage from  './img/call.png' ;
import mapImage from  './img/map.png' ;
import emailImage from  './img/email.png' ;
import whatsappImage from  './img/whatsapp.png' ;
import softwareImage from  './img/software.png' ;


function App() {
  return (
	  /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */

<div className="row">
  <div className="side">
    <div className="fakeimg" style={STYLE.fakeHeight}></div>
	  <br></br>
  </div>
  <div className="main">
    <div> 

      <a href="/login">
       <h6 style={STYLE.headerAlign}><input id="profile-image" type="image" 
	         src={profileImage} value="B1"  /></h6>
      </a>
    </div>

    
      <div className="single-button-row">
             
                <input type="image" src={softwareImage} id="middle-container-image" value="B1"/>
               
      </div>
      <div className="multi-button-row">
                <input id="middle-container-image" type="image" src={gameImage} value="B2"/>
                <input id="middle-container-image" type="image" src={appImage} value="B3"/>
	    </div>
      <div className="single-button-row">
         <input id="middle-container-image" type="image" src={webImage} value="B3"/>
      </div>
        <h6 style={STYLE.footerAlign}><b><font color="black" size="5">Desgin, Devlope & Maintain</font></b></h6>
        <div className="multi-button-row">

                <input id="bottom-container-image" type="image" src={callImage} value="B2" />
                <input id="bottom-container-image" type="image" src={mapImage} value="B3"/>
                <input id="bottom-container-image" type="image" src={emailImage} value="B2"/>
                <input id="bottom-container-image" type="image" src={whatsappImage} value="B3"/></div>
  <h6 style={STYLE.footerAlign}><b><font color="dodgerblue" size="5">Customer care</font></b></h6>

</div>
</div>


  );
}

const STYLE = {
    fakeHeight: {
    height:'350px'
    },
    headerAlign: {
        textAlign: 'left'
    },
    footerAlign: {
        textAlign: 'center'
    },
    errorColor: {
        color: 'red'

    }
};

export default App;
