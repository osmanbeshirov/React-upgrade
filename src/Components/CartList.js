import React, { Component } from 'react';

import { Table } from 'reactstrap'

export default class CartList extends Component {
    renderCart() {
        return (

            <Table hover responsive size="">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Category ID</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Unit In Stock</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>

                    {this.props.cart.map(item => (
                        <tr key={item.product.id}>
                            <th>{item.product.id}</th>
                            <td>{item.product.categoryId}</td>
                            <td>{item.product.productName}</td>
                            <td>{item.product.unitPrice} $</td>
                            <td>{item.product.unitsInStock}</td>
                            <td>{item.quantity}</td>
                        </tr>
                    ))}
                </tbody>

            </Table>
        )
    }

    render() {
        return (
            <div>
                {this.props.cart.length === 0 ? <h1 style={{ textAlign: 'center', marginTop: '50px' }}>You don't add any product to basket...</h1> : this.renderCart()}
            </div>
        )
    }
}
