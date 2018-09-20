import React from 'react';
import { LineChart, Line, YAxis, CartesianAxis, Tooltip } from 'recharts';
import { getExternalInfo } from '../../util/asset_api_util';

class AssetChart extends React.Component {
  constructor(props){
    super(props);
    this.state = { chartData: [], timeFrame: "1D" };
    this.times = ['1D', '1M', '3M', '6M', '1Y', '2Y'];
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
    let timeButtons = this.times.map((frame) => {
      return <button key={frame} className={this.state.timeFrame === frame ? "selected-time-frame" : ""}
        onClick={() => this.update(frame)}>{frame}</button>;
    });

    return (
      <div className="the-chart">
        <LineChart width={676} height={196} data={this.state.chartData}>
          <Line type="linear" dataKey="close" stroke="#21ce99" strokeWidth={2} dot={false} animationDuration={0}/>
          <Tooltip  position={{ x: 0, y: 0 }} />
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
