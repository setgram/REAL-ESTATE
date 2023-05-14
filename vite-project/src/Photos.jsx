import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Photos() {
  const { currentProperty } = useOutletContext();
  return (
    <img src={currentProperty.imageUrl} className="host-van-detail-image" />
  );
}
