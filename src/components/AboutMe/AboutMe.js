import React from 'react';
import girl from '../../assets/girl5.png';
import bg from '../../assets/w4.jpg';

const AboutMe = () => {
    return (
        <div className='my-16'>
<div className="hero  text-white rounded-lg  " style={{ backgroundImage: `url(${bg})` }}>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={girl} className="rounded-lg-red shadow-blue-700" />
    <div>
      <h1 className="text-4xl font-bold">About Me</h1>
      <p className="pt-2">Hi, I'm Tasmim, and I am graduating from the University of Hajee Mohammad Danesh Science & Technology University in B. Sc. in Electronics and Communications Engineering (ECE).</p>
      <p className='-mt-3'>I am a Front-End Web Developer passionate about building good-looking functional web applications.   
        I write clean code, organized and semantic.I am a highly motivated, progress-focused and deadline oriented person. I have overcome many challenges.</p>
    
      <button className="btn btn-outline btn-success text-white">Get Resume</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AboutMe;