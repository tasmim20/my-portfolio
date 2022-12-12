import React from 'react';
import sellcell from '../../../assets/sellcell.png';
import sellcell2 from '../../../assets/sellcell2.png'
import sellcell3 from '../../../assets/sellcell3.png';
import bg from '../../../assets/g5.webp';

const Sellcell = () => {
    return (
      <div className='pb-32  pt-32  text-white max-w-[1440px] mx-auto' style={{ backgroundImage: `url(${bg})` }}>
          <h2 className='text-center text-3xl mb-5'>Project: Sellcell</h2>
          <div  className=' grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 ' >
        
         <div className="card card-compact w-96  shadow-xl bg-black">
  <figure><img src={sellcell} alt="Shoes" /></figure>
  <h2 className="text-white text-center  text-2xl font-bold">Home</h2>
</div>
<div className="card card-compact w-96 bg-base-100 shadow-xl bg-black">
  <figure><img src={sellcell2} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-white text-2xl font-bold text-center">Products</h2> 
  </div>
</div>
<div className="card card-compact w-96 bg-base-100 shadow-xl bg-black">
  <figure><img src={sellcell3} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-white text-2xl font-bold text-center">Login Pages</h2>
  </div>
</div>
            


        </div>
        <div className='text-white text-center my-6'>
          <h2 className=' text-3xl'>Projects Description: </h2>
          <ul>
            <h3>Features-</h3>
            <li>1.A resale website</li>
            <li>2.User can buy second hand phone at low price. </li>
            <li>3.User also can sell phone</li>
            <li>4.Call to action</li>
            <li>5.Responsive Website</li>


          </ul>
       <h2 className='text-xl'>Technologies: React-js, TailwindCSS, DaisyUI, Mongodb, firebase, vercel,node-js</h2>

        </div>
        <div className='text-center'>
          <a href="https://github.com/tasmim20/sellcell-client-side"> <button className="btn btn-primary me-2">Client</button></a>
           <a href="https://github.com/tasmim20/sellcell-server"> <button className="btn btn-info me-2">Server</button></a>
          <a href="https://sellcell-f5de6.web.app">  <button className="btn btn-success">Live-link</button></a>
           

        </div>
      </div>
    );
};

export default Sellcell;