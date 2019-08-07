import React, { Component } from 'react';
import { buildChildren } from './buildChildren';
import {
  PieChart,
  PolarAngleAxis,
  PolarRadiusAxis,
  PolarGrid,
  Legend,
  Tooltip,
  Pie
} from 'recharts';

export default class PieBuilder extends Component {
  render() {
    const { polarAngleAxis, polarRadiusAxis, polarGrid, toolTip, legend, pies } = this.props;

    return (
      <PieChart {...this.props}>
        {polarAngleAxis && <PolarAngleAxis {...polarAngleAxis} />}
        {polarRadiusAxis && <PolarRadiusAxis {...polarRadiusAxis} />}
        {polarGrid && <PolarGrid {...polarGrid} />}
        {toolTip && <Tooltip {...toolTip} />}
        {legend && <Legend {...legend} />}
        {pies &&
          pies.map((pie, index) => {
            return (
              <Pie key={index} {...pie}>
                {pie.children && pie.children.map((child, index) => buildChildren(child, index))}
              </Pie>
            );
          })}
      </PieChart>
    );
  }
}
