import React from 'react';
import { LineChart, Line, YAxis } from 'recharts';
import { getExternalInfo } from '../../util/asset_api_util';

class AssetChart extends React.Component {
  constructor(props){
    super(props);
    this.state = { chartData: [], timeFrame: "1d" };
    this.times = ['1d', '1m', '3m', '6m', '1y', '2y'];
    this.update = this.update.bind(this);
  }

  componentDidMount(){
    getExternalInfo(`chart/${this.state.timeFrame}`, this.props.asset).then((data) => {
      let mappedData = data.map((datum) => {
        return {date: datum.date, close: datum.close };
      });
      this.setState({ chartData: mappedData });
    });
  }

  update(field) {

    this.setState({ timeFrame: field }, () => {
      getExternalInfo(`chart/${this.state.timeFrame}`, this.props.asset).then((data) => {
        let mappedData = data.map((datum) => {
          return {date: datum.date, close: datum.close };
        });
        this.setState({ chartData: mappedData });
      });
    });
  }

  render () {
    let timeButtons = this.times.map((frame) => {
      return <button onClick={() => this.update(frame)}>{frame}</button>;
    });
    return (
      <div className="the-chart">
        <LineChart width={900} height={300} data={this.state.chartData}>
          <Line type="linear" dataKey="close" stroke="#00FF00" dot={false}/>
          <YAxis domain={['auto', 'auto']} />
        </LineChart>
        <ul>
          {timeButtons}
        </ul>
      </div>
    );
  }
}

export default AssetChart;
