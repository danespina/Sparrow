import React from 'react';
import { LineChart, Line, YAxis, CartesianAxis, Tooltip } from 'recharts';
import { getExternalInfo } from '../../util/asset_api_util';

class AssetChart extends React.Component {
  constructor(props){
    super(props);
    this.state = { chartData: [], timeFrame: "1D" };
    this.times = {
      '1D': 'Today',
      '1M': 'Past Month',
      '3M': 'Past 3 Months',
      '6M': 'Past 6 Months',
      '1Y': 'Past Year',
      '2Y': 'Past 2 Years'
    };
    this.update = this.update.bind(this);
  }

  cleanIncoming(arr) {
    let lastVals = arr.map((el) => {
      return el.close;
    });
    for (let i = lastVals.length; i >= 0; i--) {
      if (!lastVals[i]) {
        let j = i;
        while (!lastVals[j] && j > 0) {
          j--;
        }
        lastVals[i] = lastVals[j];
      }
    }
    return arr.map((el, idx) => {
      return {label: el.label, close: lastVals[idx]};
    });
  }

  displayNum(num) {
    if(num < 0){
      return `-$${Math.abs(num).toFixed(2)}`;
    } else {
      return `$${num.toFixed(2)}`;
    }
  }

  componentDidMount() {
    getExternalInfo(`chart/${this.state.timeFrame}`, this.props.asset).then((data) => {
      let mappedData = data.map((datum) => {
        return {label: datum.label, close: datum.close };
      });
      mappedData = this.cleanIncoming(mappedData);
      this.setState({ chartData: mappedData });
    });
  }

  update(field) {
    this.setState({ timeFrame: field }, () => {
      getExternalInfo(`chart/${this.state.timeFrame}`, this.props.asset).then((data) => {
        let mappedData = data.map((datum) => {
          return {label: datum.label, close: datum.close };
        });
        mappedData = this.cleanIncoming(mappedData);
        this.setState({ chartData: mappedData });
      });
    });
  }

  render () {
    let timeButtons = Object.keys(this.times).map((frame) => {
      return <button key={frame} className={this.state.timeFrame === frame ? "selected-time-frame" : ""}
        onClick={() => this.update(frame)}>{frame}</button>;
    });
    let change;
    let percentChange;
    let loading = <div className="cover">
      <div className="loader" id="loader-6">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
    </div>;
    if (this.state.chartData.length > 0) {
      change = this.displayNum(this.state.chartData.pop().close - this.state.chartData.shift().close);
      percentChange = ((this.state.chartData.pop().close - this.state.chartData.shift().close) * 100 / this.state.chartData.shift().close).toFixed(2);
      loading = null;
    }

    return (
      <div className="the-chart">
        <div className="chart-header">
          {loading}
          <h3>{change} ({percentChange}%)</h3> <h3 className="dark-gray">{this.times[this.state.timeFrame]}</h3>
        </div>
        <LineChart width={676} height={196} data={this.state.chartData}>
          <Line type="linear" dataKey="close" stroke="#21ce99" strokeWidth={2} dot={false} animationDuration={0}/>
          <Tooltip labelFormatter={(data) => (`Date: ${data}`)} />
          <YAxis domain={['auto', 'auto']} hide={true}/>
        </LineChart>
        <ul>
          {timeButtons}
        </ul>
      </div>
    );
  }
}

export default AssetChart;
