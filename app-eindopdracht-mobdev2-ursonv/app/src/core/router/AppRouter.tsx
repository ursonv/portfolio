import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Header from '../../components/design/Header/Header';
import Register from '../../pages/Authentication/Register';
import Login from '../../pages/Authentication/Login';
import { UserProvider, useUserContext } from '../../components/auth/userProvider';
import ProductDetail from '../../pages/ProductCard/ProductDetail/ProductDetail';
import Products from '../../pages/Products/Products';
import Dashboard from '../../pages/Dashboard/Dashboard';
import EditProduct from '../../pages/Dashboard/EditProduct/EditProduct';
import AddProduct from '../../pages/Dashboard/AddProduct/AddProduct';
import Favorites from '../../pages/Favorites/Favorites';
import Shoppingcart from '../../pages/Shoppingcart/Shoppingcart';
import Contact from '../../pages/Contact/Contact';
import Footer from '../../components/design/Footer/Footer';
import Profile from '../../pages/Profile/Profile';

const AppRouter: React.FC = () => {
  return (
    <Router>
        <UserProvider>
            <Layout />
        </UserProvider>
    </Router>
  );
};

const Layout: React.FC = () => {
    const { user } = useUserContext();

    // Haal de huidige locatie op
    const location = useLocation();
  
    // Bepaal of de header/footer moet worden weergegeven op basis van de huidige locatie
    const showHeaderFooter = location.pathname !== '/register' && location.pathname !== '/login';

  return (
    <>
      {showHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/shoppingcart" element={<Shoppingcart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        {/* Voeg de navigatie naar het dashboard toe als de gebruiker een verkoper is */}
        {user && user.role === 'seller' && <Route path="/dashboard" element={<Dashboard />} />}
        {user && user.role === 'seller' && <Route path="/product/create" element={<AddProduct />} />}
        {user && user.role === 'seller' && <Route path="/product/edit/:id" element={<EditProduct />} />}
      </Routes>
      {showHeaderFooter && <Footer />}
    </>
  );
};

export default AppRouter;
