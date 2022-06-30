import React, { Component } from 'react';

import {
  Navbar, NavbarBrand, NavbarToggler, Collapse,
  Nav, NavItem, NavLink, 
} from 'reactstrap';
import CartSummary from './CartSummary';

import {Link} from 'react-router-dom'

export default class Navi extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar
            color="light"
            expand="md"
            light
          >
            <NavbarBrand href="/">
              FavourApp
            </NavbarBrand>
            <NavbarToggler onClick={function noRefCheck() { }} />
            <Collapse navbar style={{ marginLeft: '45%' }}>
              <Nav
                className="me-auto"
                navbar
              >
                <NavItem>
                  <NavLink>
                    <Link style={{textDecoration: 'none', color: '#000'}} to='/'>Main</Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                   <Link style={{textDecoration: 'none', color: '#000'}} to='form'>Form</Link> 
                  </NavLink>
                  {/* <NavLink>
                   <Link style={{textDecoration: 'none', color: '#000'}} to='form'>Form demo</Link> 
                  </NavLink> */}
                </NavItem>
                <CartSummary cart = {this.props.choosen} remove = {this.props.remove} reset = {this.props.reset}/>
              </Nav>

            </Collapse>
          </Navbar>
        </div>
      </div>
    )
  }
}
