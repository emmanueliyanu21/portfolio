import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import "./styles.css";

import primhex from "../../assets/img/primhex.png";
import kaiglo from "../../assets/img/kaiglo.png";
import bmac from "../../assets/img/bmac.png";
import platform45 from "../../assets/img/platform45.jpeg";
import zenith from "../../assets/img/zenith.png";

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
                    <img
                      src={platform45}
                      alt="portfolio"
                      className="img-responsive"
                    />
                  </div>
                  <h2 className="line">Platform45</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3">
              <div className="work">
                <Link to="https://www.zenithbank.com/" target="_blank">
                  <div className="dis dis-4">
                    <img
                      src={zenith}
                      alt="portfolio"
                      className="img-responsive"
                    />
                  </div>
                  <h2 className="line">Zenith Bank</h2>
                </Link>
              </div>
            </div>
            <div className="col-md-3">
              <div className="work">
                <Link to="https://www.kaiglo.com/" target="_blank">
                  <div className="dis ">
                    <img
                      src={kaiglo}
                      alt="portfolio"
                      className="img-responsive"
                    />
                  </div>
                  <h2 className="line">Kaiglo</h2>
                </Link>
              </div>
            </div>

            <div className="col-md-3">
              <div className="work">
                <Link to="https://primhex.com/" target="_blank">
                  <div className="dis dis-1">
                    <img
                      src={primhex}
                      alt="portfolio"
                      className="img-responsive"
                    />
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
                    <img
                      src={bmac}
                      alt="portfolio"
                      className="img-responsive"
                    />
                  </div>
                  <h2 className="line">Onebmac.com</h2>
                </Link>
              </div>
            </div>
          </div>
          <div className="row port"></div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
