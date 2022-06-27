import React, { Component } from 'react';

import {
  Navbar, NavbarBrand, NavbarToggler, Collapse,
  Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu,
  DropdownItem, NavbarText
} from 'reactstrap';
import CartSummary from './CartSummary';

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
                  <NavLink href="/components/">
                    Components
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                    GitHub
                  </NavLink>
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
