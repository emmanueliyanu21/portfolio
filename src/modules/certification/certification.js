import React from 'react'
import { Link } from "react-router-dom";
import Navbar from '../../components/navbar/navbar';
import './styles.css'

function Certification() {
  return (
    <>
    <Navbar />
    <section>
    <div className="container">
        <div className="row dev-1">
            <div className="col-md-6 space-top">
                <div className="row dev-2 dev-3">
                    <div className="col-md-2">
                        <div className="cert-x12">
                            <i className="fa fa-adn"></i>
                        </div>
                    </div>
                    <div className="col-md-10 dev-detail">
                        <h2>Web Developer</h2>
                        <p>Andela
                            <span className="btn">
                                <Link to="https://drive.google.com/file/d/1OgBgOabzzAhJ0na0pjKLfocn9m9i1f5s/view" target="_blank" alt="">
                                        view
                                </Link>    
                            </span>
                        </p>
                    </div>
                </div>
                <div className="row dev-2 dev-3">
                    <div className="col-md-2">
                        <div className="cert-x12">
                            <i className="fa fa-adn"></i>
                        </div>
                    </div>
                    <div className="col-md-10 dev-detail">
                        <h2>Digital Marketing Agency</h2>
                        <p>Google
                            <span className="btn">
                                        <Link to="https://drive.google.com/file/d/1QP1K3wah4YFEHP648Wz7ALCHAHqLUA-o/view" target="_blank">
                                                view
                                        </Link>    
                                    </span>
                        </p>
                    </div>
                </div>
                <div className="row dev-2 dev-3">
                    <div className="col-md-2">
                        <div className="cert-x12">
                            <i className="fa fa-adn"></i>
                        </div>
                    </div>
                    <div className="col-md-10 dev-detail">
                        <h2>Javascript Proficiency</h2>
                        <p>Plural Sight
                            <span className="btn">
                                        <Link to="https://drive.google.com/file/d/0B3iZkEr3SOFVNmdTT2FDazlUamtDeTF4bTA2OHdDelNhR25n/view" target="_blank">
                                                view
                                        </Link>    
                                    </span>
                        </p>
                    </div>
                </div>
                <div className="row dev-2">
                    <div className="col-md-2">
                        <div className="cert-x12">
                            <i className="fa fa-adn"></i>
                        </div>
                    </div>
                    <div className="col-md-10 dev-detail">
                        <h2>Front-End Developer</h2>
                        <p>Tech Haven <span className="btn">view</span></p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 space-top">

            </div>

        </div>
    </div>
</section>
    </>
  )
}

export default Certification