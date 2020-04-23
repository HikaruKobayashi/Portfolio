import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a> */}
      </header>
      <body>
        <div className="punctuation">
          <img src={`${process.env.PUBLIC_URL}/ubuntu.png`} className="docker-logo" />
        </div>
        <div className="punctuation">
          <img src={`${process.env.PUBLIC_URL}/html.png`} className="docker-logo" />
        </div>
        <div className="punctuation">
          <img src={`${process.env.PUBLIC_URL}/docker-logo.png`} className="docker-logo" />
        </div>
        <div className="punctuation">
          <img src={`${process.env.PUBLIC_URL}/slack.svg`} className="docker-logo" />
        </div>
        <div className="punctuation">
        <img src={`${process.env.PUBLIC_URL}/Octocat.png`} className="git-hub-logo" />
        </div>
        <div className="punctuation">
          <img src={`${process.env.PUBLIC_URL}/aws.png`} className="docker-logo" />
        </div>
        <div className="punctuation">
          <img src={logo} className="docker-logo" />
        </div>
        <div className="punctuation">
          <img src={`${process.env.PUBLIC_URL}/rails.png`} className="docker-logo" />
        </div>
      </body>
    </div>
  );
}

export default App;
