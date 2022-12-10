import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import Header from '../Header/Header';
import MyProjects from '../MyProjects/MyProjects';


const Home = () => {
    return (
        <div className='mb-20'>
          <Header></Header>
          <AboutMe></AboutMe>
          <MyProjects></MyProjects>
          <ContactMe></ContactMe>
        </div>
    );
};

export default Home;