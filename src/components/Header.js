import React from "react";

function Header() {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5em",
    fontSize: "2rem",
    fontWeight: "500",
    marginBottom: "2rem",
    color: "#ececec",
    textTransform: "lowercase",
    textAlign: "center",
  };

  return (
    <header style={headerStyle}>
      <h1>Mcc_Grey's todos</h1>
    </header>
  );
}

export default Header;
