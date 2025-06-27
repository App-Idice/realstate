import React, { useState } from 'react';
import BuyerCategoryList from '../components/Buyer/CategoryList';
import FlatDetails from '../components/Buyer/FlatDetails';
import FlatPage from '../components/Buyer/FlatPage';



const BuyerPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div style={{ padding: '30px' }}>
      <h2>Select Property Type</h2>
      <BuyerCategoryList onSelect={setSelectedCategory} />

      {selectedCategory === 'Flat' && <FlatDetails />}
      {/* Add logic for other types later */}
      <FlatPage/>  
     
    </div>
    
  );
};

export default BuyerPage;
