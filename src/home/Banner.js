import React from 'react';
import './Banner.css';
import foto1 from '../assets/frutas1.jpg';
import foto2 from '../assets/frutas2.jpg';
import foto3 from '../assets/frutas3.jpg';
import foto4 from '../assets/frutas4.jpg';

function Banner(props){
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner position-relative" id="imagenes">

    <div className="carousel-item active" id="imagen1" >
      <img src={foto1} className="d-block w-100" height={"650"} alt="..."/>
      <div className="carousel-caption position-absolute top-50 start-50 translate-middle" style={{bottom: "220px"}}>
        <h1>FAST AND TESTY</h1>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>

    <div className="carousel-item" id="imagen2">
      <img src={foto2} className="d-block w-100" alt="..." height={"650"}/>
      <div className="carousel-caption position-absolute top-50 start-50 translate-middle" style={{bottom: "220px"}}>
        <h1>ORGANIC TESTY</h1>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>

    <div className="carousel-item" id="imagen3">
      <img src={foto3} className="d-block w-100"  alt="..." height={"650"}/>
      <div className="carousel-caption position-absolute top-50 start-50 translate-middle" style={{bottom: "220px"}}>
        <h1>SALE UP 50%</h1>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>

    <div className="carousel-item" id="imagen4">
      <img src={foto4} className="d-block w-100" alt="..." height={"650"}/>
      <div className="carousel-caption position-absolute top-50 start-50 translate-middle" style={{bottom: "220px"}}>
        <h1>SUPER TESTY</h1>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

      
    );
}

export default Banner;