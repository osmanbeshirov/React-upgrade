import { Container, Row, Col } from 'reactstrap';
import './App.css';
import CategoryList from './Components/CategoryList';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';



function App() {

  let titleCategory = 'Category List';
  let titleProduct = 'Product List';


  return (
    <div className="App">

      <Container>
        <Row>
          <Navbar />
        </Row>

        <Row>
          <Col xs='3'>
            <CategoryList title = {titleCategory}/>
          </Col>

          <Col xs='9'>
            <ProductList title = {titleProduct} />
          </Col>




        </Row>

      </Container>


    </div>
  );
}

export default App;
