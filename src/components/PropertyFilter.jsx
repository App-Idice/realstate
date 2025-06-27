import React, { useState } from "react";

const PropertyFilter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    residentialType: "",
    priceRange: 5500000,
  });

  const residentialOptions = ["Apartment", "Villa", "Land", "Floor", "Building"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="w-full bg-white p-4 rounded-xl shadow-md mb-6">
      <div className="flex flex-col md:flex-row items-center gap-6">

        {/* 🏠 Residential Type Dropdown */}
        <div className="w-full md:w-1/2">
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Residential Type
          </label>
          <select
            name="residentialType"
            value={filters.residentialType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Residential Type</option>
            {residentialOptions.map((type, idx) => (
              <option key={idx} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* 💰 Price Range Slider */}
        <div className="w-full md:w-1/2">
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Max Budget: ₹{parseInt(filters.priceRange).toLocaleString()}
          </label>
          <input
            type="range"
            name="priceRange"
            min="100000"
            max="10000000"
            step="50000"
            value={filters.priceRange}
            onChange={handleChange}
            className="w-full accent-blue-600"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>₹1 Lac</span>
            <span>₹1 Cr</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilter;
