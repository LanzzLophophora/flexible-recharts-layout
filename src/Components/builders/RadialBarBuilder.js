import React, { Component } from 'react';
import { buildChildren } from './buildChildren';
import {
  RadialBarChart,
  PolarAngleAxis,
  PolarRadiusAxis,
  PolarGrid,
  Legend,
  Tooltip,
  RadialBar
} from 'recharts';

export default class RadialBarBuilder extends Component {
  render() {
    const { polarAngleAxis, polarRadiusAxis, polarGrid, toolTip, legend, radialBars } = this.props;
    return (
      <RadialBarChart {...this.props}>
        {polarAngleAxis && <PolarAngleAxis {...polarAngleAxis} />}
        {polarRadiusAxis && <PolarRadiusAxis {...polarRadiusAxis} />}
        {polarGrid && <PolarGrid {...polarGrid} />}
        {toolTip && <Tooltip {...toolTip} />}
        {legend && <Legend {...legend} />}
        {radialBars &&
          radialBars.map((radialBar, index) => {
            return (
              <RadialBar key={index} {...radialBar}>
                {radialBar.children &&
                  radialBar.children.map((child, index) => buildChildren(child, index))}
              </RadialBar>
            );
          })}
      </RadialBarChart>
    );
  }
}
