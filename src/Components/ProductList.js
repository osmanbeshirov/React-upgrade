import React, { Component } from 'react';

import { Table } from 'reactstrap'

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.info.title} --- {this.props.current}</h3>

        <Table
          hover
          responsive
        >
          <thead>
            <tr>
              <th>
                ID
              </th>
              <th>
                Product Name
              </th>
              <th>
                Quantity number
              </th>
              <th>
                Price
              </th>
              <th>
                Stock number
              </th>
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
                </tr>
              ))
            }


          </tbody>
        </Table>
      </div>
    )
  }
}
