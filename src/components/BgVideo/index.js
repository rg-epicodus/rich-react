import React, {Component} from 'react';
import sample from '../BgVideo/Vacay_Mode.mp4';
import "./styles.css";

class BgVideo extends Component {
    render () {
      return (
        <video id="background-video" loop autoPlay>
          <source src={sample} type="video/mp4" />
          <source src={sample} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      )
    }
};

export default BgVideo;