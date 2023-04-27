import { Link } from "react-router-dom";
import './navbar.module.css'

function Navbar() {
  return (
    <>
        <section>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">

            <Link className="navbar-brand" to="/"></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto ">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            0706-857-6214</Link>
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link" to="/about">emmanueliyanu.oladejo@gmail.com</Link>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto df">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">home</Link>
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link" to="/about">about</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/portfolio">portfolio</Link>
                    </li>
                   
                </ul>
            </div>
        </div>
    </nav>

</section>
    </>
  )
}

export default Navbar