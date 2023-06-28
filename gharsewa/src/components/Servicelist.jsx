import React, { useState } from "react";
import "./servicelist.css";

const ServiceList = ({
  username,
  email,
  phone,
  services,
  handleBooking,
  isBooked,
}) => {
  return (
    <div className="usercard bg-light">
      <p>Name: {username}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Services: {services}</p>
      <button className="btn btn-primary w-100" onClick={handleBooking}>
        {isBooked ? "Already Booked" : "Book"}
      </button>
    </div>
  );
};

export default ServiceList;
