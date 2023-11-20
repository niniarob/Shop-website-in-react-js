import './App.css';
import { Header } from './categoriesPage/Header';
import GlobalStyles from './GlobalStyles';
import { ProductDetails } from './singleProductPage/ProductDetails';
import {Product} from './Product';

const App= () => {
   return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Product/>
      <ProductDetails/>
    </div>
  );
};

export default App;






