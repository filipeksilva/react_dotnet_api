import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header className="navbar navbar-expand-md navbar-dark bd-navbar bg-dark ">
        <link href="https://getbootstrap.com/docs/5.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
        <link href="https://getbootstrap.com/docs/5.1/assets/css/docs.css" rel="stylesheet"></link>
        <nav className="container-xxl flex-wrap flex-md-nowrap" aria-label="Main navigation">          
          <Link className="navbar-brand p-0 me-2" exact to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="currentColor" className="bi bi-x-diamond-fill" viewBox="0 0 16 16">
              <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L4.047 3.339 8 7.293l3.954-3.954L9.049.435zm3.61 3.611L8.708 8l3.954 3.954 2.904-2.905c.58-.58.58-1.519 0-2.098l-2.904-2.905zm-.706 8.614L8 8.708l-3.954 3.954 2.905 2.904c.58.58 1.519.58 2.098 0l2.905-2.904zm-8.614-.706L7.292 8 3.339 4.046.435 6.951c-.58.58-.58 1.519 0 2.098l2.904 2.905z" />
            </svg>
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="bi" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
            </svg>
          </button>

          <div className="collapse navbar-collapse" id="bdNavbar">
            <ul className="navbar-nav flex-row flex-wrap bd-navbar-nav pt-2 py-md-0">
              <li className="nav-item col-6 col-md-auto">
                <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
              </li>
              <li className="nav-item col-6 col-md-auto">
                <NavLink className="nav-link" activeClassName="active" exact to="/clientes">Clientes</NavLink>
              </li>
              <li className="nav-item col-6 col-md-auto">
                <NavLink className="nav-link" activeClassName="active" exact to="/produtos">Produtos</NavLink>
              </li>
            </ul>

            <hr className="d-md-none text-white-50" />
          </div>
        </nav>
      </header>
    )
  }
}

export default Header;
