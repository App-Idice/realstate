import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './Pages/RegisterForm';
import LoginForm from './Pages/LoginForm';
import AuthPage from './Pages/AuthPage';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home'
import Navbar from './components/Navbar';
import BuyerPage from "./Pages/BuyerPage"; 
import SellerPage from "./components/Seller/SellerPage";
import FlatListPage from "./components/Seller/FlatListPage";
import FlatPage from "./components/Buyer/FlatPage"; 
import FlatDetailsSinglePage from "./Pages/FlatDetailsSinglePage";   // ✅ import single flat detail page
import SellerDetailsPage from './components/Seller/SellerDetailsPage';
import TenantPage from "./components/Tenant/TenantPage";
import TenantFlatList from "./components/Tenant/TenantFlatList";
import TenantFlatDetails from "./components/Tenant/TenantFlatDetails";
import AddPropertyForm from './components/Seller/AddPropertyForm';



 

function App() {
  return (
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<RegisterForm />} /> */}
         <Route path="/auth" element={<AuthPage/>} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/buyer" element={<BuyerPage />} />
        <Route path="/seller"  element={<SellerPage />} />
        <Route path="/seller/flat" element={<FlatListPage />} />
        <Route path="/seller/:id" element={<SellerDetailsPage />} /> 
        <Route path="/flat/:id" element={<FlatDetailsSinglePage />} />
        <Route path="/flat/:id" element={<FlatPage />} />
         <Route path="/tenant" element={<TenantPage />} />
        <Route path="/tenant/flat" element={<TenantFlatList />} />
        <Route path="/tenant/flat/:id" element={<TenantFlatDetails />} />
           <Route path="/dashboard" element={<Dashboard/>} />
           <Route path="/seller/add" element={<AddPropertyForm />} />
        
      </Routes>
    </Router>
    
  );
}

export default App;
