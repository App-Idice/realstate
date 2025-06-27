import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./navbar/navbar.css";
import { logout } from "../redux/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout()); // 🔹 Clear redux auth state
    localStorage.removeItem("registeredNumber"); // Optional
    navigate("/auth"); // 🔹 Redirect to login
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/buyer" className="nav-link">
          Buyer
        </Link>

        {/* 🔹 Seller link without dropdown */}
        <Link to="/seller" className="nav-link">
          Seller
        </Link>

        <Link to="/tenant" className="nav-link">
          Tenant
        </Link>
      </div>

     <div className="nav-right">
        {isAuthenticated ? (
          <button className="login-btn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button className="login-btn" onClick={() => navigate("/auth")}>
            Login / Sign Up
          </button>
        )}
      </div>
    </nav>
    
  );
};

export default Navbar;
