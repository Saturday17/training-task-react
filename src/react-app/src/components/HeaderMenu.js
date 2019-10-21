import React, { Component } from 'react';
import Dropdown from './Dropdown';
import HeaderLinks from './HeaderLinks';

class HeaderMenu extends Component {

  render() {
    const { user } = this.props;

    return(
      <div className="header-comp pull-right">

        <Dropdown />

        <HeaderLinks user={ user }/>

      </div>
    );
  }
}

export default HeaderMenu;