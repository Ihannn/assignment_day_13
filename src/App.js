import logo from './logo.svg';
import './App.css';
import PublicLayout from './layouts/PublicLayout.jsx'
import Products from './pages/Products.jsx'
import Categories from './pages/Categories.jsx'
import Settings from './pages/Settings.jsx'
import {Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <PublicLayout>
          <Routes>
              <Route path='/' element={<Products />} />
              <Route path="products" element={<Products />} />
              <Route path="categories" element={<Categories />} />
              <Route path="settings" element={<Settings />} />
          </Routes>
      </PublicLayout>  
    </div>
  );
}

export default App;
