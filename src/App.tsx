import './App.css';
import {FilterComp} from'./categoriesPage/FilterComp';
import {Header} from './categoriesPage/Header';
import {ProductCards} from './categoriesPage/ProductCardsCopm';
import  GlobalStyles from './GlobalStyles';
import PriceRangeSelector from './categoriesPage/PriceRangeSelector';



function App() {
  const handlePriceRangeChange = (value: number | number[]) => {

    console.log('Price range changed:', value);
  }
  return (
    <div className="App">
      <GlobalStyles/>
      <Header/>
    <div className='flex'>
    <div className='column'>
      <FilterComp/>
      <br></br>
      <PriceRangeSelector onChange={handlePriceRangeChange} />
    </div>
      <ProductCards/>
    </div>
      {/* <SecHeader/>
      <DescProduct/> */}
    </div>
  );
}

export default App;