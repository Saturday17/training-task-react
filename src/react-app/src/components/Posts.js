import React, { Component } from 'react';
import ControlButtons from './ControlButtons';
import Footer from './Footer';
import { connect } from "react-redux";
import PropTypes from 'prop-types';


class Posts extends Component {

  state = {
    currentPage: 1,
    postsPerPage: 4
  };

  componentDidMount() {
    const { filterPosts, posts } = this.props;

    this.setState({
      posts: posts,
      currentPage: 1
    }, () =>  filterPosts(posts));
  }

  handleClickPrevious = e => {
    e.preventDefault();
    const { currentPage } = this.state;

    if(currentPage > 1) {
      this.setState({
        currentPage: currentPage - 1
      });
    } else {
      this.setState({
        currentPage: currentPage
      });
    }
  };

  handleClickNext = e => {
    e.preventDefault();
    const { currentPage, postsPerPage } = this.state;
    const { posts } = this.props;

    if(typeof posts === 'undefined' && currentPage < 25) {
      this.setState({
        currentPage: currentPage + 1
      });
    } else if(typeof posts !== 'undefined' && currentPage < (posts.length / postsPerPage)) {
      this.setState({
        currentPage: currentPage + 1
      });
    } else {
      this.setState({
        currentPage: currentPage
      });
    }
  };

  render() {
    const { messages, posts } = this.props;
    const { currentPage, postsPerPage } = this.state;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentMessages = messages.slice(indexOfFirstPost, indexOfLastPost);

    return(
      <section className="postsContainer">

        { posts ? posts.slice(indexOfFirstPost, indexOfLastPost) : currentMessages }

        <ControlButtons clickPrevious={ this.handleClickPrevious } clickNext={ this.handleClickNext } />

        <Footer/>

      </section>
    );
  }
}

Posts.propTypes = {
  messages: PropTypes.array,
  posts: PropTypes.array
};

const mapStateToProps = state => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Posts);