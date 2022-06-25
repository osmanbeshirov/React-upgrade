import React, { Component } from 'react'

import { ListGroup, ListGroupItem } from 'reactstrap'

export default class CategoryList extends Component {

  state = {
    categories: [
      { categroyId: 1, categoryName: 'Beverages' },
      { categroyId: 2, categoryName: 'Condiments' },
      { categroyId: 3, categoryName: 'Beverages' },
      { categroyId: 4, categoryName: 'Beverages' },
      { categroyId: 5, categoryName: 'Beverages' },
    ],

  }


  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>

        <h3>{this.state.counter}</h3>
        <ListGroup numbered>
          {this.state.categories.map((item) => (
            <ListGroupItem key={item.categroyId}>
              {item.categoryName}
            </ListGroupItem>
          ))}

        </ListGroup>


      </div>
    )
  }
}
