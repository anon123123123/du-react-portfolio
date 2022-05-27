import React from 'react';

// In Navbar, we can assign a style from an object by using curly braces
function Navbar({ currentPage, handlePageChange }) {
  return (
    <div className='card'>
      <div className='card-header'>
        <a href='#about-me' onClick={() => handlePageChange("ABOUT")}>About Me</a>
        <a href='#portfolio' onClick={() => handlePageChange("PORTFOLIO")}>Portfolio</a>
        <a href='#contact' onClick={() => handlePageChange("CONTACT")}>Contact</a>
        <a href='#resume' onClick={() => handlePageChange("RESUME")}>Resume</a>
        </div>

    </div>
  );
}

export default Navbar;
