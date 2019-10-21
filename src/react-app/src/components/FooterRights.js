import React from 'react';
import logotype2 from '../images/logotype2.png';

function FooterRights() {
  return(
    <div className="rights clearfix">
      <img src={ logotype2 } className="pull-left" />
      <p>&copy;2015. Qulix Systems. All rights reserved.</p>
    </div>
  );
}

export default FooterRights;