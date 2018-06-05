import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';

import './style/style.scss';


const mapStateToProps = (state) => {
  return {};
};

class App extends React.Component {
  render() {
    return (
      <div className="main">ESPI Test</div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(App));
