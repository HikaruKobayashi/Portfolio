import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="sub-title">Hikaru Kobayashi</h2>
        <h3>Social Networking Service</h3>
          <p>Twitter</p>
        <h3>History</h3>
          <p>1982         長野県中野市に生まれる。</p>
          <p>2005-2011    延徳小学校</p>
          <p>2011-2014    南宮中学校</p>
          <p>2014-2017    長野日本大学高等学校</p>
          <p>2017-current 日本大学 経済学部</p>
        <h3>Social Networking Service</h3>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>Git Hub</p>
        <h2 className="sub-title">Skill</h2>
        <div>
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
        </div>
        <h2 className="sub-title">Work</h2>
        <h3>Blog</h3>
        <h3>Money Hub</h3>
      </header>
    </div>
  );
}

export default App;
