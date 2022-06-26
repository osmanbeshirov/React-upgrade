import React, { Component } from 'react'

import { ListGroup, ListGroupItem } from 'reactstrap'

export default class CategoryList extends Component {

  state = {
    categories: [
      // { categroyId: 1, categoryName: 'Beverages' },
      // { categroyId: 2, categoryName: 'Condiments' },
      // { categroyId: 3, categoryName: 'Mocco' },
      // { categroyId: 4, categoryName: 'Champaine' },
      // { categroyId: 5, categoryName: 'Latte' },
    ],

  }

  getCategories = () => {
    fetch('http://localhost:3000/categories')
      .then(res => res.json())
      .then(data => this.setState({categories: data}))
  }

  componentDidMount(){
    this.getCategories();
  }


  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>

        <h3>{this.state.counter}</h3>
        <ListGroup numbered>
          {this.state.categories.map((item) => (
            <ListGroupItem active={item.categoryName === this.props.current?true:false}
            key={item.id} 
            onClick={() => this.props.changeCategory(item)} >
              {item.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        {/* <h4>{this.props.current}</h4> */}

      </div>
    )
  }
}
