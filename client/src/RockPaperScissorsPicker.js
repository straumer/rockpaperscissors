import React, { Component } from "react";
import rock from './img/rock.svg';
import paper from './img/paper.svg';
import scissors from './img/scissors.svg';

class RockPaperScissorsPicker extends Component {
  render() {
    return (
      <img src={paper}/>
    )
  }
}

export default RockPaperScissorsPicker;
