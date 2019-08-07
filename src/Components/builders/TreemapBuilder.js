import React, { Component } from 'react';
import { Treemap } from 'recharts';

export default class TreemapBuilder extends Component {
  render() {
    const treemapProps = { ...this.props };
    delete treemapProps.type;
    return <Treemap {...treemapProps} />;
  }
}
