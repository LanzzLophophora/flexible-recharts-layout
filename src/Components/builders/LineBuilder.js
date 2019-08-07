import React, { Component } from 'react';
import { buildChildren } from './buildChildren';
import {
  LineChart,
  Brush,
  CartesianGrid,
  Legend,
  ReferenceArea,
  ReferenceDot,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
  Line
} from 'recharts';

export default class LineBuilder extends Component {
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
      lines
    } = this.props;
    return (
      <LineChart {...this.props}>
        {referenceArea && <ReferenceArea {...referenceArea} />}
        {referenceDot && <ReferenceDot {...referenceDot} />}
        {referenceLine && <ReferenceLine {...referenceLine} />}
        {cartesianGrid && <CartesianGrid {...cartesianGrid} />}
        {xAxis && <XAxis {...xAxis} />}
        {yAxis && <YAxis {...yAxis} />}
        {toolTip && <Tooltip {...toolTip} />}
        {legend && <Legend {...legend} />}
        {brush && <Brush {...brush} />}
        {lines &&
          lines.map((line, index) => {
            return (
              <Line key={index} {...line}>
                {line.children && line.children.map((child, index) => buildChildren(child, index))}
              </Line>
            );
          })}
      </LineChart>
    );
  }
}
