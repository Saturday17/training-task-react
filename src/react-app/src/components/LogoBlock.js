import React from 'react';
import logotype from '../images/logotype.png';
import logoMobile from '../images/logotypeMobile.png';

function LogoBlock() {
  return(
    <div className="logoBlock">
      <a href="index.html"><img src={ logotype } className="logo" title="Logo" /><img src={ logoMobile } className="logoMobile" /></a>
      <span>Page title</span>
    </div>
  );
}

export default LogoBlock;