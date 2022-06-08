import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./About.css"

function About() {
  return (
      <div class="wrapper">
        <h1>Meet Our Team</h1>
    
    <div className="team"> 
      <div className="team_member">
        <div className="team_img">
          <img src="/images/brandon.png" alt="team_member_image"/> 
        </div>
      <h3>Brandon Deo</h3>
        <p classname="role">Project Manager/Software Engineer</p>
        <p>Back-End Developer</p>
        <h4>Hey! My name is Brandon and I am a graduating senior at CSUSB. 
          My major is Computer Systems Game Development and I have an interest in software engineering. 
          I love to dance, bake, and play video games. Working with this team has been wonders and this project couldn't 
          have been better without these wonderful friends :')</h4>
      </div>

      <div className="team_member">
        <div className="team_img">
          <img src="images/angel.png" alt="team_member_image"/> 
        </div>
      <h3>Angel Mendoza-Arteaga</h3>
        <p classname="role">Assistant Project Manager/Software Engineer</p>
        <p>Front-End Developer</p>
        <h4>Hi everyone, my name is Angel and I will be graduating in Spring 2022! My major is Computer Science
          with an interest in Software Development. I love to be out in nature when possible, hang out with friends or family
          and doing hands-on projects like 3D printing! Working on this project opened up my eyes to how it will feel to
          work on a team and support one another to complete a common goal!
        </h4>
      </div>

<div classname="wrapper 2">
      <div className="team_member">
        <div className="team_img">
          <img src="images/terrence.png" alt="team_member_image"/> 
        </div>
      <h3>Terrence Davis</h3>
        <p classname="role">Software Engineer</p>
        <p>Back-End Developer</p>
        <h4>Brandon has worked rfffffffffffffffffffffffffff</h4>
      </div>
    </div>

      <div className="team_member">
        <div className="team_img">
          <img src="images/Neil.png" alt="team_member_image"/> 
        </div>
      <h3>Neil Upadhyaya</h3>
        <p classname="role">Software Engineer</p>
        <p>Full-Stack Developer</p>
        <h4> This is for the about us page. I am Neil Upadhyaya, my major is Business Marketing and I have a minor in Computer Science. 
          In the future I hope to be a front end web developer and try to work my way into full stack development. 
          Some of my hobbies/interests include playing guitar, videogames, philosophy, and psychology. 
          Working on this app was stressful at times but also a great learning experience, I hope you enjoy what we built. 
          </h4>
      </div>

      <div className="team_member">
        <div className="team_img">
          <img src="images/edward.png" alt="team_member_image"/> 
        </div>
      <h3>Edward Aleman</h3>
        <p classname="role">Software Engineer</p>
        <p>Back-End Developer</p>
        <h4>Brandon has worked rfffffffffffffffffffffffffff</h4>
      </div>

      <div className="team_member">
        <div className="team_img">
          <img src="images/kyle.png" alt="team_member_image"/> 
        </div>
      <h3>Kyle Ramos</h3>
        <p classname="role">Software Engineer</p>
        <p>Front-End Developer</p>
        <h4>Brandon has worked rfffffffffffffffffffffffffff</h4>
      </div>
  </div>
<div className="mission">
    <h5>Our Mission</h5>
</div>
    <div class="mission_statement">
      <p>
      The purpose of this application is to deliver a clean and fully functional re-implementation of the social media platform Facebook 
      using the development team’s provided APIs. This software requirement specification listed here has been created in close communication with the client Jennifer Jin. This task will be handled by CSE 4550 students of the Fall 2021 semester and is expected to be available as a web browser application by end of term. 
      </p>
    </div>

      </div>
  );
}

export default About;
