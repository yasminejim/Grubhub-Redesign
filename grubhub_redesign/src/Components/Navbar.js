import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              alt="grubhub logo"
              class="u-relative homepage-logo-image"
              src="https://res.cloudinary.com/grubhub-assets/image/upload/v1627314811/Citrus-assets/Logos/Email/Grubhub/grubhub-inverted_svg.svg"
            />
          </a>
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">
                Active
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="api.html">
                API
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
