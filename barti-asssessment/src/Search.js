import React, { useState } from "react";
import {connect} from 'react-redux';
import { allTheTerms } from "./actions";

const Search = (props) => {
    const [search, setSearch] = useState('');

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.allTheTerms(search)

    }
  return (
    <div className="search">
        {/* TODO Create a toggle button for a separate form to seach by first or last name */}
      <form>
        <label>Search by Name</label>
        <input onChange = {handleChange} />
        <button className='submit' onClick={handleSubmit}> Search </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
    return ({
        search:state.search,
        isFetching: state.isFetching,
        error: state.error
    })
}

export default connect(mapStateToProps, { allTheTerms }) (Search);
