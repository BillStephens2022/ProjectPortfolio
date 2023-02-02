import React from "react";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark justify-content-end">
      <div className="container-fluid">
        <a className="navbar-brand" href="#about" onClick={() => handlePageChange('About')}>
          <span className="brand">Bill Stephens</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} aria-current="page">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
