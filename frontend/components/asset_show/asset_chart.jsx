import React from 'react';
import { LineChart, Line, YAxis } from 'recharts';
import { getExternalInfo } from '../../util/asset_api_util';

class AssetChart extends React.Component {
  constructor(props){
    super(props);
    this.state = { chartData: [] };
  }

  componentDidMount(){
    getExternalInfo("chart", this.props.asset).then((data) => {
      let mappedData = data.map((datum) => {
        return {date: datum.date, close: datum.close };
      });
      this.setState({ chartData: mappedData });
    });
  }

  render () {
    return (
      <LineChart width={500} height={500} data={this.state.chartData}>
        <Line type="monotone" dataKey="close" stroke="#00FF00" />
        <YAxis label={{ value: 'price', angle: -90, position: 'insideLeft' }} type='number' domain={['auto', 'auto']} />
      </LineChart>
    );
  }
}

export default AssetChart;
