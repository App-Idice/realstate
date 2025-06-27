import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import flat1 from "../../assets/flat1.webp";
import flat2 from "../../assets/flat2.jpg";
import flat3 from "../../assets/flat3.jpg";
import flat4 from "../../assets/flat4.jpg";
import flat5 from "../../assets/flat5.jpg";

const FlatDetails = () => {
  const navigate = useNavigate();
  const [viewedFlats, setViewedFlats] = useState([]);
 
  const [blockedFlatId, setBlockedFlatId] = useState(null);

  const flatList = [
    {
      id: 1,
      image: flat1,
      bhk: "2 BHK",
      type: "Residential",
      size: "950 sq.ft",
      budget: "₹45 Lakhs",
      facing:"south-east",
      address: "Sector 12, Noida",
      sellerName: "Rohit Verma",
      sellerContact: "9876543210",
    },
    {
      id: 2,
      image: flat2,
      bhk: "3 BHK",
      type: "Residential",
      size: "1200 sq.ft",
      budget: "₹60 Lakhs",
       facing:"south-west",
      address: "Sector 137, Noida",
      sellerName: "Anita Sharma",
      sellerContact: "9876500000",
    },
    {
      id: 3,
      image: flat3,
      bhk: "1 BHK",
      type: "Studio",
      size: "600 sq.ft",
      budget: "₹30 Lakhs",
       facing:"North-east",
      address: "Indirapuram, Ghaziabad",
      sellerName: "Rajeev Mehta",
      sellerContact: "9876512345",
    },
    {
      id: 4,
      image: flat4,
      bhk: "2 BHK",
      type: "Apartment",
      size: "1050 sq.ft",
      budget: "₹52 Lakhs",
       facing:"north-west",
      address: "Vaishali, Ghaziabad",
      sellerName: "Manoj Gupta",
      sellerContact: "9998887770",
    },
    {
      id: 5,
      image: flat5,
      bhk: "3 BHK",
      type: "Luxury",
      size: "1500 sq.ft",
      budget: "₹75 Lakhs",
       facing:"west",
      address: "Golf Course Road, Gurugram",
      sellerName: "Sunita Jain",
      sellerContact: "9887766554",
    },
  ];

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("viewedFlats")) || [];
    setViewedFlats(stored);
  }, []);

  const handleViewMore = (flatId) => {
    const viewed = JSON.parse(localStorage.getItem("viewedFlats")) || [];
    const isAlreadyViewed = viewed.includes(flatId);

    if (!isAlreadyViewed) {
      if (viewed.length >= 2) {
        setBlockedFlatId(flatId);
        return;
      }
      const updated = [...viewed, flatId];
      localStorage.setItem("viewedFlats", JSON.stringify(updated));
      setViewedFlats(updated);
    }

    setBlockedFlatId(null);
    navigate(`/flat/${flatId}`);
  };

  const isViewed = (id) => viewedFlats.includes(id);
  const canView = (id) => true;

   


  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Available Flats</h1>

      {flatList.map((flat) => {
        const allowView = canView(flat.id);

        return (
          <div
            key={flat.id}
            style={{
              display: "flex",
              marginTop: "30px",
              borderBottom: "1px solid #ccc",
              paddingBottom: "20px",
            }}
          >
            <img
              src={flat.image}
              alt={`Flat ${flat.id}`}
              style={{
                width: "400px",
                height: "300px",
                objectFit: "cover",
                marginRight: "30px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            />

            <div style={{ maxWidth: "500px" }}>
              <h2 style={{ marginBottom: "15px" }}>Flat Details</h2>
              <p><strong>BHK:</strong> {flat.bhk}</p>
              <p><strong>Type:</strong> {flat.type}</p>
              <p><strong>Size:</strong> {flat.size}</p>
              <p><strong>Facing:</strong> {flat.facing}</p>
              {blockedFlatId === flat.id && (
                <p style={{ color: "red", marginTop: "10px" }}>
                  🚫 You need a subscription to view this flat.
                </p>
              )}

              {allowView && (
                <button
                  onClick={() => handleViewMore(flat.id)}
                  style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    backgroundColor: "#3366ff",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  View More
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FlatDetails;
