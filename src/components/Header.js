import React from 'react';
// Here we are importing a CSS file as a dependency
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Anon McAnonerson's Portfolio</h1>
      <img id='profile-pic' src='/images/exorcist.jpeg'></img>
    </header>
  );
}

export default Header;
