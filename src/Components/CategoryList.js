import React, { Component } from 'react'

import { ListGroup, ListGroupItem } from 'reactstrap'

export default class CategoryList extends Component {

  state = {
    categories: [
      { categroyId: 1, categoryName: 'Beverages' },
      { categroyId: 2, categoryName: 'Condiments' },
      { categroyId: 3, categoryName: 'Mocco' },
      { categroyId: 4, categoryName: 'Champaine' },
      { categroyId: 5, categoryName: 'Latte' },
    ],

  }


  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>

        <h3>{this.state.counter}</h3>
        <ListGroup numbered>
          {this.state.categories.map((item) => (
            <ListGroupItem key={item.categroyId} onClick={() => this.props.changeCategory(item)} >
              {item.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h4>{this.props.current}</h4>


      </div>
    )
  }
}
