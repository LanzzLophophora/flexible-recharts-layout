import React, { Component } from 'react';
import App from './App';
import { connect } from 'react-redux';

import { handleIncomingDataGetting } from '../store/charts/thunks';

class ContentWrapper extends Component {
  componentDidMount() {
    this.props.handleIncomingDataGetting();
  }

  render() {
    return <App />;
  }
}

const mapDispatchToProps = {
  handleIncomingDataGetting
};

export default connect(
  null,
  mapDispatchToProps
)(ContentWrapper);
