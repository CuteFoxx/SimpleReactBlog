import "./Navbar.css";
import { Link } from "react-router-dom";
import { GoogleAuth } from "../GoogleAuth/GoogleAuth";
import { useState } from "react";

export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <>
      <nav className="header__nav nav" id={showLinks ? "shown" : ""}>
        <Link onClick={() => setShowLinks(false)} to="/">
          Home
        </Link>
        <Link onClick={() => setShowLinks(false)} to="/create-post">
          Create post
        </Link>
        <GoogleAuth />
      </nav>
      <button
        onClick={() => setShowLinks(!showLinks)}
        className="header__hamburger-btn"
      >
        <svg
          className="header__nav-burger bi bi-list"
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
    </>
  );
};
