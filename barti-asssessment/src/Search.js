import React, { useState } from "react";

const Search = (props) => {
    const [search, setSearch] = useState('');

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div className="search">
      <form>
        <label>First Name</label>
        <input onChange = {handleChange} />
        <p></p>
        <label>Last Name</label>
        <input onChange = {handleChange} />
        <button className='submit' onClick={handleSubmit}> Search </button>
      </form>
    </div>
  );
};

export default Search;
