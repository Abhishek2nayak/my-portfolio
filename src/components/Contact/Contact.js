import React ,{useRef} from 'react';
import './index.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
 const form = useRef();

 const sendEmail = (e) => {
  e.preventDefault();
  

  emailjs.sendForm('service_gfmj63v', 'template_homsepo', form.current, 'SWDf9u_-vlH_oUUpa')
    .then((result) => {
       alert('Email is successfully delivered.')
      
    }, (error) => {
        alert('Something wen wrong,check data entered . Error : ' +  error.text);
    });

    e.target.reset();
  
    
    
};


  return (
    <>
      <center>
        <h1 className="header-title">.Get In Touch</h1>
      </center>
      <div className="form-container">
        <form  ref={form} onSubmit={sendEmail} >
         
          <input type="text"  name='from_name' placeholder='Full Name' />
          <input type="email" placeholder='Email' name='user_email' />
          <input type="number" placeholder='Phone'   name='phone_no'/>
          <textarea  cols="30" rows="10" placeholder='Message'
          name='message'
          ></textarea>
          <input type="submit" value={'Submit'} />
        </form>
      </div>
    </>
  );
}

export default Contact;
