import React, { Component } from 'react';
import Layout from './Layout';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadData } from '../store/actions';
import PropTypes from 'prop-types';
import Spinner from './Spinner';


class App extends Component {

  componentDidMount() {
    this.props.loadData();
  }

  render() {
   const { isShownSpinner } = this.props;

   return (
     <div className="wrapper">
      { isShownSpinner === false ? <Layout/> : <Spinner /> }
     </div>
    );
  }
}


App.propTypes = {
  loadData: PropTypes.func
};

const mapStateToProps = state => {
  return {
    messages: state.messages,
    isShownSpinner: state.isShownSpinner
  };
};


const mapActionsToProps = dispatch => {
  return {
    loadData: bindActionCreators(loadData, dispatch)
  };
};

export default connect(mapStateToProps, mapActionsToProps)(App);