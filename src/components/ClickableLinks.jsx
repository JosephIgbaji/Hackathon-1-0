import React from "react";
import { Link } from "react-router-dom";

const ClickableLinks = () => {
  return (
    <section className="nav-click-links">
      <ul>
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
    </section>
  );
};

export default ClickableLinks;
