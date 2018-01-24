import React from 'react';
import picture from '../../public/Danni-Nicaragua.png';
import Music from './Music.js';

const About = (props) => {
  const myBirthday=new Date("1992/08/21 03:00:00")
  const age=Math.floor((new Date()-myBirthday)/1000/60/60/24/365);
  return (
    <div className="about-container">
      <div>
        <img style={{borderRadius:'50%', height: '200px', width: '200px', float: 'left', margin: '15px'}} role="presentation" className="danni-picture" src={picture} />
        <p style={{margin: '15px'}}>Hi, I'm Danni. I'm {age} and currently live in New York City where I work at WeWork as a Software Engineer. In my free time I enjoy going for runs, doing yoga, eating great food, traveling, dancing and listening to live music.</p>
      </div>
      <Music />
    </div>
  );
};

export default About;
