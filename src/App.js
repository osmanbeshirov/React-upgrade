import { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import CategoryList from './Components/CategoryList';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';

export default class App extends Component {

  state = {
    currentCategory: '',
    products: []

  }

  handleClick = (item) => {
    this.setState({ currentCategory: item.categoryName })
  }


  getProducts = () => {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(data => this.setState({ products: data }))
  }

  componentDidMount(){
    this.getProducts();
  }

  render() {

    let categoryInfo = { title: "Category List", otherThing: "Another List" };
    let productInfo = { title: "Product List" };

    return (
      <div className="App">

        <Container>
          <Row>
            <Navbar />
          </Row>

          <Row>
            <Col xs='3'>
              <CategoryList info={categoryInfo} current={this.state.currentCategory} changeCategory={this.handleClick} />
            </Col>

            <Col xs='9'>
              <ProductList info={productInfo} products={this.state.products} current={this.state.currentCategory} />
            </Col>

          </Row>

        </Container>
      </div>
    );
  }
}


