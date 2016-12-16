import React from 'react';
import picture from '../../public/Danni-Nicaragua.png';

const About = (props) => {
  const myBirthday=new Date("1992/08/21 03:00:00")
  const age=Math.floor((new Date()-myBirthday)/1000/60/60/24/365);
  console.log(age);
  return (
    <div>
      <h2>Hi! I'm Danni.</h2>
      <p>I'm {age} and currently live in New York City where I work at WeWork as a software engineer in test. In my free time I enjoy going for runs, doing yoga, eating great food and listening to most any kind of live music.</p>
      <img className="my-picture" src={picture} />
    </div>
  );
};

export default About;
