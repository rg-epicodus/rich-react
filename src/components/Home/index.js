import React, { Component } from "react";
import "./styles.css";
import BgVideo from "../BgVideo";

class Home extends Component {
  render() {
    return (
      <main >
      <BgVideo />
        <section className="main">
          <div className="rl-banner">
            <div className="container">
              <div className="ban ">
                  <div className="hello ">HELLO</div>
                  <div className="triangle"></div>
              </div>
                <h1 className="wow fadeInLeft" data-wow-duration="2s"> I'm <strong>Richard</strong></h1>
                <h2 className="wow fadeInRight" data-wow-duration="2s" >Junior Software Developer</h2>
                <div className="middle-btn"> <a href="/" className="btn btn-default wow fadeInUp" data-wow-duration="2s" >Hire Me Now</a> </div>
            </div>
          </div>      
        </section>
        <section className="section parallax rl-about">
          <div>
            <p>test</p>
          </div>
        </section>
        <section className="section parallax rl-skills">
          <div>
            <p>test</p>
          </div>
        </section>
        <section className="section parallax rl-portfolio">
          <div>
            <p>test</p>
          </div>
        </section>
        <section className="section parallax rl-experience">
          <div>
            <p>test</p>
          </div>
        </section>
        <section className="section parallax rl-clients">
          <div>
            <p>test</p>
          </div>
        </section>
        <section className="section parallax rl-contact">
          <div>
            <p>test</p>
          </div>
        </section>
        
      </main>
    );
  }
}
export default Home;