import React from "react";
import Result from "./Result";
import { connect } from "react-redux";

const ResultList = (props) => {
  const results = props.results;
  return (
    <div className="resultList">
      {results.length === 0 ? (
        <h3>No results</h3>
      ) : (
        results.map((result) => {
          return <Result key={result.result.id} result={result} />;
        })
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    results: state.search,
  };
};
export default connect(mapStateToProps)(ResultList);
