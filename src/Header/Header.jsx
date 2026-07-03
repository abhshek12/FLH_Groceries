import React from "react";
import { Link } from "react-router-dom";


import {
  FaHome,
  FaInfoCircle,
  FaUser,
  FaSearch,
  FaBoxOpen,
  FaCarrot,

} from "react-icons/fa";

import {
  GiRoastChicken,
  GiShoppingCart,
  GiFruitBowl,
} from "react-icons/gi";
import { useCart } from "../context/CartContext";

const Header = () => {
  const location = window.location.pathname;
  const isloginPage = location === "/login";
  const hideHeader = isloginPage && isloginPage;
  const isAuthenticated = false; // Replace with actual authentication logic
  const { cartCount, cartItems } = useCart();

  if (hideHeader) {
    return null; // Don't render the header on the login page if authenticated
  }
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      <div className="container-fluid">

        {/* Logo */}
        <Link className="navbar-brand fw-bold fs-4" to="/">
          <img src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png" alt="Logo" style={{ width: "40px", height: "40px" }} />
          FLH Grocery
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarContent">

          {/* Nav Links */}
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4">

            {/* Home */}
            <li className="nav-item">
              <Link
                className="nav-link d-flex align-items-center gap-2"
                to="/"
              >
                <FaHome className="text-white" style={{ fontSize: "20px" }} />
                Home
              </Link>
            </li>

            {/* Kits Dropdown */}
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle d-flex align-items-center gap-2 "
                role="button"
                data-bs-toggle="dropdown"
              >
                <FaBoxOpen className="text-white" style={{ fontSize: "20px" }} />
                Kits
              </a>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item " to="/groceries">

                    Grocery Kits
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item " to="/festival-kits">
                    Festival Kits
                  </Link>
                </li>
              </ul>
            </li>

            {/* Meat */}
            <li className="nav-item">
              <Link
                className="nav-link d-flex align-items-center gap-2"
                to="/meats"
              >
                <GiRoastChicken className="text-white" style={{ fontSize: "20px" }} />
                Meat
              </Link>
            </li>

            {/* Fruits */}
            <li className="nav-item">
              <Link
                className="nav-link d-flex align-items-center gap-2"
                to="/fruites"
              >
                <GiFruitBowl className="text-white" style={{ fontSize: "20px" }} />
                Fruits
              </Link>
            </li>

            {/* Vegetables */}
            <li className="nav-item">
              <Link
                className="nav-link d-flex align-items-center gap-2"
                to="/vegitables"
              >
                <FaCarrot className="text-white" style={{ fontSize: "20px" }} />
                Vegetables
              </Link>
            </li>
            {/* Search */}
            <form className="d-flex mx-auto w-50">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search products..."
              />

              <button className="btn btn-danger text-white" type="submit">
                <FaSearch />
              </button>
            </form>
          </ul>
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">

            {/* Cart */}
            <li className="nav-item position-relative">
  <Link
    className="nav-link"
    to="/cart"
  >
    <GiShoppingCart
      className="text-white"
      style={{ fontSize: "30px" }}
    />

    {cartCount > 0 && (
      <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
      >
        {cartCount}
      </span>
    )}
  </Link>
</li>

            {/* Profile Dropdown */}
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle d-flex align-items-center gap-2"
                role="button"
                data-bs-toggle="dropdown"
              >
                <FaUser className="text-white" style={{ fontSize: "25px" }} />

              </a>

              <ul className="dropdown-menu dropdown-menu-end">

                <li>
                  <Link className="dropdown-item" to="/profile">
                    My Profile
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/my-orders">
                    My Orders
                  </Link>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <Link className="dropdown-item text-danger" to="/login">
                    Logout
                  </Link>
                </li>

              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;