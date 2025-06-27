import React, { useState } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import flat1 from "../assets/flat1.webp";
import flat2 from "../assets/flat2.jpg";
import flat3 from "../assets/flat3.jpg";
import flat4 from "../assets/flat4.jpg";
import flat5 from "../assets/flat5.jpg";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

const Dashboard = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleAddProperty = () => {
    navigate("/seller/add");
  };


  const propertyList = [
    { img: flat1, type: "Apartment", price: "₹55 Lakhs", city: "Noida" },
    { img: flat2, type: "Flat", price: "₹65 Lakhs", city: "Delhi" },
    { img: flat3, type: "Villa", price: "₹1.2 Crore", city: "Ghaziabad" },
    { img: flat4, type: "Studio", price: "₹35 Lakhs", city: "Faridabad" },
    { img: flat5, type: "Farm House", price: "₹2 Crore", city: "Gurugram" },
  ];

  return (
    <div className="dashboard">
      {/* 🔹 Sidebar Left */}
      <div className="sidebar">
        <h3>Dashboard</h3>
        <ul>
          <li className="active">My Properties</li>
          <li>My Invoices</li>
        </ul>
      </div>

      {/* 🔹 Main Content */}
      <div className="main-content">
        {/* 🔸 Top Right Dropdown */}
        <div className="top-right">
          <div
            className="profile-icon"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            👤
            {showDropdown && (
              <div className="dropdown">
                <p>My Profile</p>
                <p>Logout</p>
              </div>
            )}
          </div>
        </div>

        {/* 🔹 Property Header with Add Button */}
        <div className="property-header">
          <h2>My Properties</h2>
          <div className="add-btn-container">
            <button className="add-btn" onClick={handleAddProperty}>
              + Add Property
            </button>
          </div>
        </div>

        {/* 🔹 Property Card */}
         <div className="property-list">
          {propertyList.map((property, index) => (
            <div className="property-card" key={index}>
              <img src={property.img} alt="Flat" className="property-img" />
              <div className="property-info">
                <h3>{property.type}</h3>
                <p><strong>Price:</strong> {property.price}</p>
                <p><strong>City:</strong> {property.city}</p>
                <div className="property-actions">
                  <FaEye
                    className="action-icon"
                    title="View"
                    onClick={() => navigate("/property-details")}
                  />
                  <FaEdit className="action-icon" title="Edit" />
                  <FaTrash className="action-icon" title="Delete" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;