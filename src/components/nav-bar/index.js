import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Settings from '../settings';

class NavBar extends Component {
  state = {
    url: this.props.url,
    settingsShown: false
  };

  toggleSettings = () => {
    this.setState((state) => ({
      settingsShown: !state.settingsShown
    }));
  };

  onChange = (e) => {
    this.setState({
      url: e.target.value
    });
  };

  onKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.onUrl(e.target.value);
    }
  };

  render() {
    return (
      <>
        <div className='top-nav'>
          <button className="btn-action btn btn-dark d-none d-sm-block d-md-block d-lg-block d-xl-block" onClick={ this.props.onBack }><i className="fa fa-arrow-left"/></button>
          <button className="btn-action btn btn-dark d-none d-sm-block d-md-block d-lg-block d-xl-block" onClick={ this.props.onForward }><i className="fa fa-arrow-right"/></button>
          <button className="btn-action btn btn-dark" onClick={ this.props.onReload }><i className="fa fa-refresh"/></button>
          <input className='search-input' type="text" placeholder='Enter the URL to load' value={ this.state.url } onChange={ this.onChange } onKeyPress={ this.onKeyPress }/>
          <button className="btn-action btn btn-danger btn-go" onClick={ () => this.props.onUrl('') }><i className='fa fa-times'/></button>
          <div className="settings-btn">
            <button className="btn-action btn btn-dark" onClick={ this.toggleSettings }>
              {
                !this.state.settingsShown
                  ? <i className="fa fa-cog"/>
                  : <i className="fa fa-times-circle"/>
              }
            </button>
            { this.state.settingsShown && <Settings/> }
          </div>
        </div>
      </>
    );
  }
}

NavBar.propTypes = {
  url: PropTypes.string.isRequired,
  onUrl: PropTypes.func.isRequired,
  onReload: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  onForward: PropTypes.func.isRequired,
};

export default NavBar;