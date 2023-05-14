import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <header>
      <NavLink className="site-logo" to="/">
        Setgram Real Estate Company
      </NavLink>
      <nav>
        <NavLink
          to="/host"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/properties"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Properties
        </NavLink>
        <Link to="login" className="login-link">
          <img
            src="https://static.vecteezy.com/system/resources/previews/009/330/731/original/avatar-icon-profile-icon-member-login-isolated-login-icons-profile-icons-free-vector.jpg"
            className="login-icon"
          />
        </Link>
      </nav>
    </header>
  );
}
