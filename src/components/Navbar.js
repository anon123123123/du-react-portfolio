import React from 'react';

// In Navbar, we can assign a style from an object by using curly braces
function Navbar() {
  return (
    <div className='card'>
      <div className='card-header'>
        <a href='#about-me'>About Me</a>
        <a href='#portfolio'>Portfolio</a>
        <a href='#contact'>Contact</a>
        <a href='#resume'>Resume</a>
        </div>

    </div>
  );
}

export default Navbar;
