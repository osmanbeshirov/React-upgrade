import { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import CategoryList from './Components/CategoryList';
import Navi from './Components/Navi';
import ProductList from './Components/ProductList';

import alertify from 'alertifyjs';

export default class App extends Component {

  state = {
    currentCategory: '',
    products: [],
    isActive: false,
    choosenProduct: []

  }

  handleClick = (item) => {
    this.setState({ currentCategory: item.categoryName });
    this.setState({ isActive: true })

    this.getProducts(item.id)
  }

  addToBasket = (productArr) => {
    let choosenArr = this.state.choosenProduct;

    let addedItem = choosenArr.find(item => item.product.id === productArr.id);

    if (addedItem) {
      addedItem.quantity += 1;
    }

    else {
      choosenArr.push({ product: productArr, quantity: 1 });
    }
    this.setState({ choosenProduct: choosenArr });



    alertify.set('notifier', 'position', 'top-right');

    alertify.notify(productArr.productName + '-' + 'Added to Basket');


  }

  removeFromCart = (product) => {
    let newCart = this.state.choosenProduct.filter(item => item.product.id !== product.product.id);

    this.setState({ choosenProduct: newCart }, () => {
      console.log(this.state.choosenProduct);
    });


  }

  resetToBasket = () => {
    this.setState({ choosenProduct: [] })
  }


  getProducts = (categoryId) => {

    let url = 'http://localhost:3000/products';

    if (categoryId) {
      url += '?categoryId=' + categoryId
    }
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ products: data }))
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {

    let categoryInfo = { title: "Category List", otherThing: "Another List" };
    let productInfo = { title: "Product List" };

    return (
      <div className="App">

        <Container>

          <Navi choosen={this.state.choosenProduct} remove={this.removeFromCart} reset={this.resetToBasket} />

          <Row>
            <Col xs='3'>
              <CategoryList info={categoryInfo} current={this.state.currentCategory} changeCategory={this.handleClick}
              />
            </Col>

            <Col xs='9'>
              <ProductList info={productInfo} products={this.state.products} current={this.state.currentCategory}
                isActive={this.state.isActive} basket={this.addToBasket}
              />
            </Col>

          </Row>

        </Container>
      </div>
    );
  }
}


