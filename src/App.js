import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import { circularLoading }  from '@yami_beta/react-circular-loading';

const sky = {
  width: '100%',
  height: '60vmin',
  backgroundImage: `url(${process.env.PUBLIC_URL}/sky.jpg)`
};

const CircularLoading = circularLoading({
  num: 12,
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <CircularLoading /> */}
        <div className="scroll-bg bg-color01">
            <img src={logo} className="App-logo" alt="logo" />
            <h2 className="sub-title">Hikaru Kobayashi</h2>
        </div>

        <div className="fixed-bg bg01" style={ sky }></div>

        <div className="content">
          <h2 className="sub-title">Who am I?</h2>
          <h3>History</h3>
            <p>1982         I was born in Nakano City, Nagano Prefecture.</p>
            <p>2005-2011    Entoku Elementary School</p>
            <p>2011-2014    Nangu Junior High School</p>
            <p>2014-2017    Nagano Nihon University High School</p>
            <p>2017-current Nihon University Faculty of Economics</p>
          <h3>Social Networking Service</h3>
            <a href="https://twitter.com/sakana_blog">Twitter</a><br></br><i className="fa fa-twitter sns-icon"></i><br></br>
            <a href="https://reactjs.org">Instagram</a><br></br><i className="fa fa-instagram sns-icon"></i><br></br>
            <a href="https://github.com/HikaruKobayashi">Git Hub</a><br></br><i className="fa fa-github sns-icon"></i>
        </div>

        <div className="content">
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

        <div className="content">
          <h2 className="sub-title">Thank you for reading.</h2>
        </div>
      </header>
    </div>
  );
}

export default App;
