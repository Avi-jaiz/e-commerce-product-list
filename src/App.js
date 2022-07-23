import Header from "./Components/Header";
import {BrowserRouter , Routes,Route} from 'react-router-dom'
import ProductListing from "./Components/ProductListing";
import ProductDetail from './Components/ProductDetail';
import './App.css';

function App() {
  return (
    <div className="App">
    <Header />  

    <BrowserRouter>
    <Routes>
      <Route path='/'  element={< ProductListing/>} />

      <Route path='/product/:productId'  element={<ProductDetail/>} />

     

      
    </Routes>
    
    
    </BrowserRouter>
    
     
    </div>
  );
}

export default App;
