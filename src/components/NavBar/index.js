import React, { Component } from "react";
import "./styles.css";

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-default navbar-fixed-top navbar-inner">
        <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar1"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar1">
              <ul class="nav navbar-nav navbar-center">
                <li><a href="#s1">ABOUT</a></li>
                <li><a href="#s2">SKILLS</a></li>
                <li><a href="#s3">PORTFOLIO</a></li>
                <li><a href="#s4">EXPERIENCE</a></li>
                <li><a href="#s5">CLIENTS</a></li>
                <li><a href="#s6">CONTACT</a></li>
              </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;