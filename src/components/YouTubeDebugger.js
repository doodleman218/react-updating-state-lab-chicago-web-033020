// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export class YouTubeDebugger extends Component {
  
  constructor(){
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }
  
  bitClick = () =>{
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }
  
  resClick = () => {
    this.setState({
      settings:{
        ...this.state.settings,
        video:{
          ...this.state.video,
          resolution: '720p'

        }
      }
    })
  }
  
  
  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.bitClick}></button>
        <button className='resolution' onClick={this.resClick}></button>
      </div>
    )
  }
}

export default YouTubeDebugger
