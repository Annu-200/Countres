import React from "react";
import { Link } from "react-router-dom";

export default function CountryCard({name,flag,population,capital,region}) {
  return (
    <Link to={`/${name}`}  className="country-card">
      <img src={flag} alt="flag" />
      <div className="card-details">
        <div className="card-title">
          <h3>{name}</h3>
        </div>
        <p>
          <b>Population</b> {population.toLocaleString('en-IN')}
        </p>
        <p>
          <b>Region</b>: {region}
        </p>
        <p>
          <b>Capition</b>: {capital}
        </p>
      </div>
    </Link>
  );
}
