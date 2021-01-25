import React, { useEffect, useState } from "react";
import "./nav.css";

function Nav() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);
  return (
    <div className={!scroll ? "nav" : "nav scroll"}>
      <img
        className="netflix-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix logo"
      />
      <img
        className="thevhinyo-logo"
        src="Finallogo.svg"
        alt="The vhinyo logo"
      />
    </div>
  );
}

export default Nav;
