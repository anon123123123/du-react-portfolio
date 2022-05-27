// import React from 'react';
import React, { useState } from "react";
import Navbar from './Navbar';
// import Card from './Card';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';

function Container() {
    const [currentPage, setCurrentPage] = useState("ABOUT");

    const renderPage = () => {
      if (currentPage === "ABOUT") {
        return <About />;
      }
      if (currentPage === "PORTFOLIO") {
        return <Portfolio />;
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