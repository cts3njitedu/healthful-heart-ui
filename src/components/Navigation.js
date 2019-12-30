import React from 'react'
import { Navbar, NavItem, Nav } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <div>
      <div>
        <Navbar fluid={true} inverse collapseOnSelect>

          <Navbar.Brand>
            <NavLink to="/">Healthful Heart</NavLink>
          </Navbar.Brand>

          <Nav>
            <NavItem>
              <Link to="/" exact>Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/about" >About Page</Link>
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem>
              <Link to="/login" exact>Login</Link>
            </NavItem>
          </Nav>
        </Navbar>
      </div>

    </div>

  )

}


export default Navigation