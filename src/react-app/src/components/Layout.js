import React, { Component } from 'react';
import Header from './Header';
import MainPart from './MainPart';


class Layout extends Component {


  render() {

    return (
      <>
        <Header />

        <MainPart />
      </>
    );
  }
}


export default Layout;