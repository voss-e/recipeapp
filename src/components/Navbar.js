import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

const navStyle = {
}

class Navbar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      menu: false
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    this.setState({ menu: !this.state.menu })
  }



  render() {

    const show = (this.state.menu) ? "show" : ""

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light ml-3" style={navStyle}>
        <NavLink className="navbar-brand" to="/">Recipe App</NavLink>

        <button className="navbar-toggler" onClick={ this.toggleMenu } type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={"collapse navbar-collapse " + show } id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
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
}

export default Navbar
