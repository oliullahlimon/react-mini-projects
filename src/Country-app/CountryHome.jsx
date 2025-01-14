import React, { useEffect, useState } from "react";
import Countries from "./Countries";
import Search from "./Search";

const url = "https://restcountries.com/v3.1/all";

const CountryHome = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  // below filteredCountry useState is a copy of countries we can run the program without filteredCountries useState.
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const fetchData = async (url) => {
    setIsLoading(true);

    try {
      // const data = await fetch(url).then((res) => res.json()); //with .then()
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data);
      setIsLoading(false);
      setError(null);
      console.log(countries);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const handleRemoveCountry = (name) => {
    //Uses filteredCountries.filter() because the deletion should affect only the currently displayed list of countries.
    const filter = filteredCountries.filter((country) => {
      return country.name.common !== name;
    });
    setFilteredCountries(filter);
  };

  const handleSearch = (searchValue) => {
    const value = searchValue.toLowerCase();
    //Uses countries.filter() because the search should consider all available countries.
    const newCounties = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    setFilteredCountries(newCounties);
  };

  return (
    <div>
      <h1 style={{ margin: "1rem" }}>Country App</h1>
      <Search onSearch={handleSearch} />
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      {countries && (
        <Countries
          countries={filteredCountries}
          onRemoveCountry={handleRemoveCountry}
        />
      )}
    </div>
  );
};

export default CountryHome;
