import React from 'react';
import {
  AreaBuilder,
  BarBuilder,
  ComposedBuilder,
  FunnelBuilder,
  LineBuilder,
  PieBuilder,
  RadarBuilder,
  RadialBarBuilder,
  ScatterBuilder,
  TreemapBuilder
} from './index';

export function buildChart(chart) {
  switch (chart.type) {
    case 'AreaChart':
      return <AreaBuilder {...chart} />;

    case 'BarChart':
      return <BarBuilder {...chart} />;

    case 'ComposedChart':
      return <ComposedBuilder {...chart} />;

    case 'FunnelChart':
      return <FunnelBuilder {...chart} />;

    case 'LineChart':
      return <LineBuilder {...chart} />;

    case 'RadarChart':
      return <RadarBuilder {...chart} />;

    case 'RadialBarChart':
      return <RadialBarBuilder {...chart} />;

    case 'PieChart':
      return <PieBuilder {...chart} />;

    case 'ScatterChart':
      return <ScatterBuilder {...chart} />;

    case 'Treemap':
      return <TreemapBuilder {...chart} />;

    default:
      return <div className="error">What exactly do you want to see here?</div>;
  }
}
