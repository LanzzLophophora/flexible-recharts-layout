import React, { Component } from 'react';
import { buildChildren } from './buildChildren';
import { FunnelChart, Legend, Tooltip, Funnel } from 'recharts';

export default class FunnelBuilder extends Component {
  render() {
    const { toolTip, legend, funnels } = this.props;
    return (
      <FunnelChart {...this.props}>
        {toolTip && <Tooltip {...toolTip} />}
        {legend && <Legend {...legend} />}
        {funnels &&
          funnels.map((funnel, index) => {
            return (
              <Funnel key={index} {...funnel}>
                {funnel.children &&
                  funnel.children.map((child, index) => buildChildren(child, index))}
              </Funnel>
            );
          })}
      </FunnelChart>
    );
  }
}
