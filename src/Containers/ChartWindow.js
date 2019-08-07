import React, { Component } from 'react';
import { ResponsiveContainer } from 'recharts';
import { buildChart } from 'Components/builders/';

class ChartWindow extends Component {
  render() {
    const { chart } = this.props;
    return (
      <ResponsiveContainer width="100%" height="100%">
        {buildChart(chart)}
      </ResponsiveContainer>
    );
  }
}

export default ChartWindow;
