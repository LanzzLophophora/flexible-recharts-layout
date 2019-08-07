import React from 'react';
import { connect } from 'react-redux';
import { toggleChart, showAllCharts, hideAllCharts } from '../store/charts/actions';

class SideBar extends React.Component {
  render() {
    const { incomingCharts, showAllCharts, hideAllCharts, toggleChart } = this.props;
    const handleToggleChart = id => () => {
      toggleChart(id);
    };
    return (
      <div className="sidebar-wrapper">
        <input type="checkbox" name="sidebar" id="sidebar-input" className="sidebar-check d-none" />
        <label htmlFor="sidebar-input" className="sidebar-label text-center btn">
          <span className="label-close">X</span>
          <span className="label-text">menu</span>
        </label>
        <div className="sidebar flex-column justify-content-between pt-6 pb-3 p-2">
          <div className="d-flex flex-column justify-content-around h-100 list">
            {incomingCharts.map(chart => (
              <div key={chart.id} className="line">
                {chart.name}
                <button className={`${chart.hide ? 'bg-show' : 'bg-hide'} btn`} onClick={handleToggleChart(chart.id)}>
                  {`${chart.hide ? 'Show' : 'Hide'}`}
                </button>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-between">
            <button className="btn bg-show" onClick={showAllCharts}>
              Show all
            </button>
            <button className="btn bg-hide" onClick={hideAllCharts}>
              Hide all
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  incomingCharts: store.charts.incomingCharts
});

const mapDispatchToProps = dispatch => ({
  toggleChart: id => dispatch(toggleChart(id)),
  showAllCharts: () => dispatch(showAllCharts()),
  hideAllCharts: () => dispatch(hideAllCharts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
