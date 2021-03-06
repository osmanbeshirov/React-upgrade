import React, { Component } from 'react';

import { Table, Button } from 'reactstrap'


export default class ProductList extends Component {

  


  render() {
    return (
      <div>
        <div className='head' style={{ display: 'flex' }}>
          <h3>{this.props.info.title}</h3>

          {this.props.isActive ? <h3 style={{ color: 'green', fontStyle: 'italic' }}> ---  {this.props.current}</h3> : null}
        </div>


        <Table
          hover
          responsive
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Quantity number</th>
              <th>Price</th>
              <th>Stock number</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.products.map((product) => (
                <tr key={product.id}>
                  <th scope="row">
                    {product.id}
                  </th>
                  <td>
                    {product.productName}
                  </td>
                  <td>
                    {product.quantityPerUnit}
                  </td>
                  <td>
                    {product.unitPrice}
                  </td>
                  <td>
                    {product.unitsInStock}
                  </td>
                  <td> <Button onClick={() =>  this.props.basket(product)}
                    color="primary"
                  >
                    Add to Basket
                  </Button></td>
                 
                </tr>

              ))
            }


          </tbody>
        </Table>
      </div>
    )
  }
}
