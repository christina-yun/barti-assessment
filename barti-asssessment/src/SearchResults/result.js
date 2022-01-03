import React from "react";

const Result = (props) => {
  return (
    <div>
      <p>
        Name: {props.result.firstName} {props.result.lastName}
      </p>
    </div>
  );
};

export default Result;
