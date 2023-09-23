import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const HamburgerNav = () => {
  return (
    <section className="ham-nav-click-links">
      <ul className="ham-nav">
        <li>
          <Link to="/">TimeLine</Link>
        </li>
        <li>
          <Link to="/">Overview</Link>
        </li>
        <li>
          <Link to="/">FAQ</Link>
        </li>
        <li>
          <Link to="/contact">
            <span className="color-pink">Contact</span>
          </Link>
        </li>
      </ul>
      <Link to="/register">
        <button className="button-component ml-2-5">Register</button>
      </Link>
    </section>
  );
};

export default HamburgerNav;
