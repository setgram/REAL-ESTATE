import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Your Dream House Is Here At Affordable Rate</h1>
      <p>We Have The Perfect House That Will Suit Your Desire</p>
      <Link to="properties">Find Your Home</Link>
    </div>
  );
}
