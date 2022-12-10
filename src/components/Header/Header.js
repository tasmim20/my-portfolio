import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/p7.jpg'

const Header = () => {
    return (
        <div>
        <div className="hero h-screen -mb-30 -py-10" style={{ backgroundImage: `url(${img})` }}>
  <div className="hero-overlay bg-opacity-60 "></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold">Hello, I'M Tasmim</h1>
     <div>
        <span>
          
            <h1>

            </h1>
        </span>
     </div>
      <p className="mb-5">I'm a front end developer and I love to create beautiful and performant website with delightful user experiences. I write clean code, organized and semantic.</p>
     
     <div className='flex justify-around'> 
      <Link to='/contactMe'><button className="btn btn-active btn-secondary ">Contact me</button></Link>
   <a href='Tasmim Rahman4.pdf' download='Tasmim Rahman'> <button className="btn btn-active btn-success"> Download Resume </button></a>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;