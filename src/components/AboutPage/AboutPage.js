import React from 'react';
import {withRouter, NavLink} from 'react-router-dom';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div className="container">
      <h2>Welcome to Flop-Doodle!</h2>
      <p>With having three boys ages 11 and twins at 5 years old, I wanted to create a 
        sight-word game that was challenging but short so children could build their word 
        bank faster.  We have learned along the way with our kids that if we try to show too many 
        words/flash cards (more than 15) in one game or competition, they simply do not retain the words as much 
        and the boys start guessing instead of sounding the words out and getting them correct.  
        So we had to shorten the games we played with them down to 10 words per round. It's was a little
        less to remember but they were able to retain what they learned much faster simply because
        we reduced the amount of words they were seeing per round. This seems to work best for our boys of 
        endless energy!  I would like to introduce you to my web app named FLOP-DOODLE!  This app allows the 
        parent or child to login and select the length of words they wish to learn starting at 
        two letters and going up to seven letters.  Words will appear in random order each time a game 
        is started. The child selects the words they think are correct and thier score is displayed.  
        They will get encouraging voice recorded responses from the kids and parents who helped 
        create the app!  It’s always a blast for our kids to try and beat their last score as well as holding
        the title of FLOP-DOODLE for today!”</p>
    <br /><NavLink to="/home">~--LET ME PLAY!--~</NavLink><br />
    </div>
);

export default (withRouter(AboutPage));   
