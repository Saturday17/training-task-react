import React, {Component} from 'react';
import PropTypes from 'prop-types';
import gmailLogo from '../images/logo_brand_brands_logos_gmail-512.png';
import { removeMessage } from "../store/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Post extends Component {

  deletePost = () => {
    const { message, messages } = this.props;

    removeMessage(message, messages);
  };

  render() {

    const { message: { payload: { headers }, snippet, labelIds } } = this.props;

    var title = '';
    var userWhoPost = '';
    for (let i in headers) {
      if (headers[i].name === 'Subject') {
        title = headers[i].value
      }
    }
    for (let i in headers) {
      if (headers[i].name === 'From') {
        userWhoPost = headers[i].value
      }
    }

    return (
      <section className="media">
        <div className="media-left">
          <a href="#">
            <img className="media-object" src={ gmailLogo } alt="userpic" />
          </a>
        </div>
        <div className="media-body">
          <div className="userInfo clearfix">
            <span>{ userWhoPost }</span>
            <span className="rank">Pro</span>
            <div className="commentsAndTime pull-right">
              <span onClick={ this.deletePost } className="icon-trash"><i className="fa fa-trash-o"></i></span>
            </div>
          </div>
          <div className="itemName">
            <a href="#" className="media-heading" title="Item title">{ title }</a>
          </div>
          <p>{ snippet }</p>
          <div className="tags">
            <button type="submit" className="btn btn-tag">
              <i className="icon-tag"></i>
            </button>
            {
              labelIds && labelIds.map(tag => <a href="#"  className="tag" title="tag" key={tag}>{tag}</a>)
            }
          </div>
        </div>
      </section>
    );
  }
}

Post.propTypes = {
  message: PropTypes.object
};


const mapActionsToProps = dispatch => {
  return {
    removeMessage: bindActionCreators(removeMessage, dispatch)
  };
};

export default connect(mapActionsToProps)(Post);