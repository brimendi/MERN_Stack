import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Dashboard from './views/Dashboard';
import CreateProduct from './views/CreateProduct'
import ProductDetails from './views/ProductDetails';
import EditProduct from './views/EditProduct';

function App() {
  return (
    <div className="container mt-5">
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path = '/' element={<CreateProduct/>}/>
        <Route path = '/product/:id' element={<ProductDetails/>}/>
        <Route path = '/product/edit/:id' element={<EditProduct/>}/>

      </Routes>
    </div>
  );
}

export default App;
