import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = ({ currentLocation }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
   fullName: "",
  stationName: "",
  location: "",
  email: "",
  mobile: "",
  carNumber: "",
  carModel: "",
  company: "",
  jobProfile: "",
  plugType: "",
  paymentMethod: "",
  document: null
  });

  useEffect(() => {
    // Auto-fill location from props when form opens
    if (showForm && currentLocation) {
      setFormData(prev => ({
        ...prev,
        location: `${currentLocation.lat.toFixed(5)}, ${currentLocation.lng.toFixed(5)}`
      }));
    }
  }, [showForm, currentLocation]);

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <header className="glass-header">
        <div className="logo-box">
          <img src="/images/GoEv_logo.png" alt="GOEV" className="goev-logo" />
        </div>
        <button className="add-station-btn" onClick={openForm}>
          <i className="fas fa-plus"></i>
          <span>Add Station</span>
        </button>
      </header>

      {showForm && (
        <div className="station-form-overlay">
          <div className="station-form-modal">
            <button className="close-btn" onClick={closeForm}>×</button>
            <h2>Add Charging Station</h2>
         <form>
            <input name="fullName" value={formData.fullName || ''} onChange={handleChange} placeholder="Full Name" required />

            <input name="stationName" value={formData.stationName} onChange={handleChange} placeholder="Station Name" required />
            <input name="location" value={formData.location} onChange={handleChange} placeholder="Location (auto-filled)" required />
            <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
            <input name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile Number" />
            <input name="carNumber" value={formData.carNumber} onChange={handleChange} placeholder="Car Number" />
            <input name="carModel" value={formData.carModel} onChange={handleChange} placeholder="Car Model" />
            <input name="company" value={formData.company} onChange={handleChange} placeholder="Company" />
            <input name="jobProfile" value={formData.jobProfile} onChange={handleChange} placeholder="Job Profile" />

            <select name="plugType" value={formData.plugType} onChange={handleChange}>
              <option value="">Choose Plug Type</option>
              <option>Type 2</option>
              <option>CCS</option>
              <option>CHAdeMO</option>
            </select>

            {/* CPR/ID Upload */}
            <label style={{ marginTop: '8px' }}>Upload CPR / Document</label>
            <input
              type="file"
              accept="image/*,.pdf"
              onChange={(e) => {
                const file = e.target.files[0];
                setFormData({ ...formData, document: file });
              }}
            />

            <div className="payment-method-select">
              <label>Payment Method</label>
              <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
                <option value="">Select</option>
                <option value="cash">💵 Cash</option>
                <option value="benefit">🅱️ BenefitPay</option>
                <option value="paypal">🅿️ PayPal</option>
              </select>
            </div>

            <button type="submit" className="submit-btn">Submit</button>
          </form>


          </div>
        </div>
      )}
    </>
  );
};

export default Header;
