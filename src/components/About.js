import React from 'react';
import picture from '../../public/Danni-Nicaragua.png';
import Music from './Music.js';

const About = (props) => {
  const myBirthday=new Date("1992/08/21 03:00:00")
  const age=Math.floor((new Date()-myBirthday)/1000/60/60/24/365);
  return (
    <div>
      <div style={{display: 'flex', flexWrap: 'row wrap'}}>
        <h2 style={{margin: '20px'}}>Hi! I'm Danni.</h2>
        <section style={{margin: '25px'}}>
          <img style={{borderRadius:'50%', height: '200px', width: '200px'}} role="presentation" src={picture} />
        </section>
        <section style={{margin: '40px'}}>
          <p>I'm {age} and currently live in New York City where I work at WeWork as a Software Engineer. In my free time I enjoy going for runs, doing yoga, eating great food, dancing and listening to live music.</p>
        </section>
      </div>
      <Music />
    </div>
  );
};

export default About;
