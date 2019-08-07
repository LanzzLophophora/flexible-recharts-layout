import React, { Component } from 'react';
import { connect } from 'react-redux';
import { calculateCharts } from 'helpers/calculateCharts';
import Layout from './Layout';

class LayoutWrapper extends Component {
  render() {
    const filterCharts = this.props.charts.incomingCharts.filter(chart => !chart.hide);
    const partsOfCharts = calculateCharts(filterCharts, 6);
    if (!filterCharts.length) {
      return (
        <div className="absolute-center">
          <h1>`\_(''_)_/`</h1>
          <p> No charts - no problem</p>
        </div>
      );
    }
    return (
      <div className="content-wrapper">
        {partsOfCharts.map((part, index) => (
          <Layout key={index} charts={part} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = store => ({
  charts: store.charts
});

export default connect(mapStateToProps)(LayoutWrapper);
