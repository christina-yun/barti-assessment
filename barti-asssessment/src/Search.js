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
        console.log('click')
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

const mapStateToProps = (state) => {
    return ({
        search:state.search,
        isFetching: state.isFetching,
        error: state.error
    })
}

export default connect(mapStateToProps, { allTheTerms }) (Search);
