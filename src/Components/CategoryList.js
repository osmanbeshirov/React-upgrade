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

    currentCategory: ''

  }

  handleClick = (item) => {

    this.setState({currentCategory:  item.categoryName})

    // const checker = document.querySelector('#categoryCheck');

    // checker.textContent = '';

    // checker.append(e.target.textContent)

  }


  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>

        <h3>{this.state.counter}</h3>
        <ListGroup numbered>
          {this.state.categories.map((item) => (
            <ListGroupItem key={item.categroyId} onClick={() => this.handleClick(item)} >
              {item.categoryName}
            </ListGroupItem>
          ))}

          <h4 id='categoryCheck'>{this.state.currentCategory}</h4>

        </ListGroup>


      </div>
    )
  }
}
