import React, { Component } from 'react';
import ModalWindow from './ModalWindow';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Post from "./Post";

class SearchForm extends Component {

  state = {};

  searchMessage = text => {

    const { messages } = this.props;

    if (text !== '') {
      let posts = messages.filter(message => {
        let headers = message.props.message.payload.headers;
        let title = '';

        for (let i in headers) {
          if (headers[i].name === 'Subject') {
            title = headers[i].value;
          }
        }


        if(title.toUpperCase().match(text.target.value.toUpperCase())) {
          return <Post messages={messages}
                       message={message.props.message}
                       key={message.props.message.id} />;
        }
      });


      this.setState({
        posts: posts
      }, () => this.props.filterPosts(this.state.posts));
    }
  };


  render() {


    return(
      <div className="searchForm row">

        <div className="col-sm-14">
          <form name="search" action="#" method="get" className="form-inline form-search pull-left">
            <div className="input-group">
              <input className="form-control" type="text" onChange={ this.searchMessage } placeholder="Search..." />
              <a href="#" className="btn btn-search">
                <i className="icon-search"></i>
              </a>
            </div>
          </form>
        </div>

        <div className="options col-sm-10">
          <a href="#" title="Add new item" className="newItem" data-toggle="modal" data-target="#myModal"><i className="icon-plus-small"></i><span>New Item</span></a>


          <ModalWindow />

          <a href="#" className="btn btn-sm btn-option"><i className="icon-sliders"></i></a>
        </div>

      </div>
    );
  }
}


SearchForm.propTypes = {
  findMessage: PropTypes.func,
  messages: PropTypes.array
};

const mapStateToProps = state => {
  return {
    messages: state.messages
  };
};


export default connect(mapStateToProps)(SearchForm);