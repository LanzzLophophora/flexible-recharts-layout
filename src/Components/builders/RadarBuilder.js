import React, { Component } from 'react';
import { buildChildren } from './buildChildren';
import {
  RadarChart,
  PolarAngleAxis,
  PolarRadiusAxis,
  PolarGrid,
  Legend,
  Tooltip,
  Radar
} from 'recharts';

export default class RadarBuilder extends Component {
  render() {
    const { polarAngleAxis, polarRadiusAxis, polarGrid, toolTip, legend, radars } = this.props;
    return (
      <RadarChart {...this.props}>
        {polarAngleAxis && <PolarAngleAxis {...polarAngleAxis} />}
        {polarRadiusAxis && <PolarRadiusAxis {...polarRadiusAxis} />}
        {polarGrid && <PolarGrid {...polarGrid} />}
        {toolTip && <Tooltip {...toolTip} />}
        {legend && <Legend {...legend} />}
        {radars &&
          radars.map((radar, index) => {
            return (
              <Radar key={index} {...radar}>
                {radar.children &&
                  radar.children.map((child, index) => buildChildren(child, index))}
              </Radar>
            );
          })}
      </RadarChart>
    );
  }
}
