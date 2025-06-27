import React from "react";
import { useParams } from "react-router-dom";
import flat1 from '../../assets/flat1.webp';
import flat2 from "../../assets/flat2.jpg";
import flat3 from "../../assets/flat3.jpg";
import flat4 from "../../assets/flat4.jpg";
import flat5 from "../../assets/flat5.jpg";

const flatData = [
  {
    id: 1,
    image: flat1,
    bhk: "2 BHK",
    type: "Apartment",  
    purpose: "For Sale",               // 🆕
    completion: "Off-Plan",            
    size: "1100 sqft",
    facing: "East",
    owner: { name: "Amit Kumar", contact: "9876543210" },
    highlights: ["Park Facing", "Near Metro"],
    nearby: ["Hospital", "Market", "School"],
    features: {
      furnishing: "Semi-Furnished",
      flooring: "Tiles",
      parking: "Yes",
      water: "Municipal"
    }
  },
  {
    id: 1,
    image: flat2,
    bhk: "2 BHK",
    type: "Apartment",
    size: "1100 sqft",
    facing: "East",
    owner: { name: "Amit Kumar", contact: "9876543210" },
    highlights: ["Park Facing", "Near Metro"],
    nearby: ["Hospital", "Market", "School"],
    features: {
      furnishing: "Semi-Furnished",
      flooring: "Tiles",
      parking: "Yes",
      water: "Municipal"
    }
  },
  {
    id: 1,
    image: flat3,
    bhk: "2 BHK",
    type: "Apartment",
    size: "1100 sqft",
    facing: "East",
    owner: { name: "Amit Kumar", contact: "9876543210" },
    highlights: ["Park Facing", "Near Metro"],
    nearby: ["Hospital", "Market", "School"],
    features: {
      furnishing: "Semi-Furnished",
      flooring: "Tiles",
      parking: "Yes",
      water: "Municipal"
    }
  },
  {
    id: 1,
    image: flat4,
    bhk: "2 BHK",
    type: "Apartment",
    size: "1100 sqft",
    facing: "East",
    owner: { name: "Amit Kumar", contact: "9876543210" },
    highlights: ["Park Facing", "Near Metro"],
    nearby: ["Hospital", "Market", "School"],
    features: {
      furnishing: "Semi-Furnished",
      flooring: "Tiles",
      parking: "Yes",
      water: "Municipal"
    }
  },
  {
    id: 1,
    image: flat5,
    bhk: "2 BHK",
    type: "Apartment",
    size: "1100 sqft",
    facing: "East",
    owner: { name: "Amit Kumar", contact: "9876543210" },
    highlights: ["Park Facing", "Near Metro"],
    nearby: ["Hospital", "Market", "School"],
    features: {
      furnishing: "Semi-Furnished",
      flooring: "Tiles",
      parking: "Yes",
      water: "Municipal"
    }
  },
  
];

const TenantFlatDetails = () => {
  const { id } = useParams();
  const flat = flatData.find((f) => f.id === parseInt(id));

  if (!flat) return <h2 style={{ padding: "2rem" }}>Seller not found</h2>;

  return (
    <div style={{ padding: "2rem" }}>
      <div style={{ display: "flex", gap: "2rem" }}>
        <img src={flat.image} alt="Flat" style={{ width: "50%", height: "300px", objectFit: "cover" }} />
        <div>
          <h2>{flat.bhk} - {flat.type}</h2>
          <p><strong>Owner:</strong> {flat.owner.name}</p>
          <p><strong>Contact:</strong> {flat.owner.contact}</p>
          <p><strong>Size:</strong> {flat.size}</p>
          <p><strong>Facing:</strong> {flat.facing}</p>
        </div>
      </div>

      <div style={{ marginTop: "2rem", border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
        <h3>Seller Property Information</h3>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <p><strong>Type:</strong> {flat.type}</p>               {/* 🆕 */}
          <p><strong>Purpose:</strong> {flat.purpose}</p>         {/* 🆕 */}
          <p><strong>Completion:</strong> {flat.completion}</p>   {/* 🆕 */}
        </div>
        
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h4>Key Highlights</h4>
            <ul>{flat.highlights.map((item, i) => <li key={i}>{item}</li>)}</ul>
          </div>
          <div>
            <h4>Nearby</h4>
            <ul>{flat.nearby.map((item, i) => <li key={i}>{item}</li>)}</ul>
          </div>
        </div>
        <h4 style={{ marginTop: "1rem" }}>Flat Features</h4>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <p><strong>Furnishing:</strong> {flat.features.furnishing}</p>
          <p><strong>Flooring:</strong> {flat.features.flooring}</p>
          <p><strong>Parking:</strong> {flat.features.parking}</p>
          <p><strong>Water:</strong> {flat.features.water}</p>
        </div>
      </div>
    </div>
  );
};

export default TenantFlatDetails;
