import React from "react";

function Col(props) {
  return <col className="col-sm-10 col-md-8 mb-2 m-auto">{props.children}</col>;
}

export default Col