import React from "react";
import style from "./country.module.css";

const Country = (props) => {
  const { name, flags, capital, population, area, region } = props.country;

  const handleRemoveCountry = (countryName) => {
    props.onRemoveCountry(countryName);
  };

  return (
    <article className={style.country}>
      <div>
        <img src={flags.png} alt={name.common} className={style.flag} />
        <h3>Name: {name.common}</h3>
        <h3>Capital: {capital}</h3>
        <h3>Region: {region}</h3>
        <h3>
          Population: {population} km<sup>2</sup>
        </h3>
        <h3>Area: {area}</h3>
        <button
          className={style.btn}
          onClick={() => {
            handleRemoveCountry(name.common);
          }}
        >
          Remove Country
        </button>
      </div>
    </article>
  );
};

export default Country;
