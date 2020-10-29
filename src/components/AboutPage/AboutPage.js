import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div className="container">
    <div>
      <p>Welcome to Flop-Doodle!</p>
      <p>With having three boys ages 11 and twins at 5 years old, I wanted to create a 
        sight-word game that was challenging but short so children could build their word 
        bank faster.  We have learned along the way that if we try to show too many 
        words/flash cards (more than 15) in one setting, they simply do not retain as much 
        and the boys start guessing instead of sounding the words out and getting them correct.  
        So we have shortened the games we play with them to about 10 words so they can learn as 
        fast as possible.  This seems to work best for our boys of endless energy!  I 
        would like to introduce you to our app named FLOP-DOODLE!  This app allows the 
        parent or child to login and select the length of words they wish to learn from 
        two letters up to six letters.  Miscellaneous objects will house words like balloons 
        floating up or cars driving by and the child touches the words they think are correct.  
        They get encouraging voice recorded responses from the kids and parents who helped 
        create the app!  Points are awarded and it’s always a blast for kids to try and beat
        their last score so they can proudly say “I PLAYED on FLOP-DOODLE today!”</p>
    </div>
  </div>
);

export default AboutPage;   
