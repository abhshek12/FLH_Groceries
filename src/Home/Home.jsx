import React from "react";
import "./Home.css";

import {
  FaTruck,
  FaShieldAlt,
  FaHeadset,
  FaLeaf,
  FaFacebookF,
  FaTwitter,
  FaInstagram
} from "react-icons/fa";
import { Link } from "react-router-dom";

import {
  GiMeat,
  GiFruitBowl,
  GiShoppingCart,
} from "react-icons/gi";

const Home = () => {
  return (
    <div className="container-fluid p-0">

      {/* Hero Section */}
      <section className="hero-section py-5">
        <div className="container">
          <div className="row align-items-center">

            {/* Left */}
            <div className="col-lg-5">

              <h1 className="display-3 fw-bold text-success">
                Fresh Groceries,
              </h1>

              <h1 className="display-3 fw-bold text-warning">
                Better Living
              </h1>

              <p className="mt-4 fs-5 text-muted">
                Your one-stop shop for Grocery &
                Festival Kits, fresh vegetables
                and premium meats.
              </p>

              <div className="d-flex gap-3 mt-4">
                <button className="btn btn-success btn-lg px-4">
                  Shop Now
                </button>

                <button className="btn btn-outline-success btn-lg px-4">
                  Explore Kits
                </button>
              </div>

            </div>

            {/* Right */}
            <div className="col-lg-7 text-center mt-5 mt-lg-0">

              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e"
                alt="Groceries"
                className="img-fluid rounded-4 shadow"
              />

            </div>

          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="container py-5">

        <div className="row g-4">

          {/* Grocery Kits */}
          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow-sm h-100 category-card">

              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e"
                className="card-img-top"
                alt=""
              />

              <div className="card-body text-center">

                <h4 className="fw-bold text-success">
                  Grocery Kits
                </h4>

                <p className="text-muted">
                  Daily essentials for your home.
                </p>

                <button className="btn btn-success">
                  Shop Now
                </button>

              </div>
            </div>
          </div>

          {/* Festival Kits */}
          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow-sm h-100 category-card">

              <img
                src="https://images.unsplash.com/photo-1601050690597-df0568f70950"
                className="card-img-top"
                alt=""
              />

              <div className="card-body text-center">

                <h4 className="fw-bold text-warning">
                  Festival Kits
                </h4>

                <p className="text-muted">
                  Special curated festival packs.
                </p>

                <button className="btn btn-warning text-white">
                  Explore
                </button>

              </div>
            </div>
          </div>

          {/* Vegetables */}
          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow-sm h-100 category-card">

              <img
                src="https://images.unsplash.com/photo-1540420773420-3366772f4999"
                className="card-img-top"
                alt=""
              />

              <div className="card-body text-center">

                <h4 className="fw-bold text-success">
                  Fresh Vegetables
                </h4>

                <p className="text-muted">
                  Farm fresh vegetables daily.
                </p>

                <button className="btn btn-success">
                  Buy Now
                </button>

              </div>
            </div>
          </div>

          {/* Meats */}
          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow-sm h-100 category-card">

              <img
                src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f"
                className="card-img-top"
                alt=""
              />

              <div className="card-body text-center">

                <h4 className="fw-bold text-danger">
                  Premium Meats
                </h4>

                <p className="text-muted">
                  Hygienic premium quality meats.
                </p>

                <button className="btn btn-danger">
                  Order
                </button>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Shop By Category */}
      <section className="container py-5">

  <h2 className="text-center fw-bold text-success mb-5">
    Shop By Category
  </h2>

  <div className="row justify-content-center text-center g-4">

    {/* Grocery */}
    <div className="col-lg col-md-4 col-6">

      <Link
        to="/grocery"
        className="text-decoration-none text-dark"
      >

        <div className="category-icon-box">

          <GiShoppingCart />

          <h5 className="mt-3">
            Grocery
          </h5>

        </div>

      </Link>

    </div>

    {/* Festival Kits */}
    <div className="col-lg col-md-4 col-6">

      <Link
        to="/festival-kits"
        className="text-decoration-none text-dark"
      >

        <div className="category-icon-box">

          <GiFruitBowl />

          <h5 className="mt-3">
            Festival Kits
          </h5>

        </div>

      </Link>

    </div>

    {/* Vegetables */}
    <div className="col-lg col-md-4 col-6">

      <Link
        to="/vegetables"
        className="text-decoration-none text-dark"
      >

        <div className="category-icon-box">

          <FaLeaf />

          <h5 className="mt-3">
            Vegetables
          </h5>

        </div>

      </Link>

    </div>

    {/* Fruits */}
    <div className="col-lg col-md-4 col-6">

      <Link
        to="/fruits"
        className="text-decoration-none text-dark"
      >

        <div className="category-icon-box">

          <GiFruitBowl />

          <h5 className="mt-3">
            Fruits
          </h5>

        </div>

      </Link>

    </div>

    {/* Meats */}
    <div className="col-lg col-md-4 col-6">

      <Link
        to="/meats"
        className="text-decoration-none text-dark"
      >

        <div className="category-icon-box">

          <GiMeat />

          <h5 className="mt-3">
            Meats
          </h5>

        </div>

      </Link>

    </div>

  </div>

</section>

      {/* Features */}
      <section className="container py-5">

        <div className="row text-center g-4">

          <div className="col-md-3">
            <div className="feature-box">

              <FaTruck />

              <h5 className="mt-3">
                Fast Delivery
              </h5>

              <p>
                Delivery at your doorstep
              </p>

            </div>
          </div>

          <div className="col-md-3">
            <div className="feature-box">

              <FaShieldAlt />

              <h5 className="mt-3">
                Secure Payments
              </h5>

              <p>
                100% safe payments
              </p>

            </div>
          </div>

          <div className="col-md-3">
            <div className="feature-box">

              <FaLeaf />

              <h5 className="mt-3">
                Fresh Quality
              </h5>

              <p>
                Farm fresh products
              </p>

            </div>
          </div>

          <div className="col-md-3">
            <div className="feature-box">

              <FaHeadset />

              <h5 className="mt-3">
                24/7 Support
              </h5>

              <p>
                Customer support anytime
              </p>

            </div>
          </div>

        </div>
      </section>
      <footer className="bg-dark text-white text-center py-3">

        <div className="mt-2 justify-content-start d-flex">
          <a href="#" className="text-white mx-2">Privacy Policy</a>
          |
          <a href="#" className="text-white mx-2">Terms of Service</a>
        </div>
        <div className="mt-4 justify-content-start d-flex">
          <a href="#" className="text-white mx-2">Contact Us</a>
          |
          <a href="#" className="text-white mx-2">About Us</a>
        </div>
        <div className="mt-2 justify-content-center d-flex">
          <address className="text-white">
            123 Main street,A square building center
            ramanagar,vizag,Andhra Pradesh,India - 530013
            mail:flh@mail.com
            phone: +91 9876543210
          </address>
        </div>
        <div className="mt-3 justify-content-end d-flex">
          <a href="#" className="text-white mx-2 ">< FaFacebookF /></a>
          |
          <a href="#" className="text-white mx-2">< FaTwitter /></a>
          |
          <a href="#" className="text-white mx-2">< FaInstagram /></a>
        </div>
        &copy; 2024 FLH Groceries. All rights reserved.
      </footer>

    </div>
  );
};

export default Home;