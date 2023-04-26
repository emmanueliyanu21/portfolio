import { Link } from "react-router-dom";
import image from '../../assets/img/Group.png'
import Navbar from "../../components/navbar/navbar";
import './styles.css'

function Home() {
  return (
    <>
    <Navbar />
    <section >
    <div className="container">
        <div className="row">
        <div class="col-md-6 portfolio">
                <h2 class="port-1">I'm Emmanuel Iyanu</h2>
                <h2 class="port-2"><span class="ui">Front</span>-<span class="ux">End</span> Developer</h2>
                <div class="port-btn">

                    <Link to="/portfolio" class="btn btn-portfolio mf-1">
                        portfolio
                        </Link>

                    <Link to="/certification" class="btn btn-portfolio mf-2">
                    certifications
                    </Link>

                </div>
            </div>
            <div className="col-md-6 my-image">
                <img src={image} alt="" className="img-responsive" />
            </div>
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-md-6 soc-med">
                <Link to="https://www.linkedin.com/in/emmanuel-oladejo-b4b751120/" className="" target="_blank">
                    <i className="fa fa-linkedin"></i>
                </Link>
                <Link to="https://github.com/emmanueliyanu21" target="_blank">
                    <i className="fa fa-github"></i>
                </Link>
                <Link to="https://www.facebook.com/emmanuel.iyanu" target="_blank">
                    <i className="fa fa-instagram face"></i>
                </Link>
                
            </div>
            <div className="col-md-6">
                <div className="port-btn1">
                    <a href="https://docs.google.com/document/d/11jGfvYkKxH44YxbL6FwuNFC6ZK-Jzj_k/edit?rtpof=true" target="_blank" rel="noreferrer" className="btn btn-portfolio mf-3">My Curriculum Vitae</a>
                </div>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default Home