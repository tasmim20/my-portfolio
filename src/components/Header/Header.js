import React from 'react';
import img from '../../assets/p4.jpg'

const Header = () => {
    return (
        <div>
        <div className="hero h-screen -mb-30 -py-10" style={{ backgroundImage: `url(${img})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-3xl font-bold">Hello, I'M Tasmim</h1>
     <div>
        <span>
            {" "}
            <h1>

            </h1>
        </span>
     </div>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
     
     <div className='flex justify-around'> 
      <button className="btn btn-active btn-secondary px-4">Hire me</button>
   <a href='Tasmim Rahman4.pdf' download='Tasmim Rahman'> <button className="btn btn-active btn-success px-2"> Get Resume </button></a>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;