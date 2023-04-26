import React from 'react'
import { Link } from "react-router-dom";
import Navbar from '../../components/navbar/navbar';
import './styles.css'

// import user from '../../assets/img/user.png'
  import image1 from '../../assets/img/passng.png';
  import image2 from '../../assets/img/avetium.png';
  import image3 from '../../assets/img/bmac.png';
  import image4 from '../../assets/img/scout4jobs-logo.png';
  import image5 from '../../assets/img/hexlogistics.png';
  import image6 from '../../assets/img/printhouse.png';
  import image7 from '../../assets/img/myexpertskill.png';
  import image8 from '../../assets/img/onewatt.png';
  import image10 from '../../assets/img/primhex.png';
  import image11 from '../../assets/img/zenith.png';
  import image13 from '../../assets/img/manila.png';

function Portfolio() {
  return (
    <>
    <Navbar />
    <section>
    <div class="container">
        <div class="row port">
            <div class="col-md-3">
                <div class="work">
                    <Link to="https://primhex.com/" target="_blank">
                        <div class="dis dis-1">
                            <img src={image10} alt="portfolio" class="img-responsive" />
                        </div>
                        <h2 class="line">Primhex Logistics</h2>
                    </Link>
                </div>
            </div>
            <div class="col-md-3">
                <div class="work">
                    <Link to="http://hexlogisitcs.ng/" target="_blank">
                        <div class="dis ">
                            <img src={image5} alt="portfolio" class="img-responsive" />
                        </div>
                        <h2 class="line">hexlogisitcs.ng</h2>
                    </Link>
                </div>
            </div>
            <div class="col-md-3">
                <div class="work">
                    <Link to="https://www.pass.ng/" target="_blank">
                        <div class="dis">
                            <img src={image1} alt="portfolio" class="img-responsive" />
                        </div>
                        <h2 class="line">Class54</h2>
                    </Link>
                </div>
            </div>
            
            <div class="col-md-3">
                <div class="work">
                    <Link to="http://onebmac.com/" target="_blank">
                        <div class="dis dis-8">
                            <img src={image3} alt="portfolio" class="img-responsive" />
                        </div>
                        <h2 class="line">onebmac.com</h2>
                    </Link>
                </div>
            </div>
            
        </div>
        <div class="row port">
            <div class="col-md-3">
                <div class="work">
                    <Link to="https://printhouse.ng/" target="_blank">
                        <div class="dis dis-2">
                            <img src={image6} alt="portfolio" class="img-responsive" />
                        </div>
                        <h2 class="line">printhouse.ng</h2>
                    </Link>
                </div>
            </div>
            <div class="col-md-3">
                <div class="work">
                    <Link to="https://www.avetiumconsult.com/" target="_blank">
                        <div class="dis">
                            <img src={image2} alt="portfolio" class="img-responsive" />
                        </div>
                        <h2 class="line">avetiumconsult.com</h2>
                    </Link>
                </div>
            </div>
            <div class="col-md-3">
                <div class="work">
                    <Link to="http://myexpertskills.com/" target="_blank">
                        <div class="dis dis-5">
                            <img src={image7} alt="portfolio" class="img-responsive" />
                        </div>
                        <h2 class="line">VendExpress.ng</h2>
                    </Link>
                </div>
            </div>
            <div class="col-md-3">
                <div class="work">
                    <Link to="https://www.pass.ng/" target="_blank">
                        <div class="dis">
                            <img src={image8} alt="portfolio" class="img-responsive" />
                        </div>
                        <h2 class="line">onewattsolar.ng</h2>
                    </Link>
                    
                </div>
            </div>
        </div>
        <div class="row port">
            <div class="col-md-3">
                <div class="work">
                    <Link to="https://manilaedutech.herokuapp.com/" target="_blank">
                        <div class="dis dis-7">
                            <img src={image13} alt="portfolio" class="img-responsive" />
                        </div>
                        <h2 class="line">Manila EduTech</h2>
                    </Link> </div>
            </div>
            <div class="col-md-3">
                <div class="work">
                    <Link to="https://scout4job.herokuapp.com/" target="_blank">
                        <div class="dis dis-9">
                            <img src={image4} alt="portfolio" class="img-responsive" />
                        </div>
                        <h2 class="line">scout4job</h2>
                    </Link></div>
            </div>
            <div class="col-md-3">
                <div class="work">
                    <Link to="https://www.zenithbank.com/" target="_blank">
                        <div class="dis dis-4">
                            <img src={image11} alt="portfolio" class="img-responsive" />
                        </div>
                        <h2 class="line">Zenith Bank</h2>
                    </Link></div>
            </div>
            <div class="col-md-3">
                <div class="work">
                    <Link to="https://www.voiajtravels.com/" target="_blank">
                        <div class="dis dis-6">
                            <img src="{{portfolio12}}" alt="portfolio" class="img-responsive" />
                        </div>
                        <h2 class="line">Pls-Express</h2>
                    </Link>
                </div>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default Portfolio