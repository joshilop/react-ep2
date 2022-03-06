import React from "react";
import { Link } from "react-router-dom";
import fotobar from "../assets/logo.png";

function Mainbar(props) {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md- sticky-top" style={{backgroundColor: "black"}}>
        <div className="container">
          <img src={fotobar} alt="" href="/" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">HOME</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sobrenosotros">Sobre nosotros</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">Shop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Mainbar;
