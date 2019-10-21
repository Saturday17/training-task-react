import React, { Component } from 'react';
import LogoBlock from './LogoBlock';
import HeaderMenu from './HeaderMenu';

class Header extends Component {

  render() {
    const { user } = this.props;

    return (
        <header className="header">

            <div className="container">

                <div className="row">

                    <LogoBlock />

                    <HeaderMenu user={ user } />

                </div>

            </div>

        </header>
    );
}
}

export default Header;