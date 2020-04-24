import React from 'react';
import logo from './logo.svg';
import './App.css';

const stylee = {
  width: '100%',
  height: '40vmin',
  backgroundImage: `url(${process.env.PUBLIC_URL}/starry-sky-2.jpg)`
};

const styleee = {
  width: '100%',
  height: '60vmin',
  backgroundImage: `url(${process.env.PUBLIC_URL}/sky.jpg)`
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="scroll-bg bg-color01">
            <img src={logo} className="App-logo" alt="logo" />
            <h2 className="sub-title">Hikaru Kobayashi</h2>
        </div>

        <div className="fixed-bg bg01" style={ styleee }></div>

        <div className="scroll-bg bg-color01">
          <h2 className="sub-title">Who am I?</h2>
          <h3>History</h3>
            <p>1982         I was born in Nakano City, Nagano Prefecture.</p>
            <p>2005-2011    Entoku Elementary School</p>
            <p>2011-2014    Nangu Junior High School</p>
            <p>2014-2017    Nagano Nihon University High School</p>
            <p>2017-current Nihon University Faculty of Economics</p>
          <h3>Social Networking Service</h3>
            <p>Twitter</p>
            <p>Instagram</p>
            <p>Git Hub</p>
        </div>

        <div className="scroll-bg bg-color01">
          <h2 className="sub-title">Swimming</h2>
          <div className="swim-punctuation-left">
            <h3>Discipline</h3>
              <p>Breaststroke</p>
              <p>100m 1:09</p>
              <p>200m 2:24</p>
              <p>Individual medley</p>
              <p>200m 2:10</p>
              <p>400m 4:44</p>
          </div>
          <div className="swim-punctuation-right">
            <img src={`${process.env.PUBLIC_URL}/swim.jpg`} className="swim-logo" />
          </div>
        </div>

        <div className="scroll-bg bg-color01">
          <h2 className="sub-title">Skill</h2>
          <div className="punctuation-left">
            <img src={`${process.env.PUBLIC_URL}/html.png`} className="skill-logo" />
            <h3 className="skill-title">HTML・CSS</h3>
          </div>
          <div className="punctuation-right">
            <img src={`${process.env.PUBLIC_URL}/docker-logo.png`} className="skill-logo" />
            <h3 className="skill-title">Docker</h3>
          </div>
          <div className="punctuation-left">
            <img src={`${process.env.PUBLIC_URL}/aws.png`} className="skill-logo" />
            <h3 className="skill-title">AWS</h3>
          </div>
          <div className="punctuation-right">
            <img src={logo} className="skill-logo" />
            <h3 className="skill-title">React</h3>
          </div>
          <div className="punctuation-left">
            <img src={`${process.env.PUBLIC_URL}/rails.png`} className="skill-logo" />
            <h3 className="skill-title">Ruby on Rails</h3>
          </div>
          <div className="punctuation-right">
            <img src={`${process.env.PUBLIC_URL}/ubuntu.png`} className="skill-logo" />
            <h3 className="skill-title">Ubuntu</h3>
          </div>
          <div className="punctuation-left">
            <img src={`${process.env.PUBLIC_URL}/slack.svg`} className="skill-logo" />
            <h3 className="skill-title">Slack</h3>
          </div>
          <div className="punctuation-right">
            <img src={`${process.env.PUBLIC_URL}/Octocat.png`} className="skill-logo" />
            <h3 className="skill-title">Git Hub</h3>
          </div>
        </div>

        <div className="scroll-bg bg-color01">
          <h2 className="sub-title">Thank you for reading.</h2>
        </div>
      </header>
    </div>
  );
}

export default App;
