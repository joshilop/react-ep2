import React, { Component } from 'react';
import './Blog.css';
import chef from '../assets/chef.jpg';
import foto3 from '../assets/frutas3.jpg';

class Blog extends Component {
    render() {
        return (
            <div>
                <section id="blog">
  <div id="imagenblog">
    <img src={foto3} className="d-block w-100" height={"585px"}/>
  </div>
  <div className="carousel-caption position-absolute top-50 start-50 translate-middle" style={{paddingBottom: "100px"}}>
    <h1 className="fw-bold">NUESTRO BLOG</h1>
    <p>Some representative placeholder content for the first slide.</p>
  </div>
</section>
<section id="blog2">
  <div className="container">
    <div className="row" style={{paddingTop: "100px"}}>
      <div className="col">
        <h1 className="text-center" style={{fontWeight: "bold", color: "green", fontSize: "80px", paddingBottom: "100px"}}>WE ARE SINCE 1999</h1>
      </div>
      <div className="row row-cols-4">
        <div className="col">
          <h3 className="fw-bold text-center">1999</h3>
          <p className="pt-5 text-center" style={{paddingBottom: "100px"}}>Lorem ipsum dolor exercitation
            sit amet, consectetur adipisicing elit, sed do eiusmod tempor adipisicing
            incididunt magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            adipisicing ullamco laboris nisi ut aliquip ex ea commodo consequat..</p>
        </div>
        <div className="col">
          <h3 className="fw-bold text-center">2002</h3>
          <p className="pt-5 text-center" style={{paddingBottom: "100px"}}>Lorem ipsum dolor exercitation
            sit amet, consectetur adipisicing elit, sed do eiusmod tempor adipisicing
            incididunt magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            adipisicing ullamco laboris nisi ut aliquip ex ea commodo consequat..</p>
        </div>
        <div className="col">
          <h3 className="fw-bold text-center">2011</h3>
          <p className="pt-5 text-center" style={{paddingBottom: "100px"}}>Lorem ipsum dolor exercitation
            sit amet, consectetur adipisicing elit, sed do eiusmod tempor adipisicing
            incididunt magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            adipisicing ullamco laboris nisi ut aliquip ex ea commodo consequat..</p>
        </div>
        <div className="col">
          <h3 className="fw-bold text-center">2018</h3>
          <p className="pt-5 text-center" style={{paddingBottom: "100px"}}>Lorem ipsum dolor exercitation
            sit amet, consectetur adipisicing elit, sed do eiusmod tempor adipisicing
            incididunt magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            adipisicing ullamco laboris nisi ut aliquip ex ea commodo consequat..</p>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="blog3">
  <div className="container">
    <div className="row" style={{paddingTop: "100px"}}>
      <div className="col">
        <h1 className="text-center" style={{fontWeight: "bold", color: "green", fontSize: "80px", paddingBottom: "100px"}}>OUR GROUP</h1>
      </div>
    </div>
    <div className="card-group">
      <div className="card">
        <img src={chef} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div className="card">
        <img src={chef}className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div className="card">
        <img src={chef} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
</section>
            </div>
        );
    }
}

export default Blog;