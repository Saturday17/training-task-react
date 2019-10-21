import React from 'react';
import FooterRights from './FooterRights';
import FooterNavbar from './FooterNavbar';

function Footer() {
  return(
    <footer className="footer">
      <FooterNavbar />

      <FooterRights />

    </footer>
  );
}

export default Footer;