import React, { Component } from 'react';

class Dropdown extends Component {

  state = {
    currentCity: 'Minsk'
  };

  chooseCity = e => {
    const clickedCity = e.target.childNodes.item(0).nodeValue;

    this.setState({
      currentCity: clickedCity
    });
  };

  render() {
    const { currentCity } = this.state;

    return (
      <div className="dropdown">
        <a className="dropdown-toggle" className="dropdownMenu1" data-toggle="dropdown" aria-expanded="true"
           href="#"><span>{ currentCity }</span><i className="icon-down-open"></i></a>
        <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
          <li role="presentation"><a role="menuitem" tabIndex="-1" href="#" onClick={ this.chooseCity }>Minsk</a></li>
          <li role="presentation"><a role="menuitem" tabIndex="-1" href="#" onClick={ this.chooseCity }>Moscow</a></li>
          <li role="presentation"><a role="menuitem" tabIndex="-1" href="#" onClick={ this.chooseCity }>Los-Angeles</a></li>
          <li role="presentation"><a role="menuitem" tabIndex="-1" href="#" onClick={ this.chooseCity }>Tokio</a></li>
          <li role="presentation"><a role="menuitem" tabIndex="-1" href="#" onClick={ this.chooseCity }>Barcelona</a></li>
        </ul>
      </div>
    );
  }
}

export default Dropdown;