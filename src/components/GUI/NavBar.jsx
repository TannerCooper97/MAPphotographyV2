import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/gui-styles/Navbar.scss";
import mapLogo from "../../assets/MAphotography2.svg";
import LoginModal from "./Login"; // Update the path
import { useAuth } from "./AuthContext"; // Update the path

function NavBar() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Clear authentication status
  };

  return (
    <header className="header">
      <nav>
        <div className="logo-container">
          <img src={mapLogo} alt="" />
          <Link className="logo" to="/">
            <h4>MAP Photography</h4>
          </Link>
        </div>
        <ul className="list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/portfolio">Gallery</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          {isLoggedIn ? (
          <li><button onClick={logout}>Logout</button></li>
        ) : (
          <li><button onClick={openLoginModal}>Login</button></li>
        )}
      </ul>
      {isLoginModalOpen && <LoginModal onClose={closeLoginModal} />}
    </nav>
    </header>
  );
}

export default NavBar;
