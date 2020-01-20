import React from 'react'
import { Navbar, NavItem, Nav } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import "../styles/header.css"
import { connect } from 'react-redux'
function Navigation(props) {
  const { isAccessTokenEnabled } = props
  console.log("Navigation", isAccessTokenEnabled)
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
          {!isAccessTokenEnabled ? <Nav pullRight>
            <NavItem componentClass='span'>
              <Link to="/login">Login</Link>
            </NavItem>
            <NavItem componentClass='span'>
              <Link to="/signup">Signup</Link>
            </NavItem>
          </Nav> : <Nav pullRight>
              <NavItem componentClass='span'>
                <Link to="/logout">Logout</Link>
              </NavItem>
            </Nav>}
        </Navbar>
      </div>

    </div>

  )

}

function mapStateToProps(state) {
  return {

    isAccessTokenEnabled: state.user.isAccessTokenEnabled
  }

}
export default connect(mapStateToProps, null)(Navigation);