import React, { useEffect, useState } from "react";
import style from "./search.module.css";

const Search = (props) => {
  const [searchText, setSearchText] = useState("");
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    props.onSearch(searchText);
  }, [searchText]); // here we use useEffect to get input value immediately.

  return (
    <div className={style.container}>
      <input
        type="text"
        name=""
        id=""
        placeholder="Search Country"
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
