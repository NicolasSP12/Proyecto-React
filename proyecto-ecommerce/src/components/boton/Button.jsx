import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Button extends Component {
  render() {
    return (
      <Link to = '/'>
      <button type="button" class="btn btn-info">Ver más</button>
      </Link>
        
    )
  }
}