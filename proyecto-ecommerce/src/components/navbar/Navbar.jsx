import React from 'react'
import { Link } from 'react-router-dom'


export default function navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <Link to='/'>
      <img src='https://st2.depositphotos.com/37114524/44075/v/950/depositphotos_440753212-stock-illustration-bag-shop-online-logo-design.jpg?forcejpeg=true' width="80" height="50"/>
      </Link>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
           <Link to='/'>Home</Link> 
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> 
      </ul>
      <button type="button" class="btn btn-info">Login</button>
      
    </div>
  </div>
</nav>
  )
}
