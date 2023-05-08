import React from 'react';
import './index.css'
import profile from './../resource/profile-img/profile.png'
const Home = () => {
  return (
    <div className='home'>
     <div className="socials">
     <a href="/"> <i class="fa-brands fa-twitter"></i></a>
     <a href="/"> <i class="fa-brands fa-linkedin-in"></i></a>
     <a href="/"> <i class="fa-brands fa-github"></i></a>
     <a href="/"> <i class="fa-brands fa-instagram"></i></a>
     </div>
     <div className="home-main">
      <h3 className='p-txt'>Portfolio Of </h3>
      <h1 className="name">.Abhishek Nayak</h1>
      <h1 className='title'>.FrontEnd Developer</h1>
      <button className='btn-resume'>Download Resume</button>
      <div className="profile-img">
        <img src={profile} alt="" />
      </div>
     </div>
    </div>
  );
}

export default Home;
