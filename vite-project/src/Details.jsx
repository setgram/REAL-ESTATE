import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Details() {
  const { currentProperty } = useOutletContext();

  return (
    <section className="host-van-detail-info">
      <h4>
        Name: <span>{currentProperty.name}</span>
      </h4>
      <h4>
        Category: <span>{currentProperty.type}</span>
      </h4>
      <h4>
        Description: <span>{currentProperty.description}</span>
      </h4>
      <h4>
        Visibility: <span>Public</span>
      </h4>
    </section>
  );
}
