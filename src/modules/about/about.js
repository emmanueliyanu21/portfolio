import React from 'react'
import './style.css'
 import leadership from '../../assets/img/portfolio.jpg';
import Navbar from '../../components/navbar/navbar';

function About() {
  return (
    <>
    <Navbar />
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
        <div className="carousel-item active">
            <img className="d-block w-100 log-x2" src={leadership} alt="First slide" style={{maxWidth: '100%'}} />
            <div className="carousel-caption d-none d-md-block">
                <h2 className="sm-biz">About me</h2>
                <p className="ul-product"></p>
            </div>
        </div>
    </div>
</div>


<section>
    <div className="container due-p">
        <div className="row akoka">
            <div className="col-md-12">
                <p>
                    I live at Gbagada phase 2, Lagos with my life time girlfriend, Tefe a senior software enginner at Moniepoint, I would not be the person I am today without her, and I thank the universe every day for bringing her into my life. We spend most of our free
                    time together, watching Netflix movies, going to Dodger games, and goofing off - and I wouldn't want it any other way.
                </p>
                <p> I have a strong record of leadership and team-work spirit professionally & socially, with proven technical skill which will be valuable for building scalable product and implementing user experiences for various products. Also, my continuous
                    passion for building websites and interactive experiences, with great user interface will be a great value to the company. I am a young, proactive tech enthusiast aspiring to attain the apex with my career.
                 
                </p>
                <p>I currently work as a freelance Software Engineer and Frontend Developer for a number of clients, ranging from startups to corporations, from small teams to friends and family. What started as curiosity has grown into a passion to build unique
                    experiences. I approach technology with an element of humanity and simplicity, and make a point to keep the user in mind whenever I build anything for the web.</p>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <ul>
                    <li className="active">I build with</li>
                    <li>React / Angular</li>
                    <li>Redux / NGRX</li>
                    <li>Next / Typescript</li>
                    <li>Graphql</li>
                    <li>Jest / Jasmine</li>
                </ul>
            </div>
            <div className="col-md-6">
                <ul>
                    <li className="active">I'm learning</li>
                    <li>Java</li>
                    <li>Node</li>
                </ul>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default About