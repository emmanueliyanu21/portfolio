import React from 'react'
import { Link } from "react-router-dom";
import Navbar from '../../components/navbar/navbar';
import './styles.css'

function Certification() {
  return (
    <>
    <Navbar />
    <section>
    <div class="container">
        <div class="row dev-1">
            <div class="col-md-6 space-top">
                <div class="row dev-2 dev-3">
                    <div class="col-md-2">
                        <div class="cert-x12">
                            <i class="fa fa-adn"></i>
                        </div>
                    </div>
                    <div class="col-md-10 dev-detail">
                        <h2>Web Developer</h2>
                        <p>Andela
                            <span class="btn">
                                <Link to="https://drive.google.com/file/d/1OgBgOabzzAhJ0na0pjKLfocn9m9i1f5s/view" target="_blank" alt="">
                                        view
                                </Link>    
                            </span>
                        </p>
                    </div>
                </div>
                <div class="row dev-2 dev-3">
                    <div class="col-md-2">
                        <div class="cert-x12">
                            <i class="fa fa-adn"></i>
                        </div>
                    </div>
                    <div class="col-md-10 dev-detail">
                        <h2>Digital Marketing Agency</h2>
                        <p>Google
                            <span class="btn">
                                        <Link to="https://drive.google.com/file/d/1QP1K3wah4YFEHP648Wz7ALCHAHqLUA-o/view" target="_blank">
                                                view
                                        </Link>    
                                    </span>
                        </p>
                    </div>
                </div>
                <div class="row dev-2 dev-3">
                    <div class="col-md-2">
                        <div class="cert-x12">
                            <i class="fa fa-adn"></i>
                        </div>
                    </div>
                    <div class="col-md-10 dev-detail">
                        <h2>Javascript Proficiency</h2>
                        <p>Plural Sight
                            <span class="btn">
                                        <Link to="https://drive.google.com/file/d/0B3iZkEr3SOFVNmdTT2FDazlUamtDeTF4bTA2OHdDelNhR25n/view" target="_blank">
                                                view
                                        </Link>    
                                    </span>
                        </p>
                    </div>
                </div>
                <div class="row dev-2">
                    <div class="col-md-2">
                        <div class="cert-x12">
                            <i class="fa fa-adn"></i>
                        </div>
                    </div>
                    <div class="col-md-10 dev-detail">
                        <h2>Front-End Developer</h2>
                        <p>Tech Haven <span class="btn">view</span></p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 space-top">

            </div>

        </div>
    </div>
</section>
    </>
  )
}

export default Certification