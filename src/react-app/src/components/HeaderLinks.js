import React, { Component } from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

class HeaderLinks extends Component {


  render() {

    const { user: {  fullName, imgUrl  } } = this.props;

    return(
      <>
        <a href="#" className="btn btn-sm btn-header">
          <i className="headerIcon icon-bell"></i>
        </a>
        <a href="#" className="btn btn-sm btn-header">
          <i className="headerIcon icon-mail"></i>
        </a>
        <a href="#" className="profile"><span>{ fullName }</span><img src={ imgUrl } /></a>
        <a href="#" className="btn btn-xs btn-header">
          <i className="headerIcon icon-search"></i>
        </a>
      </>
    );
  }
}

HeaderLinks.propTypes = {
  user: PropTypes.object
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};


export default connect(mapStateToProps)(HeaderLinks);