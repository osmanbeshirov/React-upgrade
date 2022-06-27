import React, { Component } from 'react';

import {

    UncontrolledDropdown, DropdownToggle, DropdownMenu,
    DropdownItem, Badge, NavItem, NavLink
} from 'reactstrap';

export default class CartSummary extends Component {

    renderSummary = () => {
        return (
            <UncontrolledDropdown
                inNavbar
                nav
            >
                <DropdownToggle
                    caret
                    nav
                >
                    Basket - {this.props.cart.length}
                </DropdownToggle>
                <DropdownMenu end>

                    {
                        this.props.cart.map((product) => (
                            <DropdownItem key={product.product.id}>
                                {product.product.productName} -

                                <Badge color="success" style={{ marginLeft: '10px' }} pill > {product.quantity}</Badge>


                            </DropdownItem>
                        ))

                    }

                    <DropdownItem divider />
                    <DropdownItem>
                        Reset
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }

    render() {
        return (
            <div>
              {this.props.cart.length>0?this.renderSummary(): <NavItem> <NavLink>Basket is empty</NavLink></NavItem>}
            </div>
        )
    }
}
