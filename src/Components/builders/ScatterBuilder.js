import React, { Component } from 'react';
import { buildChildren } from './buildChildren';
import {
  ScatterChart,
  Brush,
  CartesianGrid,
  Legend,
  ReferenceArea,
  ReferenceDot,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
  Scatter
} from 'recharts';

export default class ScatterBuilder extends Component {
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
      scatters
    } = this.props;
    return (
      <ScatterChart {...this.props}>
        {referenceArea && <ReferenceArea {...referenceArea} />}
        {referenceDot && <ReferenceDot {...referenceDot} />}
        {referenceLine && <ReferenceLine {...referenceLine} />}
        {cartesianGrid && <CartesianGrid {...cartesianGrid} />}
        {xAxis && <XAxis {...xAxis} />}
        {yAxis && <YAxis {...yAxis} />}
        {toolTip && <Tooltip {...toolTip} />}
        {legend && <Legend {...legend} />}
        {brush && <Brush {...brush} />}
        {scatters &&
          scatters.map((scatter, index) => {
            return (
              <Scatter key={index} {...scatter}>
                {scatter.children &&
                  scatter.children.map((child, index) => buildChildren(child, index))}
              </Scatter>
            );
          })}
      </ScatterChart>
    );
  }
}
