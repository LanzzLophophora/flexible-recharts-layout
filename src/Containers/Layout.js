import React, { Component } from 'react';
import { connect } from 'react-redux';
import { calculateCharts } from 'helpers/calculateCharts';
import { toggleChart } from '../store/charts/actions';
import ChartWindow from './ChartWindow';

class Layout extends Component {
  render() {
    const lines = calculateCharts(this.props.charts, 3, true);
    const handleToggleChart = id => () => {
      this.props.toggleChart(id);
    };
    return (
      <div className="vh-100">
        {lines.length !== 0 &&
          lines.map((line, index) => (
            <div key={index} className={`${lines.length > 1 ? 'h-50' : 'h-100'} w-100 row m-0`}>
              {line.map(chart => {
                return (
                  <div
                    key={chart.id}
                    className={`${
                      line.length === 3 ? 'col-4' : line.length === 2 ? 'col-6' : 'col'
                    } h-100 `}
                  >
                    <div className="d-flex align-items-center justify-content-center" style={{ height: '15%' }}>
                      <h3 className="m-0">
                        {chart.name}
                      </h3>
                      <button className="btn ml-2" onClick={handleToggleChart(chart.id)}>
                        {`${chart.hide ? 'Show' : 'Hide'}`}
                      </button>
                    </div>
                    <div className="w-100 pb-2 pt-0" style={{ height: '85%' }}>
                      <ChartWindow chart={chart} />
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleChart: id => dispatch(toggleChart(id))
});

export default connect(
  null,
  mapDispatchToProps
)(Layout);
