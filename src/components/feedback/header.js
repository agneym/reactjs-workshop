import React from "react";

function Header() {
  return (
    <header
      css={`
        text-align: center;
        padding: 2rem 0;
      `}
    >
      <h1>FEEDBACK</h1>
      <sub>
        <span role="img" aria-label="excited">
          🤩
        </span>
        <span> Thank You for taking Time </span>
        <span role="img" aria-label="excited">
          🤩
        </span>
      </sub>
    </header>
  );
}

export default Header;
