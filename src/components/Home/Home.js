import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import Header from '../Header/Header';
import MyProjects from '../MyProjects/MyProjects';


const Home = () => {
    return (
    <div>
      <div>
          <Header></Header>
      </div>
      <div className='max-w-[1440px] mx-auto'>
            
            <AboutMe></AboutMe>
            <MyProjects></MyProjects>
            <ContactMe></ContactMe>
          </div>
    </div>

    );
};

export default Home;