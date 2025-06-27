import React from "react";
import flat1 from "../../assets/flat1.webp";
import flat2 from "../../assets/flat2.jpg";
import flat3 from "../../assets/flat3.jpg";
import flat4 from "../../assets/flat4.jpg";
import flat5 from "../../assets/flat5.jpg";

const flatList = [
  {
    id: 1,
    image: flat1,
    bhk: "2 BHK",
    type: "Residential",
    size: "950 sq.ft",
    budget: "₹45 Lakhs",
    facing: "south-east",
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
    facing: "south-west",
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
    facing: "North-east",
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
    facing: "north-west",
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
    facing: "west",
    address: "Golf Course Road, Gurugram",
    sellerName: "Sunita Jain",
    sellerContact: "9887766554",
  },
];

const FlatPage = () => {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Available Properties for Buyer
      </h1>

      {flatList.map((flat) => (
        <div
          key={flat.id}
          style={{
            display: "flex",
            gap: "30px",
            padding: "20px",
            marginBottom: "30px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
          }}
        >
          <img
            src={flat.image}
            alt="Flat"
            style={{
              width: "400px",
              height: "300px",
              objectFit: "cover",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          />

          <div style={{ fontSize: "16px", lineHeight: "1.8" }}>
            <p><strong>BHK:</strong> {flat.bhk}</p>
            <p><strong>Type:</strong> {flat.type}</p>
            <p><strong>Size:</strong> {flat.size}</p>
            <p><strong>Facing:</strong> {flat.facing}</p>
            {/* <p><strong>Budget:</strong> {flat.budget}</p> */}
            <p><strong>Address:</strong> {flat.address}</p>
            {/* <p><strong>Seller Name:</strong> {flat.sellerName}</p>
            <p><strong>Seller Contact:</strong> {flat.sellerContact}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlatPage;
