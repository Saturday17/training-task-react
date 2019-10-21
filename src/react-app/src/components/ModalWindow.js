import React, { Component } from 'react';
import { sendMessage } from "../store/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

class ModalWindow extends Component {

  state = {
    title: '',
    text: '',
    to: ''
  };

  changeTitle = e => {
    this.setState({
      title: e.target.value
    });
  };

  changeText = e => {
    this.setState({
      text: e.target.value
    });
  };

  changeRecipient = e => {
    this.setState({
      to: e.target.value
    });
  }

  createItem = () => {
    const { title, text, to } = this.state;
    if(!to){
      alert('Write to whom you want to send a message')
      return;
    }
    sendMessage(title, text, to);
  };

  render() {
    return (
      <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
           aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="myModalLabel">Add new item</h4>
            </div>
            <div className="modal-body">
              <label className="modal-label">Message to</label>
              <input type="text" className="form-control" onChange={ this.changeRecipient } />
              <label className="modal-label">Item name</label>
              <input type="text" className="form-control" onChange={ this.changeTitle } />
              <label className="modal-label">Text</label>
              <textarea className="form-control" rows="3" onChange={ this.changeText } ></textarea>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={ this.createItem } data-dismiss="modal">Send message</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ModalWindow.propTypes = {
  sendMessage: PropTypes.func
};

const mapActionsToProps = dispatch => {
  return {
    sendMessage: bindActionCreators(sendMessage, dispatch)
  };
};

export default connect(mapActionsToProps)(ModalWindow);