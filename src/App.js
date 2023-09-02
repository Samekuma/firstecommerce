import React from 'react';

// Import React Router DOM
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

// Import Page
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

// Import Components

import SideBar from './components/Sidebar';
import Header from './components/Header';
import Footter from './components/Footer';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
// import Hero from './components/Hero';

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/product/:id"
            element={<ProductDetails />}
          />
        </Routes>
        <Sidebar/>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
