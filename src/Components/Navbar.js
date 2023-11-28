import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initial login status
  let history = useHistory();

  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem("token", () => {
      // Update login status to trigger re-render
      setIsLoggedIn(false);
      // Redirect to the login page
      history.push("/login");
    });
  };

  useEffect(() => {
    // Check local storage for token on component mount
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className={`navbaraaa ${isSticky ? "sticky" : ""}`}>
      <div className={`navbaraaa ${isSticky ? "sticky" : ""}`}>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            {/* Logo and scroll to top button */}
            <i
              className="my-4 fa-solid fa-book-open fa-bounce fa-xl"
              onClick={scrollToTop}
              style={{ cursor: "pointer" }}
            ></i>
            <Link className="navbar-brand mx-4" to="/">
              Cloud_Diary
            </Link>

            {/* Navbar toggler for responsive design */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar links */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* Navigation links */}
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                    spy={1}
                    smooth={1}
                    offset={-70}
                    duration={500}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="about"
                    spy={1}
                    smooth={1}
                    offset={-70}
                    duration={500}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="contact"
                    spy={1}
                    smooth={1}
                    offset={-70}
                    duration={500}
                  >
                    Contact
                  </Link>
                </li>
              </ul>

              {/* Conditional rendering based on authentication status */}
              {!isLoggedIn ? (
                <form className="d-flex">
                  <Link className="btn btn-outline-success mx-2" role="button" to="/login">
                    Login
                  </Link>
                  <Link className="btn btn-outline-success mx-2" to="/signup" role="button">
                    Signup
                  </Link>
                </form>
              ) : (
                <button className="btn btn-outline-success" onClick={handleLogout}>
                  Logout
                </button>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
