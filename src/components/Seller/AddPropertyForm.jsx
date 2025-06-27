import React, { useState } from "react";
import "./AddPropertyForm.css";

const AddPropertyForm = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    propertyType: "",
    title: "",
    description: "",
    price: "",
    city: "",
    address: "",
    bedrooms: "",
    area: "",
    bathrooms: "",
    photos: null,
    amenities: "",
    ownerName: "",
    phone: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm({ ...form, [name]: files });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const next = () => setStep(step + 1);
  const prev = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Property Listed: ", form);
    alert("✅ Property Listed Successfully!");
  };

  return (
    <div className="add-property-container">
      <h2>Add New Property</h2>
      <form onSubmit={handleSubmit}>
        {/* Step 1 */}
        {step === 1 && (
          <>
            <div className="form-row">
              <div className="form-group">
                <label>Property Type:</label>
                <select name="propertyType" value={form.propertyType} onChange={handleChange} required>
                  <option value="">--Select--</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Villa">Villa</option>
                  <option value="Flat">Flat</option>
                  <option value="Farm House">Farm House</option>
                  <option value="Land">Land</option>
                </select>
              </div>

              <div className="form-group">
                <label>Property Title:</label>
                <input type="text" name="title" value={form.title} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Property Description:</label>
                <textarea name="description" value={form.description} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Selling Price:</label>
                <input type="text" name="price" value={form.price} onChange={handleChange} required />
              </div>
            </div>

            <div className="btn-group">
              <button type="button" onClick={next}>Next Step</button>
            </div>
          </>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <>
            <div className="form-row">
              <div className="form-group">
                <label>City / Location:</label>
                <input type="text" name="city" value={form.city} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Full Address:</label>
                <input type="text" name="address" value={form.address} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Bedrooms:</label>
                <select name="bedrooms" value={form.bedrooms} onChange={handleChange} required>
                  <option value="">--Select--</option>
                  <option value="1 Bedroom">1 Bedroom</option>
                  <option value="2 Bedroom">2 Bedroom</option>
                  <option value="3 Bedroom">3 Bedroom</option>
                  <option value="4 Bedroom">4 Bedroom</option>
                </select>
              </div>

              <div className="form-group">
                <label>Area (sq ft):</label>
                <input type="number" name="area" value={form.area} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Bathrooms:</label>
                <select name="bathrooms" value={form.bathrooms} onChange={handleChange} required>
                  <option value="">--Select--</option>
                  <option value="1 Bathroom">1 Bathroom</option>
                  <option value="2 Bathroom">2 Bathroom</option>
                  <option value="3 Bathroom">3 Bathroom</option>
                  <option value="4 Bathroom">4 Bathroom</option>
                </select>
              </div>
            </div>

            <div className="btn-group">
              <button type="button" onClick={prev}>Previous</button>
              <button type="button" onClick={next}>Next Step</button>
            </div>
          </>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <>
            <div className="form-group">
              <label>Upload Photos:</label>
              <input type="file" name="photos" multiple onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Amenities:</label>
              <textarea name="amenities" value={form.amenities} onChange={handleChange} />
            </div>

            <div className="btn-group">
              <button type="button" onClick={prev}>Previous</button>
              <button type="button" onClick={next}>Next Step</button>
            </div>
          </>
        )}

        {/* Step 4 */}
        {step === 4 && (
          <>
            <div className="form-row">
              <div className="form-group">
                <label>Owner Name:</label>
                <input type="text" name="ownerName" value={form.ownerName} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Phone Number:</label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-group">
              <label>Email Address:</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required />
            </div>

            <div className="btn-group">
              <button type="button" onClick={prev}>Previous</button>
              <button type="submit">List Property</button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default AddPropertyForm;
