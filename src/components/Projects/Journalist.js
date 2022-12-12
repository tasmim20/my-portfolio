import React from 'react';
import code2 from '../../assets/jour2.png';
import code3 from '../../assets/jour3.png';
import code1 from '../../assets/journalist.png';
import bg from '../../assets/g5.webp'

const Journalist = () => {
    return (
      <div className='pb-32  pt-32  text-white max-w-[1440px] mx-auto' style={{ backgroundImage: `url(${bg})` }}>
          <h2 className='text-center text-3xl mb-5'>Project: Journalist</h2>
          <div  className=' grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 ' >
        
         <div className="card card-compact w-96  shadow-xl bg-black">
  <figure><img src={code1} alt="Shoes" /></figure>
  <h2 className="text-white text-center  text-2xl font-bold">Home</h2>
</div>
<div className="card card-compact w-96 bg-base-100 shadow-xl bg-black">
  <figure><img src={code2} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-white text-2xl font-bold text-center">Blog</h2> 
  </div>
</div>
<div className="card card-compact w-96 bg-base-100 shadow-xl bg-black">
  <figure><img src={code3} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-white text-2xl font-bold text-center">Details page</h2>
  </div>
</div>
            


        </div>
        <div className='text-white text-center my-6'>
          <h2 className=' text-3xl'>Projects Description: </h2>
          <ul>
            <h3>Features-</h3>
            <li>1.A website for journalist</li>
            <li>2.Anyone visit this website and can read news. If they want to get daily update from a categroy then they pay to money </li>
            <li>3.Here firebase authentication system is applied for Authorization</li>
            <li>4.Call to action</li>
            <li>5.Responsive Website</li>


          </ul>
       <h2 className='text-xl'>Technologies: React-js, TailwindCSS, DaisyUI, Mongodb, firebase, vercel,node-js</h2>

        </div>
        <div className='text-center'>
          <a href="https://github.com/tasmim20/journalist-client"> <button className="btn btn-primary me-2">Client</button></a>
           <a href="https://github.com/tasmim20/journalist-server"> <button className="btn btn-info me-2">Server</button></a>
          <a href="https://journalist-5a23f.web.app">  <button className="btn btn-success">Live-link</button></a>
           

        </div>
      </div>
    );
};

export default Journalist;