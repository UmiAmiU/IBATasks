import React from "react";

const Header = (props) => {
  const styles = {
    display: "flex",
    background: "blue",
    padding: "20px 0px",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  };

  return <header style={styles}>Header</header>;
};

export default Header;
