import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Nav.css'

const Nav = () => (
  <nav className="navbar navbar-expand-sm bg-info mb-3">
    <div className="container">
      <h1 className="h3">
        <Link className="nav-link text-light" to='/pokemons'>Pokedex</Link>
      </h1>
      <ul className="navbar-nav">
        <li className='nav-item pokemon-link'>
          <NavLink to='/pokemons' exact={true} className="nav-link text-light lead" activeClassName="is-active">Home</NavLink>
        </li>
        <li className='nav-item pokemon-link'>
          <NavLink to='/caught-pokemons' className="nav-link text-light lead" activeClassName="is-active">Caught Pokemons</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
