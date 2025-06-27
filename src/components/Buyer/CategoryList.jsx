import React, { useState } from 'react';

const categories = ['Flat', 'Apartment', 'Farm House', 'Plot/Land'];

const BuyerCategoryList = ({ onSelect }) => {
  const [filters, setFilters] = useState({
    residentialType: '',
    priceRange: 5000000,
  });

  const residentialOptions = ['Apartment', 'Villa', 'Land', 'Floor', 'Building'];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...filters, [name]: value };
    setFilters(updated);
    console.log('Filters:', updated);
  };

  return (
    <div style={{ padding: '1rem' }}>
      {/* 🔍 Filter Section (residential left, price range right) */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '1.5rem',
          marginTop: '1rem',
        }}
      >
        {/* 🏡 Residential Type Dropdown (Left) */}
        <div style={{ flex: 1, minWidth: '200px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Residential Type
          </label>
          <select
            name="residentialType"
            value={filters.residentialType}
            onChange={handleFilterChange}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          >
            <option value="">Select Residential Type</option>
            {residentialOptions.map((type, idx) => (
              <option key={idx} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* 💰 Price Range Slider (Right) */}
        <div style={{ flex: 1, minWidth: '250px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Max Price: ₹{parseInt(filters.priceRange).toLocaleString()}
          </label>
          <input
            type="range"
            name="priceRange"
            min="100000"
            max="10000000"
            step="50000"
            value={filters.priceRange}
            onChange={handleFilterChange}
            style={{ width: "100%", maxWidth: "250px" }}
          />
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#555", maxWidth: "250px" }}>
            <span>₹1 Lac</span>
            <span>₹1 Cr</span>
          </div>
        </div>
      </div>

      {/* 🏠 Category Buttons Below Filter */}
     <div
  style={{
    display: 'flex',
    width: '100%',
    marginTop: '20px',
  }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            style={{
             width: '25%',
        padding: '14px 0',
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
        border: '1px solid #ddd',
        borderRadius: '6px',
        cursor: 'pointer',
        fontWeight: '500',
        fontSize: '16px',
            }}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BuyerCategoryList;
