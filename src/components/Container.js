// import React from 'react';
import React, { useState } from "react";
import Navbar from './Navbar';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';

function Container() {
    const [currentPage, setCurrentPage] = useState("ABOUT");

    const renderPage = () => {
      if (currentPage === "ABOUT") {
        return <About />;
      }
      if (currentPage === "PORTFOLIO") {
        return <Portfolio />;
      } 
      if (currentPage === "CONTACT") {
        return <Contact />;
      }
      if (currentPage === "RESUME") {
        return <Resume />;
      }

      return;
    };
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
  
    return (
      <section>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </section>
    );
}

export default Container;