import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';
import profile from './../resource/profile-img/profile.png'

const Home = () => {
  const downloadResume = (e) => {
    fetch('abhishekNayak.pdf')
    .then((response) => {
      response.blob()
      .then(blob => {
        const fileUrl = window.URL.createObjectURL(blob)
        let alink = document.createElement('a')
        alink.href = fileUrl
        alink.download = 'abhishekNayak.pdf'
        alink.click();
      })
    })
  }
  return (
    <div className='home'>
    
     <div className="home-main">
     <div className="socials">
     <Link target='_blank'  to="https://twitter.com/N_Abhishek09"> <i class="fa-brands fa-twitter"></i></Link>
     <Link target='_blank' to="https://www.linkedin.com/in/abhishek-nayak-6b0a13271/"> <i class="fa-brands fa-linkedin-in"></i></Link>
     <Link target='_blank' to="https://github.com/Abhishek2nayak"> <i class="fa-brands fa-github"></i></Link>
     <Link target='_blank' to="https://www.instagram.com/abhishek_nayak_18/"> <i class="fa-brands fa-instagram"></i></Link>
     </div>
      
      <h1 className="name">.Abhishek Nayak</h1>
      <h1 className='title'>.FrontEnd Developer</h1>
      <div className="btn-container">
      <button className='btn-resume' onClick={downloadResume}>Download Resume</button>
      </div>
    
     <div className="box">
      <div className="profile-img">
        <img src={profile} alt="" />
      </div>
     </div>
     </div>
    </div>
  );
}

export default Home;
