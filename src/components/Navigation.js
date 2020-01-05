import React from 'react'
import { Navbar, NavItem, Nav } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import "../styles/header.css"
function Navigation() {
  return (
    <div>
      <div>
        <Navbar fluid={true} inverse collapseOnSelect>

          <Navbar.Brand>
            <NavLink to="/">Healthful Heart</NavLink>
          </Navbar.Brand>

          <Nav>
            <NavItem componentClass='span'>
              <Link to="/" >Home</Link>
            </NavItem>
            <NavItem componentClass='span'>
              <Link to="/about" >About Page</Link>
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem componentClass='span'>
              <Link to="/login">Login</Link>
            </NavItem>
          </Nav>
        </Navbar>
      </div>

    </div>

  )

}


export default Navigation