import React, { Component } from 'react'
import {BeatLoader} from 'react-spinners'

export default class Loading extends Component {
  render() {
    return (
      <div className='loading'>
        <BeatLoader color="hsla(227, 100%, 70%, 1)" />
      </div>
    )
  }
}
