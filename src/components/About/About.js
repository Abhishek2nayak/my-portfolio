import React from "react";
import "./index.css";
import profile from "./../resource/profile-img/profile.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="left">
          <img src={profile} alt="" />
        </div>
        <div className="right">
          <div className="right-up">
            <div className="header-area">
              <h1>Abhishek Nayak</h1>
              <h3>Frontend Developer</h3>
            </div>
          </div>
          <div className="right-down">
            <div className="top-header">About Me</div>
            <div className="about-body">
              <p className="profile-text">
                As a skilled frontend developer based in India and currently
                pursuing a BSc IT degree from Shree Ramkrishna Institute of
                computer education and applied sciences, I am committed to
                continuous learning and growth in my field. My passion for
                creating new things and my desire to stay current with the
                latest technologies and trends drive my work.
              </p>
              <p className="profile-text">
                I am a passionate and skilled developer with experience in HTML,
                CSS, JavaScript, React, and other related technologies. I have
                worked on a variety of projects, including building responsive
                websites and developing interactive user interfaces. However,
                what really sets me apart is my dedication to collaborating with
                others and contributing to open source projects.
              </p>

              <div className="connect">
                Connect with me <br />
                <Link target='_blank'  to="https://twitter.com/N_Abhishek09"> <i class="fa-brands fa-twitter"></i></Link>
     <Link target='_blank' to="https://www.linkedin.com/in/abhishek-nayak-6b0a13271/"> <i class="fa-brands fa-linkedin-in"></i></Link>
     <Link target='_blank' to="https://github.com/Abhishek2nayak"> <i class="fa-brands fa-github"></i></Link>
     <Link target='_blank' to="https://www.instagram.com/abhishek_nayak_18/"> <i class="fa-brands fa-instagram"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
