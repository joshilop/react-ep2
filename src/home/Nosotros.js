import React from 'react';
import card1 from '../assets/card1.jpg';
import card2 from '../assets/card2.jpg';
import card3 from '../assets/card3.jpg';
import card4 from '../assets/card4.jpg';

function Nosotros(props){
    return (
        <section id="nosotros" className="padded">
  <div className="container pt-5">
    <div className="row pt-5">
      <div className="col">
        <h1 className="pb-4 text-center" style={{fontWeight: "bold"}}>Ours products</h1>
          <p className="pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation.</p>
      </div>
    </div>
    <div className="row">
        <div className="card mb-3">
          <img className="card-img-top" src={card1} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
          <img className="card-img-bottom" src={card2} alt="Card image cap"/>
        </div>
        <div className="card mb-3">
          <img className="card-img-top" src={card3} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
          <img className="card-img-bottom" src={card4} alt="Card image cap"/>
        </div>
    </div>
  </div>
</section>
        );
}

export default Nosotros;