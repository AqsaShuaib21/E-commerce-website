import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = ({ cart }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    contact: "",
    paymentMethod: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckout = (e) => {
    e.preventDefault();

    alert("Checkout successful! Thank you for your order.");
    setFormData({
      name: "",
      email: "",
      address: "",
      city: "",
      zipCode: "",
      contact: "",
      paymentMethod: "",
    });

    // Navigate to home page after checkout
    navigate("/");
  };

  return (
    <form
      onSubmit={handleCheckout}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "80%",
        maxWidth: "800px",
        margin: "auto",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        required
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <input
        type="text"
        name="address"
        placeholder="Shipping Address"
        value={formData.address}
        onChange={handleChange}
        required
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
        required
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <input
        type="text"
        name="zipCode"
        placeholder="Zip Code"
        value={formData.zipCode}
        onChange={handleChange}
        required
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <input
        type="text"
        name="contact"
        placeholder="Contact Number"
        value={formData.contact}
        onChange={handleChange}
        required
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <select
        name="paymentMethod"
        value={formData.paymentMethod}
        onChange={handleChange}
        required
        style={{ padding: "10px", fontSize: "16px" }}
      >
        <option value="">Select Payment Method</option>
        <option value="credit_card">Credit Card</option>
        <option value="debit_card">Debit Card</option>
        <option value="paypal">PayPal</option>
        <option value="cash_on_delivery">Cash on Delivery</option>
      </select>
      <button
        type="submit"
        style={{
          padding: "10px",
          backgroundColor: "goldenrod",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Checkout
      </button>
    </form>
  );
};

export default Checkout;
