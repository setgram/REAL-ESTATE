import React from "react";
//import { useState, useEffect } from "react";
import {
  useParams,
  Link,
  NavLink,
  Outlet,
  useLoaderData,
} from "react-router-dom";
import { getHostProperty } from "/src/api";

export function loader({ params }) {
  return getHostProperty(params.id);
}

export default function HostPropertyDetails() {
  //const { id } = useParams();
  // const [currentProperty, setCurrentProperty] = useState(null);

  const currentProperty = useLoaderData();

  // useEffect(() => {
  //  fetch(`/api/host/properties/${id}`)
  //    .then((res) => res.json())
  //     .then((data) => setCurrentProperty(data.properties));
  //}, []);

  //if (!currentProperty) {
  //   return <h1>Loading...</h1>;
  // }

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all properties</span>
      </Link>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentProperty.imageUrl} width={150} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentProperty.type}`}>
              {currentProperty.type}
            </i>
            <h2>{currentProperty.name}</h2>

            <p>{currentProperty.price}</p>
          </div>
        </div>

        <nav className="host-van-detail-nav">
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Photos
          </NavLink>
        </nav>

        <Outlet context={{ currentProperty }} />
      </div>
    </section>
  );
}
