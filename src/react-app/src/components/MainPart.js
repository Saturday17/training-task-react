import React, { Component } from 'react';
import Submenu from './Submenu';
import MainHeading from './MainHeading';
import SearchForm from './SearchForm';
import Posts from './Posts';
import { findMessage, removeMessage } from "../store/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from 'prop-types';


class MainPart extends Component {

  state = {};

  filterPosts = posts => {

    this.setState({
      posts: posts
    }, () => findMessage(this.state.posts));
  };

  deleteItem = id => {
    const { posts } = this.state;
    const refreshPosts = posts.filter(post => post.id !== id);

    this.setState({
      posts: refreshPosts
    });
  };

  render() {

    return(
      <main className="container main">

        <Submenu />

        <section className="mainSection">

          <MainHeading />

          <SearchForm filterPosts={ this.filterPosts } />

          <Posts posts={ this.state.posts }
                 post={ this.state.post }
                 filterPosts={ this.filterPosts } />
        </section>
      </main>
    );
  }
}


MainPart.propTypes = {
  findMessage: PropTypes.func,
  removeMessage: PropTypes.func
};

const mapActionsToProps = dispatch => {
  return {
    findMessage: bindActionCreators(findMessage, dispatch),
    removeMessage: bindActionCreators(removeMessage, dispatch)
  };
};

export default connect(mapActionsToProps)(MainPart);