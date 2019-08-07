import React, { Component } from 'react';
import { buildChildren } from './buildChildren';
import {
  ComposedChart,
  Brush,
  CartesianGrid,
  Legend,
  ReferenceArea,
  ReferenceDot,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
  Area,
  Bar,
  Line
} from 'recharts';

export default class ComposedBuilder extends Component {
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
      area,
      bar,
      line
    } = this.props;
    return (
      <ComposedChart {...this.props}>
        {referenceArea && <ReferenceArea {...referenceArea} />}
        {referenceDot && <ReferenceDot {...referenceDot} />}
        {referenceLine && <ReferenceLine {...referenceLine} />}
        {cartesianGrid && <CartesianGrid {...cartesianGrid} />}
        {xAxis && <XAxis {...xAxis} />}
        {yAxis && <YAxis {...yAxis} />}
        {toolTip && <Tooltip {...toolTip} />}
        {legend && <Legend {...legend} />}
        {brush && <Brush {...brush} />}
        {area && (
          <Area key={area.id} {...area}>
            {area.children && area.children.map((child, index) => buildChildren(child, index))}
          </Area>
        )}
        {bar && (
          <Bar key={bar.id} {...bar}>
            {bar.children && bar.children.map((child, index) => buildChildren(child, index))}
          </Bar>
        )}
        {line && (
          <Line key={line.id} {...line}>
            {line.children && line.children.map((child, index) => buildChildren(child, index))}
          </Line>
        )}
      </ComposedChart>
    );
  }
}
