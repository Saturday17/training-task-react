import React, { Component } from 'react';

class ControlButtons extends Component {

  render() {
    const {clickPrevious, clickNext} = this.props;

    return (
      <div className="controlButtons">
        <a href="#" className="btn btn-default btn-prevNext" onClick={clickPrevious}>
          <i className="icon-left-open-big"></i>Previous</a>
        <a href="#" className="btn btn-default btn-prevNext" onClick={clickNext}>Next
          <i className="icon-right-open-big"></i></a>
      </div>
    );
  }
}

export default ControlButtons;