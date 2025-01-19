import React, { useState } from "react";
import axios from "axios";
import "./DonationForm.css"; // Import CSS file

const DonationForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", amount: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async () => {
    try {
      const { data } = await axios.post("http://localhost:5000/api/donation/create-order", formData);

      const options = {
        key: "rzp_test_73Og2QB6bRrFB9", // Replace with your Razorpay Key ID
        amount: data.order.amount,
        currency: data.order.currency,
        name: "Alumni Donation Portal",
        description: "Thank you for your generosity!",
        order_id: data.order.id,
        handler: async (response) => {
          const paymentData = {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          };

          const result = await axios.post(
            "http://localhost:5000/api/donation/verify-payment",
            paymentData
          );
          alert(result.data.message);
        },
        prefill: {
          name: formData.name,
          email: formData.email,
        },
        theme: {
          color: "#528FF0",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="donation-form-container">
      <h2 className="form-title">Donation Form</h2>
      <form className="donation-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="Enter donation amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <button type="button" className="donate-button" onClick={handlePayment}>
          Donate
        </button>
      </form>
    </div>
  );
};

export default DonationForm;
