import React from "react";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return <footer className="footer"> © {year} Keeper App</footer>;
}

export default Footer;
