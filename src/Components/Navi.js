import React, { Component } from 'react';

import {
  Navbar, NavbarBrand, NavbarToggler, Collapse,
  Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu,
  DropdownItem, NavbarText
} from 'reactstrap';

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
            <Collapse navbar style={{ marginLeft: '55%' }}>
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
                <UncontrolledDropdown
                  inNavbar
                  nav
                >
                  <DropdownToggle
                    caret
                    nav
                  >
                    Basket - {this.props.choosen.length}
                  </DropdownToggle>
                  <DropdownMenu end>

                    {
                      this.props.choosen.map((productArr) => (
                        <DropdownItem key={productArr.product.id}>
                          {productArr.product.productName} - {productArr.quantity}
                        </DropdownItem>
                      ))

                    }




                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>

            </Collapse>
          </Navbar>
        </div>
      </div>
    )
  }
}
