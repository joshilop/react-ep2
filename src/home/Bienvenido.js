import React from 'react';
import './Bienvenido.css';
import imagen1 from '../assets/imagen-bienvenido.jpg';
import imagen2 from '../assets/icon1.PNG';
import imagen3 from '../assets/icon2.PNG';
import imagen4 from '../assets/icon3.PNG';
import imagen5 from '../assets/icon4.PNG';
import imagen6 from '../assets/imagen-bienvenido2.jpg';
import imagen7 from '../assets/imagen-bienvenido3.jpg';

function Bienvenido(props){
    return (
        <section id="bienvenido" className="padded">
  <div>
    <div className="row mt-5 mb-5">
      <div className="col mt-5 mb-5" id="imagen">
        <img src={imagen1} alt="" className="img-fluid"/>
      </div>
      <div className="col p-md-5">
        <div className="mt-5 mb-5">
          <h1 style={{fontWeight: "bold"}}>Welcome To Orgafresh</h1>
          <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation.</p>
        </div>
          <div className="row gy-5">
                <div className="col">
                  <img src={imagen2} style={{float: "left"}} className="img-fluid"/>
                  <h4>100% Organic</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adi</p>
                </div>
                <div className="col">
                  <img src={imagen3} style={{float: "left"}}  className="img-fluid"/>
                  <h4>100% Organic</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adi</p>
                </div>
                <div className="w-100"></div>
                <div className="col">
                  <img src={imagen4} style={{float: "left"}}  className="img-fluid"/>
                  <h4>Easy Buy</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adi</p>
                </div>
                <div className="col">
                  <img src={imagen5} style={{float: "left"}}  className="img-fluid"/>
                  <h4>Care For You</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adi</p>
                </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-6 align-self-start pb-5">
        <div className="pb-5">
          <img src={imagen6} alt="" className="img-fluid"/>
        </div>

      </div>
      <div className="col-6 align-self-end">
        <img src={imagen7} alt="" className="img-fluid"/>
      </div>
    </div>
  </div>
</section>
    );
}

export default Bienvenido;