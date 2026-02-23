import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Logo */}
        <div className="logo">
          Vimal Transformer
        </div>

        {/* Desktop Menu */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={() => setMenuOpen(false)}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/spare-parts" onClick={() => setMenuOpen(false)}>
              Spare Parts
            </NavLink>
          </li>
          <li>
            <NavLink to="/service-request" onClick={() => setMenuOpen(false)}>
              Service Request
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div 
          className="menu-icon" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

      </div>
    </nav>
  );
};

export default Navbar;