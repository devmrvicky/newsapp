import React, { Component } from 'react'
import spiner from '../spiner.gif'

export class Spiner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={spiner} alt="" />
      </div>
    )
  }
}

export default Spiner
