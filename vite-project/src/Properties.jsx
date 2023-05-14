import React from "react";
import { useState, useEffect } from "react";
import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { getProperty } from "/src/api";

export function loader() {
  return getProperty();
}

export default function Properties() {
  // const [properties, setProperties] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  //const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const properties = useLoaderData();

  //useEffect(() => {
  //fetch("/api/properties")
  //.then((res) => res.json())
  //.then((data) => setProperties(data.properties));
  //}, []);

  const typeFilter = searchParams.get("type");

  // useEffect(() => {
  //  async function loadProperties() {
  //    setLoading(true);
  //    try {
  //     const data = await getProperty();
  //      setProperties(data);
  //    } catch (err) {
  //      setError(err);
  //    } finally {
  //      setLoading(false);
  //    }
  //  }
  //
  //  loadProperties();
  //  }, []);

  const useType = typeFilter
    ? properties.filter((property) => property.type === typeFilter)
    : properties;

  const propertyElement = useType.map((property) => (
    <div key={property.id} className="van-tile">
      <Link
        to={`/properties/${property.id}`}
        state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
      >
        <img src={property.imageUrl} />
        <div className="van-info">
          <h3>{property.name}</h3>
          <p>₦{property.price}</p>
        </div>
        <i className={`van-type ${property.type} selected`}>{property.type}</i>
      </Link>
    </div>
  ));

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  // if (loading) {
  // return <h1>Loading...</h1>;
  //}

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }
  return (
    <div className="van-list-container">
      <h1>Explore Our House Options</h1>
      <div>
        <button
          onClick={() => handleFilterChange("type", "simple")}
          className={`van-type simple ${
            typeFilter === "simple" ? "selected" : null
          }`}
        >
          Simple
        </button>
        <button
          onClick={() => handleFilterChange("type", "luxury")}
          className={`van-type luxury ${
            typeFilter === "luxury" ? "selected" : null
          }`}
        >
          Luxury
        </button>
        <button
          onClick={() => handleFilterChange("type", "rugged")}
          className={`van-type rugged ${
            typeFilter === "rugged" ? "selected" : null
          }`}
        >
          Rugged
        </button>
        {typeFilter ? (
          <button
            onClick={() => handleFilterChange("type", null)}
            className="van-type clear-filters"
          >
            Clear filter
          </button>
        ) : null}
      </div>
      <div className="van-list">{propertyElement}</div>
    </div>
  );
}
