import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-500 text-white p-4 text-center">
      <p className="text-sm md:text-base">© {currentYear} My App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;