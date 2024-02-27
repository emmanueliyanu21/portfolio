import React from 'react'
import { Link } from "react-router-dom";
import Navbar from '../../components/navbar/navbar';
import './styles.css'

// import user from '../../assets/img/user.png'
  import image1 from '../../assets/img/class54.jpeg';
  import image2 from '../../assets/img/avetium.png';
  import image3 from '../../assets/img/primhex.png';
  import image4 from '../../assets/img/scout4jobs-logo.png';
  import image5 from '../../assets/img/pls-express.svg';
  import image6 from '../../assets/img/printhouse.png';
  import image7 from '../../assets/img/kaiglo.png';
  import image8 from '../../assets/img/onewatt.png';
  import image9 from '../../assets/img/bmac.png';
  import image10 from '../../assets/img/platform45.jpeg';
  import image11 from '../../assets/img/zenith.png';
  import image13 from '../../assets/img/manila.png';

function Portfolio() {
  return (
    <>
    <Navbar />
    <section>
    <div className="container">
        <div className="row port">
            <div className="col-md-3">
                <div className="work">
                    <Link to="https://www.platform45.com/" target="_blank">
                        <div className="dis dis-1">
                            <img src={image10} alt="portfolio" className="img-responsive" />
                        </div>
                        <h2 className="line">Platform45</h2>
                    </Link>
                </div>
            </div>
            <div className="col-md-3">
            <div className="work">
                    <Link to="https://www.zenithbank.com/" target="_blank">
                        <div className="dis dis-4">
                            <img src={image11} alt="portfolio" className="img-responsive" />
                        </div>
                        <h2 className="line">Zenith Bank</h2>
                    </Link>
                    </div>
            </div>
            <div className="col-md-3">
            <div className="work">
                    <Link to="https://www.kaiglo.com/" target="_blank">
                        <div className="dis ">
                            <img src={image7} alt="portfolio" className="img-responsive" />
                        </div>
                        <h2 className="line">Kaiglo</h2>
                    </Link>
                </div>
            </div>
            
            <div className="col-md-3">
            <div className="work">
                    <Link to="https://primhex.com/" target="_blank">
                        <div className="dis dis-1">
                            <img src={image3} alt="portfolio" className="img-responsive" />
                        </div>
                        <h2 className="line">Primhex.com</h2>
                    </Link>
                </div>
            </div>
        </div>
        <div className="row port">
            <div className="col-md-3">
                <div className="work">
                    <Link to="https://onebmac.com/" target="_blank">
                        <div className="dis dis-6">
                            <img src={image9} alt="portfolio" className="img-responsive" />
                        </div>
                        <h2 className="line">Onebmac.com</h2>
                    </Link>
                </div>
            </div>
            // <div className="col-md-3">
            //     <div className="work">
            //         <Link to="https://www.avetiumconsult.com/" target="_blank">
            //             <div className="dis">
            //                 <img src={image2} alt="portfolio" className="img-responsive" />
            //             </div>
            //             <h2 className="line">avetiumconsult.com</h2>
            //         </Link>
            //     </div>
            // </div>
            // <div className="col-md-3">
            //     <div className="work">
            //         <Link to="https://pls-express.ng/" target="_blank">
            //             <div className="dis dis-5">
            //                 <img src={image5} alt="portfolio" className="img-responsive" />
            //             </div>
            //             <h2 className="line">Pls-Express</h2>
            //         </Link>
            //     </div>
            // </div>
            // <div className="col-md-3">
            //     <div className="work">
            //         <Link to="https://onewattsolar.com/" target="_blank">
            //             <div className="dis">
            //                 <img src={image8} alt="portfolio" className="img-responsive" />
            //             </div>
            //             <h2 className="line">onewattsolar</h2>
            //         </Link>
                    
            //     </div>
            // </div>
        </div>
        <div className="row port">
            
            
            
            // <div className="col-md-3">
            //     <div className="work">
            //         <Link to="https://manilaedutech.herokuapp.com/" target="_blank">
            //             <div className="dis dis-7">
            //                 <img src={image13} alt="portfolio" className="img-responsive" />
            //             </div>
            //             <h2 className="line">Manila EduTech</h2>
            //         </Link> </div>
            // </div>
            // <div className="col-md-3">
            //     <div className="work">
            //         <Link to="https://scout4job.herokuapp.com/" target="_blank">
            //             <div className="dis dis-9">
            //                 <img src={image4} alt="portfolio" className="img-responsive" />
            //             </div>
            //             <h2 className="line">scout4job</h2>
            //         </Link></div>
            // </div>
        </div>
    </div>

{/* <div className="work">
                    <Link to="http://onebmac.com/" target="_blank">
                        <div className="dis dis-8">
                            <img src={image3} alt="portfolio" className="img-responsive" />
                        </div>
                        <h2 className="line">onebmac.com</h2>
                    </Link>
                </div> */}
</section>

    </>
  )
}

export default Portfolio
