import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProductsPage from './components/AllProductsPage';
import ProductDetailsPage from './components/ProductDetailsPage';
import ProductsComponent from './components/ProductsComponent';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/products" component={AllProductsPage} />
          <Route path="/product/:productId" component={ProductDetailsPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;