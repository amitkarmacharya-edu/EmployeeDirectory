import React from "react";

function Header(props) {
  return <header className="container-fluid">{props.children}</header>;
}

export default Header;