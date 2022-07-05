import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollX > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav-black"}`}>
      <img
        src="https://www.dreamstime.com/netflix-logo-isolated-los-gatos-california-united-states-august-netflix-logo-isolated-sign-headquarters-building-image126083376"
        alt=""
      />
      <img src="" alt="" />
    </div>
  );
};

export default Navbar;
