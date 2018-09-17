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

  componentDidMount(){
    getExternalInfo(`chart/${this.state.timeFrame}`, this.props.asset).then((data) => {
      let mappedData = data.map((datum) => {
        return {label: datum.label, close: datum.close };
      });
      this.setState({ chartData: mappedData });
    });
  }

  update(field) {

    this.setState({ timeFrame: field }, () => {
      getExternalInfo(`chart/${this.state.timeFrame}`, this.props.asset).then((data) => {
        let mappedData = data.map((datum) => {
          return {label: datum.label, close: datum.close };
        });
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
