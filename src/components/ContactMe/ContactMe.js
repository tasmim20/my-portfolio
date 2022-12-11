import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import img from '../../assets/g4.webp';
import { toast } from 'react-toastify';

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tgpjuvd', 'template_lp0nrbb', form.current, 'uboDGEfEJOHfML08c')
      .then((result) => {
          console.log(result.text);
          toast.error('Message Sent Successfully');
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
<div>
{/* <form ref={form} onSubmit={sendEmail}>
        <h2>contact form</h2>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}
      

    <div className="hero text-white my-10 py-5 " style={{ backgroundImage: `url(${img})` }}>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-full">
      <h1 className="text-5xl  font-bold">Contact Me</h1>
      <p className="py-6 text-xl">I am interested in working with any company if they think my skill will be helpful for them.If you want to hire me, Please contact with me via email. </p>
    </div>
    <div className="card  max-w-sm  shadow-2xl w-full">
      <div className="card-body bg-black text-white">
  <form ref={form} onSubmit={sendEmail}>

  <div>
          <label className="label">
            <span className="label-text text-white">Name</span>
          </label>
          <input type="text" placeholder="name" name="user_name"  className="input input-bordered w-full" />
        </div>
        <div>
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="text" placeholder="email" name="user_email" className="input input-bordered w-full" />
        </div>
        <div>
          <label className="label">
            <span className="label-text text-white">Your Message</span>
          </label>
          <textarea name="message" className="textarea textarea-dark w-full text-white" placeholder="your message"></textarea>
        </div>
           
        {/* <button type='input' value='send' className="btn btn-active px-4 my-4 btn-secondary">Submit</button> */}
        <input className='btn btn-active btn-secondary w-full rounded-lg my-3' type="submit" value="Send" />


  </form>
       
      </div>
    </div>
  </div>
</div>
</div>
   
  );
};
export default ContactMe;