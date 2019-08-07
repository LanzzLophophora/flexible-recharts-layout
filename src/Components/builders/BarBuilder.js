import React, { Component } from 'react';
import { buildChildren } from './buildChildren';
import {
  BarChart,
  Brush,
  CartesianGrid,
  Legend,
  ReferenceArea,
  ReferenceDot,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
  Bar
} from 'recharts';

export default class BarBuilder extends Component {
  render() {
    const {
      referenceArea,
      referenceDot,
      referenceLine,
      cartesianGrid,
      xAxis,
      yAxis,
      toolTip,
      legend,
      brush,
      bars
    } = this.props;
    return (
      <BarChart {...this.props}>
        {referenceArea && <ReferenceArea {...referenceArea} />}
        {referenceDot && <ReferenceDot {...referenceDot} />}
        {referenceLine && <ReferenceLine {...referenceLine} />}
        {cartesianGrid && <CartesianGrid {...cartesianGrid} />}
        {xAxis && <XAxis {...xAxis} />}
        {yAxis && <YAxis {...yAxis} />}
        {toolTip && <Tooltip {...toolTip} />}
        {legend && <Legend {...legend} />}
        {brush && <Brush {...brush} />}
        {bars &&
          bars.map((bar, index) => {
            return (
              <Bar key={index} {...bar}>
                {bar.children && bar.children.map((child, index) => buildChildren(child, index))}
              </Bar>
            );
          })}
      </BarChart>
    );
  }
}
