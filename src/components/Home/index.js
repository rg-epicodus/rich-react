import React, { Component } from "react";
import "./styles.css";
import BgVideo from "../BgVideo";

class Home extends Component {
  render() {
    return (
      <div>
      <BgVideo />
    <section className="main">
        <div class="rl-banner">
          <div class="container">
            <div class="ban ">
                <div class="hello ">HELLO</div>
                <div class="triangle"></div>
            </div>
              <h1 class="wow fadeInLeft" data-wow-duration="2s"> I'm <strong>Richard</strong></h1>
              <h2 class="wow fadeInRight" data-wow-duration="2s" >Junior Software Developer</h2>
              <div class="middle-btn"> <a href="/" class="btn btn-default wow fadeInUp" data-wow-duration="2s" >Hire Me Now</a> </div>
          </div>
        </div>      
      </section>
      </div>
    );
  }
}
export default Home;