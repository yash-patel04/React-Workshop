import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/">
                First{" "}
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/second">
                Second{" "}
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/third">
                Third{" "}
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/fourth">
                Fourth{" "}
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/fifth">
                Fifth
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/sixth">
                Sixth
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/seventh">
                Seventh
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/eighth">
                Eighth
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/ninth">
                Ninth
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/tenth">
                Tenth
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/eleventh">
                Eleventh
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
