import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import {

    UncontrolledDropdown, DropdownToggle, DropdownMenu,
    DropdownItem, Badge, NavItem, NavLink, Button
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

                                <Badge onClick={() => this.props.remove(product)} style={{ marginLeft: '15px'}} color="danger">Remove</Badge>
                            </DropdownItem>
                        ))
                    }

                    <DropdownItem divider />

                    <DropdownItem>
                        <Link to ='cart'>Go to Basket</Link>
                    </DropdownItem>

                    <DropdownItem onClick={() => this.props.reset()}>
                        Reset
                    </DropdownItem>


                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }

    render() {
        return (
            <div>
                {this.props.cart.length > 0 ? this.renderSummary() : <NavItem> <NavLink>Basket is empty</NavLink></NavItem>}
            </div>
        )
    }
}
