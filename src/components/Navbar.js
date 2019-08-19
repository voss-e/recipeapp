import React from 'react'
import { NavLink } from 'react-router-dom'

const navStyle = {
}

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ml-3" style={navStyle}>
      <NavLink className="navbar-brand" to="/">Recipe App</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home<span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/">All Recipes</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/newrecipe">New Recipe</NavLink>
      </li>
    </ul>
  </div>
</nav>

  )
}

export default Navbar
