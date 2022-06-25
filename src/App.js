import { Container, Row, Col } from 'reactstrap';
import './App.css';
import CategoryList from './Components/CategoryList';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';



function App() {

  let categoryInfo = {title:"Category List", otherThing: "Another List" } ;
  let productInfo = {title: "Product List"}; 


  return (
    <div className="App">

      <Container>
        <Row>
          <Navbar />
        </Row>

        <Row>
          <Col xs='3'>
            <CategoryList info = {categoryInfo}/>
          </Col>

          <Col xs='9'>
            <ProductList info = {productInfo} />
          </Col>




        </Row>

      </Container>


    </div>
  );
}

export default App;
