import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Button extends Component {
  render() {
    return (
        <button
            className='btn btn-primary'>
            <Link to={this.props.id}>Ver mas</Link>
        </button>
    )
  }
}