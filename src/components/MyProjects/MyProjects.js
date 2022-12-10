import React from 'react';
import code from '../../assets/codePlanner.png';
import sellcell from '../../assets/sellcell.png';
import jour from '../../assets/journalist.png'


const MyProjects = () => {
    return (
     <div>

        <h2 className='text-center text-4xl my-5 font-bold'>My Projects</h2>
           <div className='grid lg:grid-cols-3 mx-auto sm:grid-cols-1 md:grid-cols-2 gap-5 text-white'>
            <div className="card w-96 bg-black shadow-xl">
  <figure  className="px-8 pt-8"><img src={sellcell} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Sellcell</h2>
    <p>A website for sell and buy of mobiles phones using react js, react-router dom, tailwindCss, firebase, mongoDB</p>
    <div className="card-actions justify-end">
    <a href="https://sellcell-f5de6.web.app">  <button className="btn btn-active btn-secondary">Live link</button></a>
    </div>
  </div>
</div>

<div className="card w-96 bg-black shadow-xl">
  <figure  className="px-8 pt-8"><img src={code} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Code Planner</h2>
    <p>The website about an Online Course Platform Related using react js, react-router dom, tailwindCss, firebase, mongoDB</p>
    <div className="card-actions justify-end">
<a href="https://code-planner-f4fc4.web.app">   <button className="btn btn-active btn-secondary">Live link</button></a>

    </div>
  </div>
</div>

<div className="card w-96 bg-black shadow-xl">
  <figure  className="px-8 pt-8"><img src={jour} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Journalist</h2>
    <p>The website about a professional life like journalism using react js, react-router dom, tailwindCss, firebase, mongoDB</p>
    <div className="card-actions justify-end">
 <a href="https://journalist-5a23f.web.app"> <button className="btn btn-active btn-secondary">Live link</button></a>
    </div>
  </div>
</div>
        </div>
     </div>
    );
};

export default MyProjects;
