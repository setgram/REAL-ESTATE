import React from "react";
//import { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getHostProperty } from "/src/api";

export function loader() {
  return getHostProperty();
}

export default function HostProperty() {
  // const [properties, setProperties] = useState([]);

  const properties = useLoaderData();

  // useEffect(() => {
  //  fetch("/api/host/properties")
  //      .then((res) => res.json())
  //     .then((data) => setProperties(data.properties));
  // }, []);

  const hostPropertyElement = properties.map((property) => (
    <div key={property.id} className="van-tile">
      <Link to={`/host/property/${property.id}`}>
        <img src={property.imageUrl} />
        <div className="van-info">
          <h3>{property.name}</h3>
          <p>₦{property.price}</p>
        </div>
      </Link>
    </div>
  ));

  return (
    <section>
      <h1 className="host-vans-title">Your listed Homes</h1>
      <div className="host-vans-list">
        <section>{hostPropertyElement}</section>
      </div>
    </section>
  );
}
