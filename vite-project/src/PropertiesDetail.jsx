import React from "react";
import { useParams, Link, useLocation, useLoaderData } from "react-router-dom";
//import { useState, useEffect } from "react";
import { getProperty } from "/src/api";

export function loader({ params }) {
  return getProperty(params.id);
}

export default function PropertiesDetail() {
  // const params = useParams();
  // const [property, setProperty] = useState(null);
  const location = useLocation();
  const property = useLoaderData();

  //useEffect(() => {
  // fetch(`/api/properties/${params.id}`)
  //    .then((res) => res.json())
  //  .then((data) => setProperty(data.properties));
  // }, [params.id]);

  //const search = (location.state && location.state.search) || "";
  //const type = (location.state && location.state.search) || "all";
  const search = location.state?.search || "";
  const type = location.state?.type || "all";
  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>Back to {type} properties</span>
      </Link>
      <div className="van-detail">
        <img src={property.imageUrl} />
        <i className={`van-type ${property.type} selected`}>{property.type}</i>
        <h2>{property.name}</h2>
        <p className="van-price">
          <span>₦{property.price}</span>
        </p>
        <p>{property.description}</p>
        <button className="link-button">Buy Now</button>
      </div>
    </div>
  );
}
