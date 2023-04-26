import { Link } from "react-router-dom";
import './navbar.module.css'

function Navbar() {
  return (
    <>
        <section>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">

            <Link class="navbar-brand" to="/"></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto ">
                    <li class="nav-item">
                        <Link class="nav-link" to="/">
                            0706-857-6214</Link>
                    </li>
                    <li class="nav-item ">
                        <Link class="nav-link" to="/about">emmanueliyanu.oladejo@gmail.com</Link>
                    </li>
                </ul>

                <ul class="navbar-nav ml-auto df">
                    <li class="nav-item">
                        <Link class="nav-link" to="/">home</Link>
                    </li>
                    <li class="nav-item ">
                        <Link class="nav-link" to="/about">about</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/portfolio">portfolio</Link>
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