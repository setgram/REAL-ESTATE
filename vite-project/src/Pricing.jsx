import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Pricing() {
  const { currentProperty } = useOutletContext();

  return (
    <h3 className="host-van-price">
      ₦{currentProperty.price}
      <span></span>
    </h3>
  );
}
