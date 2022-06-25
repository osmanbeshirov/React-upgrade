import './App.css';
import CategoryList from './Components/CategoryList';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CategoryList/>
      <ProductList/>
    </div>
  );
}

export default App;
