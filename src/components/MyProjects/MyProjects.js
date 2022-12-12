import React from 'react';
import code from '../../assets/codePlanner.png';
import sellcell from '../../assets/sellcell.png';
import jour from '../../assets/journalist.png';
import img from '../../assets/w5.webp';
import { Link } from 'react-router-dom';


const MyProjects = () => {
    return (
     <div className='my-10 py-8 rounded-lg' style={{ backgroundImage: `url(${img})` }} >

        <h2 className='text-center text-4xl pb-8 font-bold text-white'>My Projects</h2>
           <div className='grid lg:grid-cols-3 mx-auto sm:grid-cols-1 md:grid-cols-2 gap-5 text-white'  >
            <div className="card w-96 bg-black shadow-xl">
  <figure  className="px-8 pt-8"><img src={sellcell} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="font bold text-2xl">Sellcell</h2>
    <p>A website for sell and buy of mobiles phones using react js, react-router dom, tailwindCss, firebase, mongoDB</p>
    <div className="card-actions justify-end">
    <Link to='/sellcell'><button className="btn btn-active btn-secondary">View Details</button></Link>
    </div>
  </div>
</div>

<div className="card w-96 bg-black shadow-xl">
  <figure  className="px-8 pt-8"><img src={code} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="font bold text-2xl">Code Planner</h2>
    <p>The website about an Online Course Platform Related using react js, react-router dom, tailwindCss, firebase, mongoDB</p>
    <div className="card-actions justify-end">
    <Link to='codePlanner'><button className="btn btn-active btn-secondary">View Details</button></Link>

    </div>
  </div>
</div>

<div className="card w-96 bg-black shadow-xl">
  <figure  className="px-8 pt-8"><img src={jour} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="font bold text-2xl">Journalist</h2>
    <p>The website about a professional life like journalism using react js, react-router dom, tailwindCss, firebase, mongoDB</p>
    <div className="card-actions justify-end">
    <Link to='/journalist'><button className="btn btn-active btn-secondary">View Details</button></Link>
    </div>
  </div>
</div>
        </div>
     </div>
    );
};

export default MyProjects;
